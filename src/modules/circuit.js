// ── Circuit PCB Background Animation ─────────────────────────
// Normal mode  : random grid traces, packets travel in any direction.
// Radial mode  : traces branch from center outward, packets always
//                flow center → edge (used in Contact section).

const GRID         = 55
const TRACE_ALPHA  = 0.13
const PAD_ALPHA    = 0.22
const PAD_SIZE     = 3.5
const PACKET_COUNT = 14
const SPEED_MIN    = 85
const SPEED_MAX    = 185
const TRAIL_RATIO  = 0.28
const COLORS       = ['#00B3FF', '#00B3FF', '#00B3FF', '#7b5cf5']

// ─────────────────────────────────────────────────────────────
class CircuitBoard {
  constructor (canvas, radial = false) {
    this.canvas  = canvas
    this.ctx     = canvas.getContext('2d')
    this.radial  = radial
    this.W       = 0
    this.H       = 0
    this.segments = []
    this.nodes    = []
    this.packets  = []
    this.raf      = null
    this.visible  = true

    this._bindObservers()
    this._resize()
    this._generate()
    this._loop(performance.now())
  }

  // ── Observers ──────────────────────────────────────────────
  _bindObservers () {
    this._io = new IntersectionObserver(
      ([entry]) => { this.visible = entry.isIntersecting },
      { threshold: 0 }
    )
    this._io.observe(this.canvas.parentElement)

    this._ro = new ResizeObserver(() => {
      this._resize()
      this._generate()
    })
    this._ro.observe(this.canvas.parentElement)
  }

  _resize () {
    const el      = this.canvas.parentElement
    this.W        = el.offsetWidth  || el.getBoundingClientRect().width  || 800
    this.H        = el.offsetHeight || el.getBoundingClientRect().height || 600
    this.canvas.width  = this.W
    this.canvas.height = this.H
  }

  _generate () {
    this.radial ? this._generateRadial() : this._generateGrid()
  }

  // ── Grid generation (normal sections) ──────────────────────
  _generateGrid () {
    this.segments = []
    this.nodes    = []
    this.packets  = []

    const { W, H } = this
    const cols = Math.ceil(W / GRID) + 1
    const rows = Math.ceil(H / GRID) + 1

    for (let r = 0; r <= rows; r++) {
      const y = r * GRID + _jitter(GRID * 0.25)
      let x   = _jitter(GRID * 0.5)
      while (x < W) {
        const spanCols = 2 + Math.floor(Math.random() * 5)
        const x2       = Math.min(x + spanCols * GRID + _jitter(GRID * 0.3), W)
        if (Math.random() > 0.35 && x2 - x > GRID * 0.8) this._addSeg(x, y, x2, y)
        x = x2 + GRID * (0.2 + Math.random() * 0.8)
      }
    }

    for (let c = 0; c <= cols; c++) {
      const x = c * GRID + _jitter(GRID * 0.25)
      let y   = _jitter(GRID * 0.5)
      while (y < H) {
        const spanRows = 1 + Math.floor(Math.random() * 4)
        const y2       = Math.min(y + spanRows * GRID + _jitter(GRID * 0.3), H)
        if (Math.random() > 0.45 && y2 - y > GRID * 0.8) this._addSeg(x, y, x, y2)
        y = y2 + GRID * (0.2 + Math.random() * 0.9)
      }
    }

    for (let i = 0; i < PACKET_COUNT; i++) this._spawnPacket(Math.random())
  }

  // ── Radial generation (contact section) ────────────────────
  // The canvas center acts as the origin "chip". Four trunk arms
  // loop all the way to the canvas boundary; branches are sparse.
  // All segments point (inner → outer) so packets flow center → edge.
  _generateRadial () {
    this.segments = []
    this.nodes    = []
    this.packets  = []

    const cx = this.W / 2
    const cy = this.H / 2

    const dirs = [
      { dx:  1, dy:  0 },
      { dx: -1, dy:  0 },
      { dx:  0, dy:  1 },
      { dx:  0, dy: -1 },
    ]

    for (const d of dirs) this._buildTrunk(cx, cy, d.dx, d.dy)

    for (let i = 0; i < PACKET_COUNT; i++) this._spawnRadialPacket()
  }

  // Main trunk: loops from (x,y) in direction (dx,dy) until canvas edge.
  // At each node, spawns sparse perpendicular branches.
  _buildTrunk (x, y, dx, dy) {
    let cx = x, cy = y
    while (cx > -GRID && cx < this.W + GRID && cy > -GRID && cy < this.H + GRID) {
      const len = GRID * (1.1 + Math.random() * 1.3)
      const x2  = cx + dx * len
      const y2  = cy + dy * len
      this._addSeg(cx, cy, x2, y2)

      // Sparse perpendicular branches (max depth 3)
      const px = dy, py = -dx
      if (Math.random() < 0.35) this._buildBranch(x2, y2,  px,  py, 0)
      if (Math.random() < 0.25) this._buildBranch(x2, y2, -px, -py, 0)

      cx = x2; cy = y2
    }
  }

  // Recursive branch — limited depth, lower branching probability.
  _buildBranch (x, y, dx, dy, depth) {
    if (depth >= 3) return
    if (x < -GRID || x > this.W + GRID || y < -GRID || y > this.H + GRID) return

    const len = GRID * (1.0 + Math.random() * 1.2)
    const x2  = x + dx * len
    const y2  = y + dy * len
    this._addSeg(x, y, x2, y2)

    if (Math.random() < 0.55) this._buildBranch(x2, y2, dx, dy, depth + 1)

    const px = dy, py = -dx
    if (Math.random() < 0.25) this._buildBranch(x2, y2,  px,  py, depth + 1)
    if (Math.random() < 0.15) this._buildBranch(x2, y2, -px, -py, depth + 1)
  }

  // Packets only spawn on segments whose START is within 2 grid-cells
  // of the canvas center — they always emerge from the "chip" origin.
  _spawnRadialPacket () {
    if (!this.segments.length) return
    const cx = this.W / 2
    const cy = this.H / 2

    const inner = this.segments.filter(
      s => Math.hypot(s.x1 - cx, s.y1 - cy) < GRID * 2
    )
    const pool  = inner.length ? inner : this.segments
    const seg   = pool[Math.floor(Math.random() * pool.length)]
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]

    this.packets.push({
      seg,
      t:        0,
      speed:    SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
      color,
      trailLen: TRAIL_RATIO + Math.random() * 0.12,
    })
  }

  // ── Shared helpers ─────────────────────────────────────────
  _addSeg (x1, y1, x2, y2) {
    const len = Math.hypot(x2 - x1, y2 - y1)
    if (len < 5) return
    this.segments.push({ x1, y1, x2, y2, len })
    this.nodes.push({ x: x1, y: y1 })
    this.nodes.push({ x: x2, y: y2 })
  }

  _spawnPacket (startT = 0) {
    if (!this.segments.length) return
    const seg   = this.segments[Math.floor(Math.random() * this.segments.length)]
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.packets.push({
      seg,
      t:        startT,
      speed:    SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
      color,
      trailLen: TRAIL_RATIO + Math.random() * 0.12,
    })
  }

  // Returns all segments whose start point matches the end of seg.
  // Used in radial mode to chain packets along connected paths.
  _nextSegments (seg) {
    const ex = seg.x2, ey = seg.y2
    return this.segments.filter(s => s.x1 === ex && s.y1 === ey)
  }

  // ── Update ─────────────────────────────────────────────────
  _update (dt) {
    for (let i = this.packets.length - 1; i >= 0; i--) {
      const p = this.packets[i]
      p.t += (p.speed * dt) / p.seg.len
      if (p.t >= 1) {
        if (this.radial) {
          // Try to continue onto the next connected segment
          const nexts = this._nextSegments(p.seg)
          if (nexts.length) {
            // Pick one at random and keep traveling
            p.seg = nexts[Math.floor(Math.random() * nexts.length)]
            p.t   = 0
          } else {
            // Reached a leaf — die and respawn from center
            this.packets.splice(i, 1)
            this._spawnRadialPacket()
          }
        } else {
          this.packets.splice(i, 1)
          this._spawnPacket(0)
        }
      }
    }
    while (this.packets.length < PACKET_COUNT) {
      this.radial ? this._spawnRadialPacket() : this._spawnPacket(0)
    }
  }

  // ── Draw ───────────────────────────────────────────────────
  _draw () {
    const { ctx, W, H } = this
    ctx.clearRect(0, 0, W, H)

    // 1. Dim circuit traces
    ctx.save()
    ctx.strokeStyle = `rgba(0,179,255,${TRACE_ALPHA})`
    ctx.lineWidth   = 1
    for (const s of this.segments) {
      ctx.beginPath()
      ctx.moveTo(s.x1, s.y1)
      ctx.lineTo(s.x2, s.y2)
      ctx.stroke()
    }
    ctx.restore()

    // 2. Junction pads
    ctx.save()
    ctx.fillStyle = `rgba(0,179,255,${PAD_ALPHA})`
    for (const n of this.nodes) {
      ctx.fillRect(n.x - PAD_SIZE, n.y - PAD_SIZE, PAD_SIZE * 2, PAD_SIZE * 2)
    }
    ctx.restore()

    // 3. Data packets — comet tail + glowing head
    for (const p of this.packets) {
      const { seg, t, color, trailLen } = p
      const tailT = Math.max(0, t - trailLen)

      const hx = seg.x1 + (seg.x2 - seg.x1) * t
      const hy = seg.y1 + (seg.y2 - seg.y1) * t
      const tx = seg.x1 + (seg.x2 - seg.x1) * tailT
      const ty = seg.y1 + (seg.y2 - seg.y1) * tailT

      if (Math.abs(hx - tx) > 0.5 || Math.abs(hy - ty) > 0.5) {
        ctx.save()
        const grad = ctx.createLinearGradient(tx, ty, hx, hy)
        grad.addColorStop(0, 'transparent')
        grad.addColorStop(1, color)
        ctx.strokeStyle = grad
        ctx.lineWidth   = 2
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(hx, hy)
        ctx.stroke()
        ctx.restore()
      }

      ctx.save()
      const halo = ctx.createRadialGradient(hx, hy, 0, hx, hy, 10)
      halo.addColorStop(0, color + 'cc')
      halo.addColorStop(1, 'transparent')
      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(hx, hy, 10, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      ctx.save()
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(hx, hy, 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }
  }

  // ── Animation loop ─────────────────────────────────────────
  _loop (prev) {
    this.raf = requestAnimationFrame((now) => {
      if (this.visible) {
        const dt = Math.min((now - prev) / 1000, 0.05)
        this._update(dt)
        this._draw()
      }
      this._loop(now)
    })
  }

  destroy () {
    cancelAnimationFrame(this.raf)
    this._io.disconnect()
    this._ro.disconnect()
  }
}

// ── Helpers ────────────────────────────────────────────────────
function _jitter (range) {
  return (Math.random() - 0.5) * 2 * range
}

// ── Public init ────────────────────────────────────────────────
export function initCircuit () {
  document.querySelectorAll('.section-bg').forEach((bg) => {
    const canvas = document.createElement('canvas')
    bg.appendChild(canvas)
    const radial = bg.dataset.circuit === 'radial'
    new CircuitBoard(canvas, radial)
  })
}

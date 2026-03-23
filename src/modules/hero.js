import * as THREE from 'three'
import gsap from 'gsap'

const ROLES_ES = ['Senior QA Engineer', 'Test Automation Specialist', 'FinTech QA Lead', 'AI QA Tools Builder']
const ROLES_EN = ['Senior QA Engineer', 'Test Automation Specialist', 'FinTech QA Lead', 'AI QA Tools Builder']

export function initHero() {
  initParticles()
  initEntranceAnim()
  initTypewriterCycle(ROLES_ES)
}

// ── Three.js Particle Field ──────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('hero-canvas')
  if (!canvas) return

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)

  const scene  = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 50)
  camera.position.z = 4

  // ── Geometry ──
  const COUNT = window.innerWidth < 768 ? 600 : 1200
  const positions = new Float32Array(COUNT * 3)
  const sizes     = new Float32Array(COUNT)
  const randoms   = new Float32Array(COUNT)

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 14
    positions[i * 3 + 1] = (Math.random() - 0.5) * 9
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4
    sizes[i]   = Math.random() * 2.5 + 0.5
    randoms[i] = Math.random()
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('aSize',    new THREE.BufferAttribute(sizes, 1))
  geometry.setAttribute('aRandom',  new THREE.BufferAttribute(randoms, 1))

  // ── Shader Material (glowing round points) ──
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime:       { value: 0 },
      uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uOpacity:    { value: 0 },
    },
    vertexShader: `
      attribute float aSize;
      attribute float aRandom;
      uniform float uTime;
      uniform vec2  uMouse;
      uniform float uPixelRatio;

      void main() {
        vec3 pos = position;

        // Gentle sine drift
        pos.y += sin(uTime * 0.25 + aRandom * 6.28) * 0.08;
        pos.x += cos(uTime * 0.18 + aRandom * 3.14) * 0.06;

        // Mouse parallax (gentle repulsion)
        vec2 diff = pos.xy - (uMouse - 0.5) * vec2(14.0, 9.0);
        float dist = length(diff);
        if (dist < 2.0) {
          pos.xy += normalize(diff) * (2.0 - dist) * 0.05;
        }

        vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
        gl_Position  = projectionMatrix * mvPos;
        gl_PointSize = aSize * uPixelRatio * (220.0 / -mvPos.z);
      }
    `,
    fragmentShader: `
      uniform float uOpacity;

      void main() {
        vec2  uv   = gl_PointCoord - 0.5;
        float dist = length(uv);
        if (dist > 0.5) discard;

        float alpha = 1.0 - smoothstep(0.25, 0.5, dist);
        gl_FragColor = vec4(0.0, 0.702, 1.0, alpha * 0.28 * uOpacity);
      }
    `,
  })

  const particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Fade in particles
  gsap.to(material.uniforms.uOpacity, { value: 0.75, duration: 2.5, delay: 0.5 })

  // ── Mouse tracking ──
  const mouse = new THREE.Vector2(0.5, 0.5)
  const targetMouse = new THREE.Vector2(0.5, 0.5)
  window.addEventListener('mousemove', (e) => {
    targetMouse.x = e.clientX / window.innerWidth
    targetMouse.y = 1 - e.clientY / window.innerHeight
  }, { passive: true })

  // ── Resize ──
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    material.uniforms.uPixelRatio.value = renderer.getPixelRatio()
  })

  // ── Render loop ──
  const clock = new THREE.Clock()
  function tick() {
    const elapsed = clock.getElapsedTime()
    material.uniforms.uTime.value = elapsed

    // Smooth mouse lerp
    mouse.x += (targetMouse.x - mouse.x) * 0.04
    mouse.y += (targetMouse.y - mouse.y) * 0.04
    material.uniforms.uMouse.value.copy(mouse)

    renderer.render(scene, camera)
    requestAnimationFrame(tick)
  }
  tick()
}

// ── GSAP Entrance Animations ─────────────────────────────────
function initEntranceAnim() {
  const els = ['.hero-tag', '.hero-title', '.hero-role', '.hero-description', '.hero-cta']

  // Set initial hidden state BEFORE building the timeline
  gsap.set(els, { opacity: 0, y: 40 })

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(els, { opacity: 1, y: 0 })
    return
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.to('.hero-tag',         { opacity: 1, y: 0, duration: 0.7, delay: 0.4 })
    .to('.hero-title',       { opacity: 1, y: 0, duration: 0.9 }, '-=0.3')
    .to('.hero-role',        { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
    .to('.hero-description', { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
    .to('.hero-cta',         { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
}

// ── Typewriter Role Cycle ─────────────────────────────────────
function initTypewriterCycle(roles) {
  const roleEl = document.querySelector('.hero-role-text')
  if (!roleEl) return

  let index = 0

  setInterval(() => {
    index = (index + 1) % roles.length
    gsap.to(roleEl, {
      opacity: 0, y: -12, duration: 0.3, ease: 'power2.in',
      onComplete: () => {
        roleEl.textContent = roles[index]
        gsap.to(roleEl, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
      },
    })
  }, 2800)
}

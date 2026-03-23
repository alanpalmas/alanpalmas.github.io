export function initCursor() {
  const dot  = document.getElementById('cursor-dot')
  const ring = document.getElementById('cursor-ring')
  if (!dot || !ring) return

  // Only on pointer devices
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

  let mouseX = 0, mouseY = 0
  let ringX  = 0, ringY  = 0

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
  })

  // Ring follows with lerp
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12
    ringY += (mouseY - ringY) * 0.12
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
    requestAnimationFrame(animateRing)
  }
  animateRing()

  // Grow on interactive elements
  const interactives = 'a, button, .magnetic, .filter-btn, .proj-card, .social-icon'
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactives)) {
      document.body.classList.add('cursor-hover')
    }
  })
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactives)) {
      document.body.classList.remove('cursor-hover')
    }
  })

  // Hide on leave
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0'
    ring.style.opacity = '0'
  })
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1'
    ring.style.opacity = '1'
  })
}

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initContact() {
  // Section reveal
  gsap.from('.contact-inner > *', {
    opacity: 0, y: 40, duration: 0.7, ease: 'power3.out',
    stagger: 0.12,
    scrollTrigger: { trigger: '#contact', start: 'top 70%', once: true },
  })

  // Footer reveal
  gsap.from('.footer-inner > *', {
    opacity: 0, y: 20, duration: 0.6, ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: { trigger: '.footer', start: 'top 90%', once: true },
  })

  // ── Magnetic hover effect on .magnetic elements ──
  document.querySelectorAll('.magnetic').forEach((el) => {
    const strength = el.classList.contains('btn') ? 0.35 : 0.25

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect()
      const cx   = rect.left + rect.width  / 2
      const cy   = rect.top  + rect.height / 2
      const dx   = (e.clientX - cx) * strength
      const dy   = (e.clientY - cy) * strength

      gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' })
    })

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
    })
  })
}

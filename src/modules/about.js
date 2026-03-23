import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initAbout() {
  // ── Section reveal ──
  gsap.from('.about .section-header', {
    opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
    scrollTrigger: {
      trigger: '#about',
      start: 'top 75%',
      once: true,
    },
  })

  gsap.from('.about-p', {
    opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.about-text-col',
      start: 'top 75%',
      once: true,
    },
  })

  gsap.from('.badge-pill', {
    opacity: 0, scale: 0.85, duration: 0.5, ease: 'back.out(1.7)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.about-badges',
      start: 'top 80%',
      once: true,
    },
  })

  // ── Stat Cards reveal ──
  gsap.from('.stat-card', {
    opacity: 0, y: 30, scale: 0.95, duration: 0.6, ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.about-stats-col',
      start: 'top 75%',
      once: true,
    },
  })

  // ── Counter animation ──
  document.querySelectorAll('.stat-num').forEach((el) => {
    const target = parseInt(el.getAttribute('data-target') ?? '0', 10)
    const obj    = { val: 0 }

    ScrollTrigger.create({
      trigger: el.closest('.stat-card'),
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          snap: { val: 1 },
          onUpdate: () => { el.textContent = Math.round(obj.val) },
        })
      },
    })
  })
}

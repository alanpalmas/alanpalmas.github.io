import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initExperience() {
  // Section header
  gsap.from('.experience .section-header', {
    opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '#experience', start: 'top 75%', once: true },
  })

  // ── Timeline line draw ──
  gsap.fromTo('.timeline-progress',
    { height: '0%' },
    {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1.5,
      },
    }
  )

  // ── Timeline cards: slide in from alternating sides ──
  document.querySelectorAll('.timeline-item').forEach((item) => {
    const isLeft = item.classList.contains('tl-left')
    const card   = item.querySelector('.timeline-card')
    const dot    = item.querySelector('.timeline-dot')

    gsap.from(card, {
      opacity: 0,
      x: isLeft ? -60 : 60,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 78%',
        once: true,
      },
    })

    gsap.from(dot, {
      scale: 0,
      duration: 0.4,
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: item,
        start: 'top 78%',
        once: true,
      },
    })
  })
}

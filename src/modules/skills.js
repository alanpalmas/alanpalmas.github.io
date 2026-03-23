import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initSkills() {
  // Section header
  gsap.from('.skills .section-header', {
    opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '#skills', start: 'top 75%', once: true },
  })

  // Each category card
  gsap.from('.skill-cat', {
    opacity: 0, y: 40, duration: 0.6, ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: { trigger: '.skills-grid', start: 'top 75%', once: true },
  })

  // Tags stagger reveal inside each category
  document.querySelectorAll('.skill-cat').forEach((cat) => {
    gsap.to(cat.querySelectorAll('.stag'), {
      opacity: 1, y: 0, duration: 0.4, ease: 'power2.out',
      stagger: 0.05,
      scrollTrigger: { trigger: cat, start: 'top 80%', once: true },
    })
  })
}

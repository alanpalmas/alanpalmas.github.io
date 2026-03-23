import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initProjects() {
  // Section header
  gsap.from('.projects .section-header', {
    opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '#projects', start: 'top 75%', once: true },
  })

  // Filter buttons reveal
  gsap.from('.filter-btn', {
    opacity: 0, y: 20, duration: 0.5, ease: 'power3.out',
    stagger: 0.07,
    scrollTrigger: { trigger: '.projects-filters', start: 'top 80%', once: true },
  })

  // Initial cards reveal
  gsap.from('.proj-card', {
    opacity: 0, y: 50, scale: 0.96, duration: 0.6, ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: { trigger: '.projects-grid', start: 'top 75%', once: true },
  })

  // ── Filter logic ──
  const filterBtns = document.querySelectorAll('.filter-btn')
  const cards      = document.querySelectorAll('.proj-card')

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active button + aria-pressed
      filterBtns.forEach((b) => {
        b.classList.remove('active')
        b.setAttribute('aria-pressed', 'false')
      })
      btn.classList.add('active')
      btn.setAttribute('aria-pressed', 'true')

      const filter = btn.getAttribute('data-filter')

      cards.forEach((card) => {
        const category = card.getAttribute('data-category')
        const show     = filter === 'all' || category === filter

        if (show) {
          card.style.display = ''
          gsap.to(card, {
            opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out',
            overwrite: 'auto',
            pointerEvents: 'auto',
          })
        } else {
          gsap.to(card, {
            opacity: 0, scale: 0.92, duration: 0.3, ease: 'power2.in',
            overwrite: 'auto',
            pointerEvents: 'none',
            onComplete: () => { card.style.display = 'none' },
          })
        }
      })
    })
  })
}

// ── i18n data ─────────────────────────────────────────────────
const ROLES_ES = ['Senior QA Engineer', 'Test Automation Specialist', 'FinTech QA Lead', 'AI QA Tools Builder']
const ROLES_EN = ['Senior QA Engineer', 'Test Automation Specialist', 'FinTech QA Lead', 'AI QA Tools Builder']

let currentLang = 'es'

const CV_URLS = {
  es: '/cv-es.html',
  en: '/cv.html',
}

function updateI18n(lang) {
  currentLang = lang

  document.querySelectorAll('[data-es][data-en]').forEach((el) => {
    const text = el.getAttribute(`data-${lang}`)
    if (!text) return
    if (el.classList.contains('about-p')) {
      el.innerHTML = text
    } else {
      el.textContent = text
    }
  })

  // Update all CV links to point to the right language version
  document.querySelectorAll('.nav-cv, .nav-cv-link').forEach((el) => {
    el.href = CV_URLS[lang]
  })

  document.documentElement.lang = lang
}

// ── Nav module ────────────────────────────────────────────────
export function initNav(lenis) {
  const navbar    = document.getElementById('navbar')
  const hamburger = document.getElementById('hamburger')
  const mobileMenu = document.getElementById('mobile-menu')
  const langToggle = document.getElementById('lang-toggle')

  // ── Scroll: glassmorphism + back-to-top visibility ──
  const backToTop = document.getElementById('back-to-top')
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60
    navbar?.classList.toggle('scrolled', scrolled)
    backToTop?.classList.toggle('visible', window.scrollY > 400)
  }, { passive: true })

  // ── Back to top click ──
  backToTop?.addEventListener('click', () => {
    lenis?.scrollTo(0, { duration: 1.4 })
  })

  // ── Hamburger ──
  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.toggle('open')
    hamburger.classList.toggle('open')
    document.body.style.overflow = isOpen ? 'hidden' : ''
    mobileMenu?.setAttribute('aria-hidden', String(!isOpen))
  })

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open')
      hamburger?.classList.remove('open')
      document.body.style.overflow = ''
    })
  })

  // ── Smooth anchor scroll ──
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      lenis?.scrollTo(target, { offset: -68, duration: 1.2 })
    })
  })

  // ── Language toggle ──
  langToggle?.addEventListener('click', () => {
    const next = currentLang === 'es' ? 'en' : 'es'
    langToggle.textContent = next === 'es' ? 'EN' : 'ES'
    updateI18n(next)

    // Cycle roles in new language
    const roles = next === 'es' ? ROLES_ES : ROLES_EN
    const roleEl = document.querySelector('.hero-role-text')
    if (roleEl) roleEl.textContent = roles[0]
  })

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            )
          })
        }
      })
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )

  sections.forEach((s) => observer.observe(s))

  // Set CV links to match the initial language on page load
  updateI18n(currentLang)
}

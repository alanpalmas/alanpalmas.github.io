import './style.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { initCursor }     from './modules/cursor.js'
import { initNav }        from './modules/nav.js'
import { initHero }       from './modules/hero.js'
import { initAbout }      from './modules/about.js'
import { initSkills }     from './modules/skills.js'
import { initExperience } from './modules/experience.js'
import { initProjects }   from './modules/projects.js'
import { initContact }    from './modules/contact.js'
import { initCircuit }   from './modules/circuit.js'

gsap.registerPlugin(ScrollTrigger)

// ── Smooth Scroll (Lenis + GSAP ScrollTrigger integration) ──
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)

// ── Init all modules ──
initCursor()
initNav(lenis)
initHero()
initAbout()
initSkills()
initExperience()
initProjects()
initContact()
initCircuit()

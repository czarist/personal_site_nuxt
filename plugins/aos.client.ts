import AOS from 'aos'
import 'aos/dist/aos.css'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  let initialized = false
  const isDesktop = () => window.matchMedia('(min-width: 768px)').matches

  const initAos = () => {
    if (initialized || !isDesktop()) {
      return
    }

    initialized = true

    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    })
  }

  nuxtApp.hook('app:mounted', initAos)
  window.addEventListener('resize', initAos, { passive: true })
})

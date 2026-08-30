import { useEffect } from 'react'

// Adds 'visible' class to elements with class 'reveal' as they enter the viewport.
// Includes safety fallbacks so content can never get stuck invisible:
// 1. Elements already in view at mount are marked visible immediately (no waiting on the observer).
// 2. A short timeout force-reveals everything, in case the observer fails to fire for any reason
//    (e.g. elements mounted after images/Swiper load, layout shifts, etc.).
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    // Immediately reveal anything already inside (or close to) the viewport.
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 1.1 && rect.bottom > -100) {
        el.classList.add('visible')
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    // Safety net: never let anything stay hidden for more than a couple of seconds.
    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        el.classList.add('visible')
      })
    }, 1800)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Select all elements with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => observer.observe(el))

    // Re-observe if the DOM changes (useful for dynamic content)
    const mutationObserver = new MutationObserver(() => {
      const currentElements = document.querySelectorAll('.reveal:not(.revealed)')
      currentElements.forEach(el => observer.observe(el))
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}

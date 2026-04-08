'use client'
import { useEffect } from 'react'

export default function ScrollInit() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')

    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.14 }
    )

    els.forEach(el => {
      if (el.closest('#hero')) el.classList.add('visible')
      else io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return null
}

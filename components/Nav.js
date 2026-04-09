'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '#about',    label: '소개',     id: 'about'    },
  { href: '#skills',   label: '서비스',   id: 'skills'   },
  { href: '#projects', label: '레퍼런스', id: 'projects' },
  { href: '#contact',  label: '연락처',   id: 'contact'  },
]

export default function Nav() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId,   setActiveId]   = useState('')
  const pathname = usePathname()
  const isHome   = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const sections = document.querySelectorAll('section[id]')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) }),
      { threshold: 0.38 }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [isHome])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="nav-logo">BRAND.</Link>

      {isHome && (
        <>
          <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
            {NAV_LINKS.map(({ href, label, id }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeId === id ? 'active' : ''}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="메뉴"
          >
            <span /><span /><span />
          </button>
        </>
      )}
    </nav>
  )
}

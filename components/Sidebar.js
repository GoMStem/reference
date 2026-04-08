'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <button
        className={`sb-trigger${open ? ' open' : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label="사이드바 열기"
      >
        <span /><span /><span />
      </button>

      <div className={`sb-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />

      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo">CE.</span>
          <button className="sidebar-close" onClick={() => setOpen(false)} aria-label="닫기">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <ul className="sidebar-nav">
          <li>
            <Link
              href="/blog"
              className={pathname.startsWith('/blog') ? 'current' : ''}
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-pen-nib" /> 블로그
            </Link>
          </li>
        </ul>
        <div className="sidebar-footer">© {new Date().getFullYear()} 김초은</div>
      </aside>
    </>
  )
}

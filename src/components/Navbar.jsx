import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Me' },
  { to: '/resume',   label: 'Resume' },
  { to: '/project1', label: 'Project 1' },
  { to: '/project2', label: 'Project 2' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(5,11,24,0.92)'
          : 'rgba(5,11,24,0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(30,51,80,0.8)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5 group" style={{ textDecoration: 'none' }}>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{
              background: 'linear-gradient(135deg, #F0A500, #FFD166)',
              color: '#050B18',
              fontFamily: '"DM Serif Display", serif',
            }}
          >
            SP
          </div>
          <span
            className="font-semibold text-sm tracking-wide"
            style={{ fontFamily: '"DM Sans", sans-serif', color: '#F0F4F8' }}
          >
            Shourya Pattabhi
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: 'var(--muted)' }}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '320px' : '0',
          borderTop: open ? '1px solid var(--border)' : 'none',
          background: 'rgba(5,11,24,0.97)',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link text-base${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

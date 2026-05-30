import { NavLink } from 'react-router-dom'
import { Link2, ExternalLink, Mail } from 'lucide-react'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Me' },
  { to: '/resume',   label: 'Resume' },
  { to: '/project1', label: 'Project 1' },
  { to: '/project2', label: 'Project 2' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
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
              <span className="font-semibold text-sm" style={{ color: 'var(--text)', fontFamily: '"DM Sans", sans-serif' }}>
                Shourya Pattabhi
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              AI Researcher · Quantitative Finance · PLTW Engineering Student
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className="text-sm transition-colors"
                  style={{ color: 'var(--muted)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.target.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.target.style.color = 'var(--muted)')}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-4">Contact</p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:klazzofn@gmail.com"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--muted)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                <Mail size={14} />
                klazzofn@gmail.com
              </a>
              <a
                href="https://github.com/Karmx9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--muted)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                <Link2 size={14} />
                github.com/Karmx9
              </a>
              <a
                href="https://linkedin.com/in/shouryapattabhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--muted)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                <ExternalLink size={14} />
                linkedin.com/in/shouryapattabhi
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-xs" style={{ color: 'var(--dim)' }}>
              © {new Date().getFullYear()} Shourya Pattabhi. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: 'var(--dim)' }}>
              Built with React · Deployed on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

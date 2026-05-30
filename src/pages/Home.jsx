import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, TrendingUp, Brain, Microscope, Award } from 'lucide-react'

const stats = [
  { icon: Award,      value: '4.42',  label: 'Weighted GPA',         delay: '0.3s' },
  { icon: Microscope, value: 'NIH',   label: 'Funded Researcher',    delay: '0.4s' },
  { icon: TrendingUp, value: '340%',  label: 'Portfolio Return',     delay: '0.5s' },
  { icon: Brain,      value: '5+',    label: 'ML Models Built',      delay: '0.6s' },
]

const highlights = [
  {
    num: '01',
    title: 'HMM Recession Detection',
    desc: 'Applied probabilistic modeling to identify the 2008 financial crisis in real time using Federal Reserve macroeconomic data.',
    tag: 'Machine Learning',
    to: '/project1',
  },
  {
    num: '02',
    title: 'Wheat Quantitative Strategy',
    desc: 'Built a systematic commodity trading model achieving Sharpe > 1.2 by fusing satellite imagery, NOAA drought data, and CFTC signals.',
    tag: 'Quantitative Finance',
    to: '/project2',
  },
]

function AnimatedCounter({ target, suffix = '', duration = 1600 }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const isNumeric = !isNaN(parseFloat(target))
        if (!isNumeric) { setDisplay(target); return }
        const end = parseFloat(target)
        const steps = 40
        const increment = end / steps
        let current = 0
        const interval = setInterval(() => {
          current += increment
          if (current >= end) { clearInterval(interval); setDisplay(target + suffix); return }
          setDisplay(
            Number.isInteger(end)
              ? Math.floor(current) + suffix
              : current.toFixed(2) + suffix
          )
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, suffix, duration])

  return <span ref={ref}>{display || target}</span>
}

export default function Home() {
  return (
    <div className="page-enter">
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
        style={{ background: 'var(--bg)' }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(30,51,80,0.7) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '20%', left: '50%', transform: 'translateX(-50%)',
            width: '600px', height: '400px',
            background: 'radial-gradient(ellipse, rgba(240,165,0,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          {/* Pre-heading */}
          <div
            className="inline-flex items-center gap-2 mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            <div className="w-6 h-px" style={{ background: 'var(--gold)' }} />
            <span className="section-label">PLTW Engineering Portfolio</span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-4 animate-slide-up"
            style={{
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              animationDelay: '0.15s',
              opacity: 0,
            }}
          >
            Shourya<br />
            <span style={{ color: 'var(--gold)' }}>Pattabhi.</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl mb-8 max-w-xl animate-slide-up"
            style={{
              color: 'var(--muted)',
              fontWeight: 400,
              animationDelay: '0.25s',
              opacity: 0,
            }}
          >
            AI Researcher · Quantitative Finance · PLTW Engineering Student
          </p>

          {/* Description */}
          <p
            className="text-base md:text-lg mb-10 max-w-2xl leading-relaxed animate-slide-up"
            style={{
              color: 'var(--muted)',
              animationDelay: '0.35s',
              opacity: 0,
            }}
          >
            Building machine learning systems, quantitative trading strategies, and
            engineering solutions at the intersection of technology and finance.
            NIH-funded researcher at the University of Delaware.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: '0.45s', opacity: 0 }}
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: 'var(--gold)',
                color: '#050B18',
                textDecoration: 'none',
              }}
            >
              About Me <ArrowRight size={16} />
            </Link>
            <Link
              to="/project1"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: 'transparent',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(240,165,0,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              View Projects <ArrowRight size={16} />
            </Link>
          </div>

          {/* Scroll hint */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float"
            style={{ color: 'var(--dim)' }}
          >
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label, delay }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(240,165,0,0.1)', color: 'var(--gold)' }}
                  >
                    <Icon size={20} />
                  </div>
                </div>
                <div
                  className="text-3xl font-serif mb-1"
                  style={{ color: 'var(--gold)', fontFamily: '"DM Serif Display", serif' }}
                >
                  <AnimatedCounter target={value} />
                </div>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS PREVIEW ─── */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="section-label mb-3">Featured Work</p>
            <h2 className="text-3xl md:text-4xl font-serif" style={{ color: 'var(--text)' }}>
              Engineering Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map(({ num, title, desc, tag, to }) => (
              <Link
                key={num}
                to={to}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="card p-8 h-full group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className="text-5xl font-serif"
                      style={{
                        color: 'rgba(240,165,0,0.2)',
                        fontFamily: '"DM Serif Display", serif',
                        lineHeight: 1,
                      }}
                    >
                      {num}
                    </span>
                    <span className="badge">{tag}</span>
                  </div>
                  <h3
                    className="text-xl font-serif mb-3"
                    style={{ color: 'var(--text)', fontFamily: '"DM Serif Display", serif' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                    {desc}
                  </p>
                  <div
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: 'var(--gold)' }}
                  >
                    View Project <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(240,165,0,0.08) 0%, rgba(10,20,36,0.8) 100%)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2
            className="text-3xl md:text-4xl font-serif mb-4"
            style={{ color: 'var(--text)', fontFamily: '"DM Serif Display", serif' }}
          >
            Let's Connect
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Interested in research, quantitative finance, or engineering collaboration?
            I'd love to hear from you.
          </p>
          <a
            href="mailto:klazzofn@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{
              background: 'var(--gold)',
              color: '#050B18',
              textDecoration: 'none',
            }}
          >
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}

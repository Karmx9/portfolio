import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'

const skills = [
  'Python', 'Java', 'React.js', 'HTML / CSS',
  'Machine Learning', 'Deep Learning', 'PyTorch', 'scikit-learn',
  'Derivatives Trading', 'Risk Management', 'Quantitative Modeling', 'Portfolio Analysis',
  'API Development', 'Database Management', 'Agentic AI', 'Research Methodology',
  'Team Leadership', 'Technical Communication', 'Data Analysis', 'Statistical Modeling',
]

const activities = [
  { title: 'Co-President',     org: 'School Investment Club',           years: '2024 – Present' },
  { title: 'Tech Lead',        org: 'Robotics Team',                    years: '2023 – Present' },
  { title: 'Varsity Athlete',  org: 'Tennis',                           years: '2022 – Present' },
  { title: 'Youth Ambassador', org: 'JFCS — Refugee Youth Support',     years: 'Aug 2023 – Present' },
]

const achievements = [
  'Top 400 Finish — Wharton Investment Competition (2025)',
  'NIH-Funded Research Award — University of Delaware (2025)',
  'Congressional App Challenge Participant (2024)',
  'AP Calculus AB: Score 5',
  'AP Seminar: Score 4',
  'Honor Roll — All Semesters (2022–Present)',
]

export default function About() {
  return (
    <div className="page-enter pt-24 pb-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* ─── HERO ROW ─── */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">

          {/* Avatar column */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start gap-6">
            {/* Headshot placeholder */}
            <div
              className="relative w-52 h-52 rounded-2xl flex items-center justify-center overflow-hidden animate-fade-in"
              style={{
                background: 'linear-gradient(135deg, #152844 0%, #0F1E35 100%)',
                border: '2px solid rgba(240,165,0,0.25)',
                boxShadow: '0 0 40px rgba(240,165,0,0.06)',
              }}
            >
              {/* Decorative ring */}
              <div
                className="absolute inset-4 rounded-xl opacity-20"
                style={{ border: '1px solid var(--gold)' }}
              />
              <span
                className="relative z-10 text-5xl font-serif"
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  background: 'linear-gradient(135deg, #F0A500, #FFD166)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                SP
              </span>
            </div>

            {/* Contact info */}
            <div className="card p-5 w-full">
              <p className="section-label mb-4">Contact</p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:klazzofn@gmail.com"
                  className="flex items-center gap-2.5 text-sm transition-colors"
                  style={{ color: 'var(--muted)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  <Mail size={14} style={{ color: 'var(--gold)' }} />
                  klazzofn@gmail.com
                </a>
                <div className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--muted)' }}>
                  <Phone size={14} style={{ color: 'var(--gold)' }} />
                  (925) 727-2215
                </div>
                <div className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--muted)' }}>
                  <MapPin size={14} style={{ color: 'var(--gold)' }} />
                  Dublin, CA 94568
                </div>
                <a
                  href="https://linkedin.com/in/shouryapattabhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm transition-colors"
                  style={{ color: 'var(--muted)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  <ExternalLink size={14} style={{ color: 'var(--gold)' }} />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Bio column */}
          <div className="md:col-span-2">
            <p className="section-label mb-3 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
              About Me
            </p>
            <h1
              className="text-4xl md:text-5xl font-serif mb-2 animate-slide-up"
              style={{ color: 'var(--text)', animationDelay: '0.15s', opacity: 0 }}
            >
              Shourya Pattabhi
            </h1>
            <p
              className="text-base mb-8 animate-slide-up"
              style={{ color: 'var(--gold)', animationDelay: '0.2s', opacity: 0, fontWeight: 500 }}
            >
              AI Researcher · Quantitative Finance · PLTW Engineering Student
            </p>

            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              <p
                className="animate-slide-up"
                style={{ animationDelay: '0.25s', opacity: 0 }}
              >
                Growing up in Dublin, California, I have always been drawn to the intersection of
                mathematics, technology, and finance. My journey in engineering and computing began
                early, as I consistently sought ways to apply rigorous analytical thinking to
                real-world problems. I am currently a junior at Dublin High School, maintaining a
                4.42 weighted GPA while pursuing an ambitious course load that includes AP Computer
                Science, AP Calculus BC, AP Chemistry, AP Research, and Honors PLTW Engineering.
              </p>
              <p
                className="animate-slide-up"
                style={{ animationDelay: '0.35s', opacity: 0 }}
              >
                Outside the classroom, I have channeled my passion for quantitative finance and
                technology into impactful leadership roles. As Head of Investments at PNL Capital,
                I grew an initial fund from $5,000 to $22,000 through disciplined derivatives
                trading while managing a team of 20 analysts and portfolio managers. Simultaneously,
                I serve as Head of Technology Investment Research at BYCIG, where I lead the
                investment committee's strategy across high-growth sectors including semiconductors
                and aerospace. Most significantly, I conduct NIH-funded neurobiological research at
                the University of Delaware, investigating how genetic mutations influence human
                speech through analysis of mouse vocalization data.
              </p>
              <p
                className="animate-slide-up"
                style={{ animationDelay: '0.45s', opacity: 0 }}
              >
                Looking ahead, I aspire to build a career at the intersection of artificial
                intelligence and quantitative research — developing systems that extract meaningful
                signals from complex, high-dimensional data. Whether advancing algorithmic trading
                strategies, improving AI-driven speech therapy tools, or contributing to
                neurobiological research, I am committed to engineering solutions that are both
                technically sophisticated and genuinely transformative.
              </p>
            </div>
          </div>
        </div>

        {/* ─── SKILLS ─── */}
        <div className="mb-16">
          <div className="gold-rule mb-8" />
          <p className="section-label mb-4">Technical &amp; Professional Skills</p>
          <div className="flex flex-wrap gap-3">
            {skills.map(s => (
              <span key={s} className="skill-pill">{s}</span>
            ))}
          </div>
        </div>

        {/* ─── ACTIVITIES + ACHIEVEMENTS ─── */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Activities */}
          <div>
            <p className="section-label mb-6">Activities &amp; Leadership</p>
            <div className="flex flex-col gap-4">
              {activities.map(({ title, org, years }) => (
                <div
                  key={org}
                  className="card p-5 flex justify-between items-start gap-4"
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{title}</p>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>{org}</p>
                  </div>
                  <span className="badge whitespace-nowrap text-xs">{years}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <p className="section-label mb-6">Achievements &amp; Honors</p>
            <div className="flex flex-col gap-3">
              {achievements.map(a => (
                <div
                  key={a}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: 'var(--muted)' }}
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'var(--gold)' }}
                  />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

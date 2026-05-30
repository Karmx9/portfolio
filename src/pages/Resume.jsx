import { Download, ExternalLink } from 'lucide-react'

/* ── reusable section header ── */
function SectionHead({ num, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="text-xs font-bold"
        style={{ color: 'var(--gold)', fontFamily: '"DM Sans", sans-serif', letterSpacing: '0.1em' }}
      >
        {num}
      </span>
      <h2
        className="text-lg font-serif"
        style={{ color: 'var(--text)', fontFamily: '"DM Serif Display", serif' }}
      >
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
    </div>
  )
}

/* ── experience entry ── */
function ExpEntry({ title, org, dates, bullets }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
        <div>
          <span className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{title}</span>
          <span className="text-sm" style={{ color: 'var(--muted)' }}> · {org}</span>
        </div>
        <span className="badge text-xs whitespace-nowrap">{dates}</span>
      </div>
      <ul className="flex flex-col gap-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-sm" style={{ color: 'var(--muted)' }}>
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(240,165,0,0.5)' }} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

const experience = [
  {
    title: 'Neurobiological Researcher',
    org: 'University of Delaware (NIH-Funded)',
    dates: 'Sep 2025 – Present',
    bullets: [
      'Research how genetic mutations affect human speech production through analysis of mouse vocalization data collected in controlled experimental conditions.',
      'Developed machine learning classification algorithms to identify distinct vocalization types and correlate behavioral patterns with genetic variants.',
      'Contribute findings to an NIH-funded study exploring neurobiological mechanisms underlying speech pathology.',
    ],
  },
  {
    title: 'Head of Technology Investment Research',
    org: 'BYCIG',
    dates: 'May 2025 – Present',
    bullets: [
      'Lead investment analysis and strategy for the technology sector, with focus areas including semiconductors, rocket technology, and aerospace.',
      'Serve on the Investment Committee, shaping portfolio allocation decisions for high-growth technology companies.',
      'Produce comprehensive research reports and investment theses for committee review and fund deployment.',
    ],
  },
  {
    title: 'Head of Investments',
    org: 'PNL Capital',
    dates: 'Aug 2023 – Present',
    bullets: [
      'Grew an initial $5,000 fund to $22,000 through disciplined derivatives trading in equities and oil contracts, achieving a 340% return.',
      'Manage a team of 20 analysts and portfolio managers, directing research priorities, position sizing, and execution strategy.',
      'Developed risk management frameworks and drawdown controls to optimize risk-adjusted returns across volatile market conditions.',
    ],
  },
  {
    title: 'JFCS Youth Ambassador',
    org: 'Jewish Family & Community Services',
    dates: 'Aug 2023 – Present',
    bullets: [
      'Fundraised school supplies and resources for refugee youth transitioning into the local community.',
      'Provided tutoring in mathematics and English to recently resettled refugee students.',
    ],
  },
]

const courses = [
  { name: 'AP Computer Science Principles', note: 'AP Exam — In Progress' },
  { name: 'AP Computer Science Applications', note: 'AP Exam — In Progress' },
  { name: 'AP Calculus BC', note: 'AP Exam — In Progress' },
  { name: 'AP Chemistry', note: 'AP Exam — In Progress' },
  { name: 'AP Research', note: 'AP Exam — In Progress' },
  { name: 'AP Seminar', note: 'Score: 4' },
  { name: 'AP Calculus AB', note: 'Score: 5' },
  { name: 'Honors PLTW Engineering', note: 'Current' },
  { name: 'Intro to Business (CC)', note: 'Spring Semester' },
  { name: 'Intro to Marketing (CC)', note: 'Spring Semester' },
]

const projects = [
  {
    name: 'HMM 2008 Recession Detection Model',
    dates: 'Jan 2025 – Apr 2025',
    desc: 'Built a 2-state Hidden Markov Model using Forward Filter, Forward-Backward Smoothing, and Viterbi algorithms to identify the 2008 financial crisis in real time using Federal Reserve Economic Data.',
  },
  {
    name: 'Wheat Quantitative Trading Strategy',
    dates: 'Mar 2026 – May 2026',
    desc: 'Developed a systematic commodity trading model for CBOT wheat futures achieving Sharpe > 1.2, integrating satellite crop imagery, NOAA drought data, CFTC positioning, and Google Trends signals.',
  },
  {
    name: 'ArticuLeap Speech Therapy Application',
    dates: '2024 – Present',
    desc: 'Creating an AI-powered speech therapy app combining WavLM audio analysis with MediaPipe facial kinematics, achieving 96.55% accuracy in stuttering detection.',
  },
  {
    name: 'Equity Derivatives Risk Management Model',
    dates: '2024',
    desc: 'Built a Python-based risk management and position-sizing system for equity derivatives trading, incorporating volatility modeling and drawdown controls.',
  },
]

const skills = [
  {
    cat: 'Programming',
    items: ['Python', 'Java', 'React.js', 'HTML / CSS', 'SQL'],
  },
  {
    cat: 'Machine Learning',
    items: ['PyTorch', 'scikit-learn', 'Hidden Markov Models', 'Computer Vision', 'NLP'],
  },
  {
    cat: 'Finance & Trading',
    items: ['Derivatives Trading', 'Risk Management', 'Portfolio Analysis', 'Quantitative Modeling'],
  },
  {
    cat: 'Tools & Platforms',
    items: ['Git / GitHub', 'Vite', 'REST APIs', 'PostgreSQL', 'Vercel'],
  },
]

const activities = [
  { role: 'Co-President', org: 'School Investment Club', dates: '2024 – Present' },
  { role: 'Tech Lead', org: 'Robotics Team', dates: '2023 – Present' },
  { role: 'Varsity Player', org: 'Tennis', dates: '2022 – Present' },
  { role: 'Youth Ambassador', org: 'JFCS', dates: 'Aug 2023 – Present' },
]

const awards = [
  { name: 'Top 400 Finish', body: 'Wharton Investment Competition', date: '2025' },
  { name: 'NIH-Funded Research Award', body: 'University of Delaware', date: '2025' },
  { name: 'Congressional App Challenge Participant', body: 'U.S. House of Representatives', date: '2024' },
  { name: 'AP Calculus AB — Score 5', body: 'College Board', date: '2025' },
  { name: 'AP Seminar — Score 4', body: 'College Board', date: '2025' },
  { name: 'Honor Roll', body: 'Dublin High School', date: '2022 – Present' },
]

export default function Resume() {
  return (
    <div className="page-enter pt-24 pb-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* ─── HEADER ─── */}
        <div
          className="card p-8 mb-8"
          style={{ background: 'var(--surface)' }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div>
              <h1
                className="text-4xl font-serif mb-1"
                style={{ color: 'var(--text)', fontFamily: '"DM Serif Display", serif' }}
              >
                Shourya Pattabhi
              </h1>
              <p className="text-base" style={{ color: 'var(--gold)' }}>
                AI Researcher · Quantitative Finance · PLTW Engineering Student
              </p>
            </div>
            <div className="flex flex-col gap-1.5 text-sm" style={{ color: 'var(--muted)' }}>
              <span>klazzofn@gmail.com</span>
              <span>(925) 727-2215</span>
              <span>Dublin, CA 94568</span>
              <a
                href="https://linkedin.com/in/shouryapattabhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition-colors"
                style={{ color: 'var(--muted)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                <ExternalLink size={12} />
                linkedin.com/in/shouryapattabhi
              </a>
            </div>
          </div>
        </div>

        {/* ─── OBJECTIVE ─── */}
        <div className="mb-10">
          <SectionHead num="01" title="Objective / Summary" />
          <div className="card p-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              A driven, detail-oriented student with a strong foundation in quantitative finance,
              artificial intelligence, and engineering design seeks to leverage advanced analytical
              skills and leadership experience in technology, research, or financial markets. With
              demonstrated success growing investment portfolios, leading NIH-funded research, and
              building validated machine learning systems, I am committed to engineering solutions
              that create measurable value at the frontier of data-driven decision-making.
            </p>
          </div>
        </div>

        {/* ─── EDUCATION ─── */}
        <div className="mb-10">
          <SectionHead num="02" title="Education" />
          <div className="card p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-5">
              <div>
                <p className="font-semibold" style={{ color: 'var(--text)' }}>Dublin High School</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Dublin, CA</p>
              </div>
              <div className="text-right">
                <span className="badge">Class of 2027</span>
                <p className="text-sm mt-1.5" style={{ color: 'var(--gold)' }}>GPA: 4.42 (Weighted)</p>
              </div>
            </div>
            <p className="section-label mb-3">Relevant Coursework</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {courses.map(({ name, note }) => (
                <div
                  key={name}
                  className="flex justify-between items-center text-sm py-1.5 px-3 rounded-lg"
                  style={{ background: 'rgba(14,30,53,0.5)' }}
                >
                  <span style={{ color: 'var(--text)' }}>{name}</span>
                  <span style={{ color: 'var(--dim)', fontSize: '0.72rem' }}>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── EXPERIENCE ─── */}
        <div className="mb-10">
          <SectionHead num="03" title="Work Experience" />
          <div className="card p-6">
            {experience.map((e, i) => (
              <div key={i}>
                <ExpEntry {...e} />
                {i < experience.length - 1 && (
                  <div className="my-5" style={{ borderBottom: '1px solid var(--border)' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ─── PROJECTS ─── */}
        <div className="mb-10">
          <SectionHead num="04" title="Projects" />
          <div className="card p-6">
            <div className="grid sm:grid-cols-2 gap-5">
              {projects.map(({ name, dates, desc }) => (
                <div
                  key={name}
                  className="p-4 rounded-xl"
                  style={{ background: 'rgba(14,30,53,0.5)', border: '1px solid var(--border)' }}
                >
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{name}</p>
                    <span className="badge text-xs whitespace-nowrap">{dates}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── SKILLS ─── */}
        <div className="mb-10">
          <SectionHead num="05" title="Skills" />
          <div className="card p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map(({ cat, items }) => (
                <div key={cat}>
                  <p className="text-xs font-semibold mb-3" style={{ color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {cat}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <span key={item} className="skill-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── ACTIVITIES ─── */}
        <div className="mb-10">
          <SectionHead num="06" title="Activities / Extracurriculars" />
          <div className="card p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {activities.map(({ role, org, dates }) => (
                <div
                  key={org}
                  className="flex justify-between items-center p-3 rounded-xl"
                  style={{ background: 'rgba(14,30,53,0.5)', border: '1px solid var(--border)' }}
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{role}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{org}</p>
                  </div>
                  <span className="badge text-xs">{dates}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── AWARDS ─── */}
        <div>
          <SectionHead num="07" title="Awards / Honors" />
          <div className="card p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {awards.map(({ name, body, date }) => (
                <div
                  key={name}
                  className="flex justify-between items-start gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(14,30,53,0.5)', border: '1px solid var(--border)' }}
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{body}</p>
                  </div>
                  <span className="badge text-xs whitespace-nowrap">{date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

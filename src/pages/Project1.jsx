import { ExternalLink, BookOpen, CheckCircle, Users, Code, Brain, TrendingUp } from 'lucide-react'

const skills = [
  { icon: Code,       label: 'Python Programming',       desc: 'Data pipeline, algorithm implementation' },
  { icon: Brain,      label: 'Statistical Modeling',      desc: 'HMM Forward, Viterbi, Smoothing algorithms' },
  { icon: TrendingUp, label: 'Quantitative Research',     desc: 'Macroeconomic signal interpretation' },
  { icon: Users,      label: 'Engineering Design Process', desc: 'Iterative model refinement and testing' },
]

const revisions = [
  'Replaced raw mortgage rate data with a quarterly-to-monthly interpolation to reduce noise artifacts in the Forward Filter step.',
  'Added a second observation variable (WTI crude oil price) after initial single-variable runs showed insufficient separation between market regimes.',
  'Adjusted transition probability priors to align with macroeconomic theory rather than data-fitted estimates, improving model transparency.',
  'Implemented a 3-month look-back smoothing window in the Viterbi algorithm to reduce false-positive recession signals during brief market volatility.',
]

export default function Project1() {
  return (
    <div className="page-enter pt-24 pb-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* ─── PAGE HEADER ─── */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="section-label">Project 1</span>
            <span className="badge">Machine Learning</span>
            <span className="badge-teal badge">Quantitative Finance</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-serif mb-3"
            style={{ color: 'var(--text)', fontFamily: '"DM Serif Display", serif', lineHeight: 1.15 }}
          >
            HMM 2008 Recession<br />
            <span style={{ color: 'var(--gold)' }}>Detection Model</span>
          </h1>
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--muted)' }}>
            <span>Course: Honors PLTW Engineering / AP Research</span>
            <span>·</span>
            <span>January 2025 – April 2025</span>
          </div>
        </div>

        {/* ─── MAIN GRID ─── */}
        <div className="grid lg:grid-cols-5 gap-8 mb-10">

          {/* Left: Description (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">

            {/* Objective */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-5 rounded-sm" style={{ background: 'var(--gold)' }} />
                <h2 className="text-lg font-serif" style={{ color: 'var(--text)', fontFamily: '"DM Serif Display", serif' }}>
                  Project Objective
                </h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                The central question driving this project was whether a probabilistic hidden-state
                model could accurately identify the 2008 financial crisis using <em>only</em> data
                available in real time — without the benefit of hindsight. Traditional recession
                analyses rely on retrospective indicators, but this project investigated whether a
                two-state Hidden Markov Model (HMM) parameterized with macroeconomic theory could
                detect regime shifts as they occurred, providing a framework for proactive rather
                than reactive market analysis.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-5 rounded-sm" style={{ background: 'var(--gold)' }} />
                <h2 className="text-lg font-serif" style={{ color: 'var(--text)', fontFamily: '"DM Serif Display", serif' }}>
                  My Responsibilities
                </h2>
              </div>
              <div className="flex flex-col gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                {[
                  'Sourced and cleaned 83 months of macroeconomic data from FRED — specifically monthly WTI crude oil prices and quarterly residential mortgage delinquency rates (adjusted to monthly frequency).',
                  'Independently implemented all three HMM inference algorithms in Python: the Forward Filter for real-time probability inference, the Forward-Backward algorithm for smoothed retrospective estimates, and the Viterbi algorithm for most-likely state-sequence decoding.',
                  'Parameterized the model using macroeconomic theory rather than purely data-driven fitting, ensuring transparency in modeling assumptions.',
                  'Built an interactive visualization dashboard displaying step-by-step mathematical recursions, probability outputs, and regime detection results across all 83 time steps.',
                  'Deployed the interactive demo on Vercel to make findings publicly accessible and reproducible.',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* What I Learned */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-5 rounded-sm" style={{ background: 'var(--gold)' }} />
                <h2 className="text-lg font-serif" style={{ color: 'var(--text)', fontFamily: '"DM Serif Display", serif' }}>
                  What I Learned
                </h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                This project deepened my understanding of applied probability theory in financial
                contexts. I learned to distinguish between causal inference and predictive
                modeling — understanding why model assumptions must be grounded in theory rather
                than just optimized to fit historical data. I also gained hands-on experience with
                the trade-offs between filtering (real-time) and smoothing (retrospective)
                algorithms, and developed stronger intuition for how multiple weak signals can be
                combined into a more robust regime-detection framework. The iterative
                design-and-test process, central to PLTW Engineering, shaped how I approached
                model refinement throughout the project.
              </p>
            </div>
          </div>

          {/* Right: Image + Doc panel (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Project image */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)', aspectRatio: '4/3' }}
            >
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&auto=format&fit=crop&q=80"
                alt="Financial market data visualization showing recession indicators and trend lines"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="text-xs text-center" style={{ color: 'var(--dim)', marginTop: '-12px' }}>
              Financial market visualization — regime detection across the 2004–2010 economic cycle
            </p>

            {/* Documentation Panel */}
            <div
              className="card p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(21,40,68,0.9) 0%, rgba(15,30,53,0.9) 100%)',
                border: '1px solid rgba(240,165,0,0.2)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} style={{ color: 'var(--gold)' }} />
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                    Project Documentation
                  </h3>
                </div>
                <span className="badge">Rubric Included</span>
              </div>
              <p className="text-xs leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
                Full documentation includes project proposal, design iterations, algorithm
                pseudocode, data sources, FRED API integration notes, visualization screenshots,
                and the completed rubric with self-assessment scores.
              </p>
              <a
                href="https://github.com/Karmx9/hmm-2008-recession"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: 'var(--gold)', textDecoration: 'none' }}
              >
                View Project Documents <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* ─── SKILLS GRID ─── */}
        <div className="mb-10">
          <p className="section-label mb-6">Skills Exemplified</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="card p-5 text-center">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: 'rgba(240,165,0,0.1)', color: 'var(--gold)' }}
                >
                  <Icon size={20} />
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>{label}</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── REVISIONS ─── */}
        <div>
          <p className="section-label mb-6">Revisions &amp; Improvements Identified</p>
          <div className="card p-6">
            <div className="flex flex-col gap-4">
              {revisions.map((r, i) => (
                <div key={i} className="flex gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'rgba(240,165,0,0.12)', color: 'var(--gold)' }}
                  >
                    {i + 1}
                  </span>
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

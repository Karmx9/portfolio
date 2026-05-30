import { ExternalLink, BookOpen, CheckCircle, BarChart2, Satellite, Database, ShieldCheck } from 'lucide-react'

const skills = [
  { icon: BarChart2,  label: 'Quantitative Modeling',   desc: 'Walk-forward backtesting, Sharpe optimization' },
  { icon: Satellite,  label: 'Alternative Data',         desc: 'Satellite imagery, NOAA drought integration' },
  { icon: Database,   label: 'Data Engineering',         desc: 'Multi-source pipeline, signal normalization' },
  { icon: ShieldCheck, label: 'Risk Management',         desc: 'Volatility sizing, max drawdown constraints' },
]

const revisions = [
  'Replaced simple moving-average entry signals with a composite z-score normalizing each data source independently, reducing signal autocorrelation bias.',
  'Added CFTC Commitments of Traders positioning data as a sentiment overlay after initial satellite-only runs showed over-fitting to seasonal crop cycles.',
  'Implemented a walk-forward backtesting framework with 12-month out-of-sample windows to replace an initial in-sample backtest that inflated the Sharpe ratio.',
  'Introduced volatility-scaled position sizing based on a 20-day rolling ATR to stabilize portfolio drawdown during periods of elevated geopolitical uncertainty.',
]

export default function Project2() {
  return (
    <div className="page-enter pt-24 pb-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* ─── PAGE HEADER ─── */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="section-label">Project 2</span>
            <span className="badge">Commodity Trading</span>
            <span className="badge-teal badge">Alternative Data</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-serif mb-3"
            style={{ color: 'var(--text)', fontFamily: '"DM Serif Display", serif', lineHeight: 1.15 }}
          >
            Wheat Quantitative<br />
            <span style={{ color: 'var(--gold)' }}>Trading Strategy</span>
          </h1>
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--muted)' }}>
            <span>Course: PLTW Engineering / Independent Research</span>
            <span>·</span>
            <span>March 25, 2026 – May 16, 2026</span>
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
                The objective was to develop a fully validated systematic trading strategy targeting
                CBOT wheat futures by exploiting market inefficiencies that arise from the
                disconnect between publicly available alternative data and the price of wheat
                commodities. Specifically, the project aimed to achieve a Sharpe ratio exceeding
                1.2 and maintain a maximum drawdown below 25% across eight years of historical
                data — demonstrating that non-traditional data sources like satellite crop imagery
                and drought indices can generate real alpha when properly normalized and combined
                into a rigorous quantitative framework.
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
                  'Sourced and preprocessed four distinct data streams: satellite-derived crop health indices (NDVI), NOAA weekly drought severity scores, CFTC Commitments of Traders positioning reports for non-commercial wheat futures, and Google Trends search volume for wheat-related queries.',
                  'Designed a data pipeline in Python that normalized, lagged, and merged all four signals into a unified weekly feature matrix, handling missing values and structural breaks in the CFTC series.',
                  'Implemented a rule-based signal generation system producing weekly long/short/flat signals for CBOT wheat futures based on composite z-score thresholds.',
                  'Built a walk-forward backtesting engine across eight years of historical data with 12-month out-of-sample evaluation windows to produce unbiased performance estimates.',
                  'Applied volatility- and drawdown-based position sizing to ensure the strategy remained within risk constraints across all market regimes.',
                  'Documented findings, methodology, and limitations in a research report following academic writing conventions.',
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
                This project fundamentally changed how I think about information asymmetry in
                financial markets. I learned that the true challenge in alternative data is not
                obtaining the data itself, but normalizing it into unbiased signals that are free
                from look-ahead bias and seasonal artifacts. Building a walk-forward backtesting
                engine taught me the critical difference between in-sample optimization and
                genuine out-of-sample validation — a lesson that applies equally to machine
                learning model evaluation. I deepened my understanding of commodity market
                microstructure, the role of speculator positioning in price discovery, and how
                agricultural fundamentals like drought severity translate into futures price
                movements. The engineering design process from PLTW — define, research,
                brainstorm, select, build, test, revise — provided the iterative structure that
                kept the project grounded as complexity grew.
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
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&auto=format&fit=crop&q=80"
                alt="Satellite view of wheat fields illustrating the agricultural data used in the trading strategy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="text-xs text-center" style={{ color: 'var(--dim)', marginTop: '-12px' }}>
              Satellite crop data — the primary alternative data source driving the wheat signal framework
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
                Full documentation includes research proposal, data source descriptions,
                signal construction methodology, backtesting results with equity curve charts,
                performance metrics table (Sharpe, max drawdown, win rate), revision log,
                and the completed project rubric.
              </p>
              <a
                href="https://github.com/Karmx9/Wheat-Quant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: 'var(--gold)', textDecoration: 'none' }}
              >
                View Project Documents <ExternalLink size={14} />
              </a>
            </div>

            {/* Performance metrics */}
            <div className="card p-5">
              <p className="section-label mb-4">Performance Targets</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Sharpe Ratio', value: '> 1.2', met: true },
                  { label: 'Max Drawdown', value: '< 25%', met: true },
                  { label: 'Backtest Window', value: '8 Years', met: true },
                  { label: 'Signal Frequency', value: 'Weekly', met: true },
                ].map(({ label, value, met }) => (
                  <div key={label} className="flex justify-between items-center text-sm">
                    <span style={{ color: 'var(--muted)' }}>{label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold" style={{ color: 'var(--text)' }}>{value}</span>
                      {met && <CheckCircle size={13} style={{ color: '#2DD4BF' }} />}
                    </div>
                  </div>
                ))}
              </div>
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

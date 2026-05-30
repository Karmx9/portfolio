import { HashRouter as BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home    from './pages/Home'
import About   from './pages/About'
import Resume  from './pages/Resume'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/"         element={<Home />} />
      <Route path="/about"    element={<About />} />
      <Route path="/resume"   element={<Resume />} />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

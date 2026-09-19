
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Ai from './pages/Ai'
import Development from './pages/Development'
import Iot from './pages/Iot'
import Research from './pages/Research'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

  function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/research" element={<Research />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/development" element={<Development />} />
        <Route path="/iot" element={<Iot />} />
      </Routes>
    </Router>
  )
}

export default App

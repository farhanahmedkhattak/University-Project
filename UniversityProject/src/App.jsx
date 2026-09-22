
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/HOME/Home'
import Ai from './pages/AI/Ai'
import Development from './pages/Development/Development'
import Iot from './pages/IOT/IoT'
import Research from './pages/Research/Research'
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
import React from 'react'
import {NavLink} from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){
 return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/research">Research</NavLink></li>
            <li><NavLink to="/ai">AI</NavLink></li>
            <li><NavLink to="/development">Development</NavLink></li>
            <li><NavLink to="/iot">IoT</NavLink></li>
        </ul>
    </nav>
  )   
}

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

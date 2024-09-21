import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const activeStyle = ({ isActive }) => {
        return {
          color: isActive ? "#7a46a8" : "#808080",
          fontWeight: isActive ? "bold" : "400",
          borderBottom:isActive? "2px solid #7a46a8": "",
        };
      };
  return (
    <nav className='navbar w-full'>
        <div className="list">
            <NavLink to='/' style={activeStyle}>Home</NavLink>
            <NavLink to='/chat' style={activeStyle}>Chatbot</NavLink>
            <NavLink to='/game' style={activeStyle}>Game</NavLink>
            <button>Discover Exoplanets</button>
        </div>
    </nav>
  )
}

export default Navbar
import React from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "#7a46a8" : "#808080",
      fontWeight: isActive ? "bold" : "400",
      borderBottom: isActive ? "2px solid #7a46a8" : "",
    };
  };
  return (
    <nav className="navbar w-full">
      <div className="list">
        <NavLink to="/home" style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/Personality_test" style={activeStyle}>
          Personality Test
        </NavLink>
        <NavLink to="/chatbot" style={activeStyle}>
          ChatBot
        </NavLink>
        <button onClick={() => navigate("/cards")}>Discover Exoplanets</button>
      </div>
    </nav>
  );
};

export default Navbar;

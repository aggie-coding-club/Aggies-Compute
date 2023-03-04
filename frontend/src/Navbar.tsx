import React from 'react';
import {  NavLink } from "react-router-dom";

import "./styles.css";
// console.log(logo);

export default function Navbar() {
  return (
    <div>
      <nav className = "navbar-container">
        <NavLink to="/Landing"
          style={({ isActive }) => ({ color: isActive ? '#fff' : '#fff', textDecoration: 'none',})}
        >
          Home
        </NavLink>

        <NavLink to="/"
          style={({ isActive }) => ({ color: isActive ? '#fff' : '#fff', textDecoration: 'none',})}
        >
          ChatGPT
        </NavLink>

        <NavLink to="/"
          style={({ isActive }) => ({ color: isActive ? '#fff' : '#fff', textDecoration: 'none',})}
        >
          PhotoMath
        </NavLink>

        <NavLink to="/"
          style={({ isActive }) => ({ color: isActive ? '#fff' : '#fff', textDecoration: 'none',})}
        >
          Education
        </NavLink>

        <NavLink to="/"
          style={({ isActive }) => ({ color: isActive ? '#fff' : '#fff', textDecoration: 'none',})}
        >
          Profile
        </NavLink>
      </nav>
    </div>
  );
}

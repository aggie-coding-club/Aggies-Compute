import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import '../styles.css';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full h-50 bg-[#27476e]">
      <NavLink
        to="/"
        // style={({ isActive }) => ({
        //   color: isActive ? '#fff' : '#fff',
        //   textDecoration: 'none'
        // })}
      >
        <img
          src={require('../images/ac-logo.png')}
          className="h-[30px] w-[30px] object-contain object-center"
          alt="AC Logo"
        />
      </NavLink>

      <NavLink to="/calculator">
        <img
          src={require('../images/calculator-icon.png')}
          className="h-[30px] w-[30px] object-contain object-center"
          alt="Calculator Icon"
        />
      </NavLink>

      <NavLink to="/photomathclone">
        <img
          src={require('../images/camera-icon.png')}
          className="h-[30px] w-[30px] object-contain object-center"
          alt="Camera Icon"
        />
      </NavLink>

      <NavLink to="/education">
        <img
          src={require('../images/education-icon.png')}
          className="h-[30px] w-[30px] object-contain object-center"
          alt="Education Logo"
        />
      </NavLink>

      <NavLink to="/profile">
        <img
          src={require('../images/profile-icon.png')}
          className="h-[30px] w-[30px] object-contain object-center"
          alt="Temp Profile Icon"
        />
      </NavLink>
    </nav>
  );
}

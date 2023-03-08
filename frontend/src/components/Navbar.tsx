import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from '../components/Dropdown';
import '../styles.css';

export default function Navbar() {
  return (
    <nav className="flex items-center p-3 justify-between w-full h-50 bg-[#27476e]">
      <NavLink to="/">
        <img
          src={require('../images/ac-logo.png')}
          className="h-[35px] object-contain object-center pl-2"
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

      <NavLink to="/">
        <input
          type="text"
          placeholder="Search Aggies Compute"
          style={{ borderRadius: '10px' }}
        ></input>
      </NavLink>

      {/* <NavLink to="/profile">
        <img
          src={require('../images/profile-icon.png')}
          className="h-[30px] w-[30px] object-contain object-center"
          alt="Temp Profile Icon"
        />
      </NavLink> */}
      <DropDown>
        <img
          src={require('../images/profile-icon.png')}
          className="h-[30px] w-[30px] object-contain object-center"
          alt="Temp Profile Icon"
        />
      </DropDown>
    </nav>
  );
}

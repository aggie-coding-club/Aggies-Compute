import React from 'react';
import {  NavLink } from "react-router-dom";

import "./styles.css";

export default function Navbar() {
  //// Testing Functino Portablity. Remove this.
  return (
    <div>
      <nav className = "navbar-container">
        {/* <NavLink to="/landing" className ='home-button' ><a href ="Landing" className="logo"><img className= "ac-logo" src={logo}/></a></NavLink> */}
        <NavLink to="/">Calculator</NavLink>
        <NavLink to="/">ChatGPT</NavLink>
        <NavLink to="/">PhotoMath</NavLink>
        <NavLink to="/">Education</NavLink>
        <NavLink to="/">Profile</NavLink>
      </nav>
    </div>
  );
}

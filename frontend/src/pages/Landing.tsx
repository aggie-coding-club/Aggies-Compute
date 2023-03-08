import React from 'react';
import { gauss_elimination } from '../algorithms/LinAlg/rref';
import { NavLink } from 'react-router-dom';

import 'mathjs';
import NavBar from '../components/Navbar';
var math = require('mathjs');
export default function Landing() {
  return (
    <div className="">
      <ul className="flex flex-col">
        <NavLink to="/algebra">Algebra Pages</NavLink>
        <NavLink to="/calculus">Calculus Pages</NavLink>
        <NavLink to="/crypto">Crypto Pages</NavLink>
        <NavLink to="/linalg">Linear Algebra Pages</NavLink>
      </ul>
    </div>
  );
}

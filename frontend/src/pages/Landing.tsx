import React from 'react';
import { gauss_elimination } from '../algorithms/LinAlg/rref';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
export default function Landing() {
=======
import { eigen_value_vector } from '../algorithms/LinAlg/eigen_value_vector';
import 'mathjs';
import NavBar from '../components/Navbar';
var math = require('mathjs');
export default function Landing() {
  console.log(eigen_value_vector());
>>>>>>> 009fffd8 (started eigen-value-vector, added algebrite dependency)
  return (
    <div className="">
      <ul className="flex flex-col items-center justify-center m-[5%]">
        <NavLink
          to="/algebra"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Algebra Pages
        </NavLink>
        <NavLink
          to="/calculus"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Calculus Pages
        </NavLink>
        <NavLink
          to="/crypto"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Crypto Pages
        </NavLink>
        <NavLink
          to="/linalg"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Linear Algebra Pages
        </NavLink>
      </ul>
    </div>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../components/Navbar';

export default function Landing() {
  return (
    <div className="">
      <Navbar isLanding={true} />
      {/* <div className="flex flex-col w-full h-56 items-center w-full bg-gradient-to-b from-[#27476e] to-[#37C4C4]  via-[#006992] animate-gradient-y">
        <h1 className="flex items-center w-full h-2/3  justify-center text-6xl font-extrabold  text-[#44f2f2]">
          Aggie <span className="text-[#00b3f8]">Compute</span>
        </h1>

        <h2 className="flex flex-col items-center w-full pb-6 h-1/3 justify-center text-xl font-medium  text-white">
          Empowering Students with Math:
          <span>
            <span className="text-[#37C4C4] font-bold"> Free </span> and
            <span className="text-[#37C4C4] font-bold mx-1">Centralized</span>
            Resources
          </span>
        </h2>
      </div> */}
      <ul className="flex flex-col items-center justify-center m-[5%]">
        <NavLink to="/algebra" className="bg-[#27476e] text-white rounded-md">
          Algebra Pages
        </NavLink>
        <NavLink to="/calculus" className="bg-[#27476e] text-white rounded-md">
          Calculus Pages
        </NavLink>
        <NavLink to="/crypto" className="bg-[#27476e] text-white  rounded-md">
          Crypto Pages
        </NavLink>
        <NavLink to="/linalg" className="bg-[#27476e] text-white  rounded-md">
          Linear Algebra Pages
        </NavLink>
      </ul>
    </div>
  );
}

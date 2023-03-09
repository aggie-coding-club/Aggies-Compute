import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Landing() {
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

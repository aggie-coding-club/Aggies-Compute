import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function CalculusLanding() {
  return (
    <div>
      <Navbar isLanding={false} />
      <ul className="flex flex-col items-center justify-center m-[5%]">
        <NavLink
          to="/calculus/simple_derivative"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          simple derivative
        </NavLink>
        <NavLink
        to="/calculus/taylor-series"
        className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Taylor Series
        </NavLink>
      </ul>
    </div>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function AlgebraLanding() {
  return (
    <div>
      <Navbar isLanding={false} />
      <ul className="flex flex-col items-center justify-center m-[5%]">
        <NavLink
          to="/algebra/add_sub_mult"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Add Sub Mult Equation
        </NavLink>
      </ul>
      <ul className="flex flex-col items-center justify-center m-[5%]">
        <NavLink
          to="/algebra/pemdas"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          PEMDAS
        </NavLink>
      </ul>
    </div>
  );
}

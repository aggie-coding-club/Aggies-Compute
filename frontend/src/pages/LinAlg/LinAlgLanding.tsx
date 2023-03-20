import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function LinAlgLanding() {
  return (
    <div>
      <Navbar isLanding={false} />
      <ul className="flex flex-col items-center justify-center m-[5%]">
        <NavLink
          to="/linalg/rref_ref"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          RREF
        </NavLink>
        <NavLink
          to="/linalg/inverse_matrix"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Inverse Matrix
        </NavLink>
      </ul>
    </div>
  );
}

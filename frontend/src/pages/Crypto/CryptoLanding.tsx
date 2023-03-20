import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function CryptoLanding() {
  return (
    <div>
      <Navbar isLanding={false} />
      <ul className="flex flex-col items-center justify-center m-[5%]">
        <NavLink
          to="/crypto"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          replace-this
        </NavLink>
      </ul>
    </div>
  );
}

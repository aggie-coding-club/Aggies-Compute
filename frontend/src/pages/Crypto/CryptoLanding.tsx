import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function CryptoLanding() {
  return (
    <div>
      <Navbar isLanding={false} />
      <ul className="flex flex-col items-center justify-center">
        <NavLink
          to="/crypto/affineCipher"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Affine Cipher
        </NavLink>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <NavLink
          to="/crypto/shiftCipher"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Shift Cipher
        </NavLink>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <NavLink
          to="/crypto/babyStepGiantStep"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Baby Step Giant Step
        </NavLink>
      </ul>

      
   
      
    

    </div>

    
  );
}

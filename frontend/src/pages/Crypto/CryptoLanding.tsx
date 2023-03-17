import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CryptoLanding() {
  return (
    <div>
      <ul className="flex flex-col items-center justify-center m-[5%]">
        <NavLink
          to="/crypto/affinecipher"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Affine Cipher
        </NavLink>
      </ul>
    </div>
  );
}

import React from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinalg from '../../components/SidebarLinAlg';

export default function AffineCipher() {
  return (
    <div className="">
      <Navbar isLanding={false} />
      <div className="flex">
        <SidebarLinalg />
        <div className="flex flex-col w-[60%] mt-20">
          {/* Title */}
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold">Affine Cipher</p>
          </div>
          {/* Description */}
          <div>
            <p>
              The Affine Cipher is a type of substituation shift cipher that relies on two encryption keys, "a" and "b", 
              which belong in the set of positive integers and where "a" is coprime with the given alphabet's length. Encryption 
              is done with the equation y = ax + b (mod p) where "x" is the plaintext letter value, y is the encrypted letter 
              value, and "p" is the length of the given alphabet. If both encyrption keys are known,
              they can also be used to decrypt a message and is done so with a rewritten form of the previous equation, 
              x = (a^-1)(y - b)(mod p).                             
              (Note the equations only encrypt/decrypt letters, and that messages with more than one 
              alphabet character utilize the equations as much times as there are many characters in a message).
            </p>
          </div>
          {/* Inputs */}
          {/* Solutions */}
          {/* Steps */}
        </div>
        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl font-bold"> Right Side</h1>
        </div>
      </div>
    </div>
  );
}
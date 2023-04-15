import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar_Crypto() {
  // THIS IS A TEMPERARY SIDE BAR MUST REFRACTOR TO BE MORE DYNAMIC
  return (
    <div className="flex ml-20 mr-10 my-8 rounded">
      <div className="flex flex-col h-screen bg-[#D4D4D4] shadow-xl w-50">
        <div className="space-y-3">
          <div className="flex items-center justify-center">
            <h2 className="text-xl font-bold bg-[#AEECEF] flex items-center justify-center w-full p-3 mb-5">
              Cryptography
            </h2>
          </div>

          {/* Temp. Search Bar Need to implement functionality */}
          <div className="relative mx-5">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button
                type="submit"
                className="p-2 focus:outline-none focus:ring"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
            />
          </div>

          {/* Temp. SubBar - Will implement using mapping function for more dynamic use */}
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm px-5">

            <li className="flex flex-col items-center justify-center">
                <NavLink to="../crypto/shiftCipher" className="font-bold text-base">
                  Shift Cipher
                </NavLink>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>

              <li className="flex flex-col items-center justify-center">
                <NavLink to="../crypto/affineCipher" className="font-bold text-base">
                  Affine Cipher
                </NavLink>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>

              <li className="flex flex-col items-center justify-center">
                <NavLink to="../crypto/babyStepGiantStep" className="font-bold text-base">
                  Baby Step Giant Step
                </NavLink>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>

              <li className="flex flex-col items-center justify-center">
                <NavLink to="../crypto/chineseRemainderTheorem" className="font-bold text-base">
                  Chinese Remainder Theorem
                </NavLink>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>

              <li className="flex flex-col items-center justify-center">
                <NavLink to="../crypto/diffiehellman" className="font-bold text-base">
                  Diffie Hellman Key Exchange
                </NavLink>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>

              <li className="flex flex-col items-center justify-center">
                <NavLink to="../crypto/rsa" className="font-bold text-base">
                  RSA
                </NavLink>
                <hr className="w-[40%] h-0.5 rounded my-2 dark:bg-gray-700"></hr>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../components/Navbar';

export default function Landing() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="sticky top-0 z-50">
        <Navbar isLanding={false} />
      </div>

      {/* landing-page-header */}
      <div className="flex flex-col w-full h-56 items-center w-full bg-gradient-to-b from-[#27476e] to-[#37C4C4] via-[#006992] animate-gradient-y ">
        <h1 className="flex items-center w-full h-1/3 pt-6 justify-center text-6xl font-extrabold  text-[#44f2f2]">
          Aggie <span className="text-[#00b3f8]">Compute</span>
        </h1>

        <h2 className="flex flex-col items-center w-full pt-6 h-2/3 justify-center text-xl font-medium  text-white">
          Empowering Students with Math:
          <span>
            <span className="text-[#37C4C4] font-bold"> Free </span> and
            <span className="text-[#37C4C4] font-bold mx-1">Centralized</span>
            Resources
          </span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center my-5">
        <h1 className="text-4xl font-bold">Our Resources</h1>
      </div>
      {/* later may need to dymaically determine row # */}
      <div className="grid grid-cols-3 grid-rows-2 grid gap-14 mx-64">
        <div className="flex flex-col">
          <NavLink
            to="/algebra"
            className="bg-[#27476e] text-2xl text-white rounded-md h-full w-full flex items-center justify-center"
          >
            <img
              className="rounded-lg h-full w-full object-cover"
              src="https://media.giphy.com/media/l2Je3qSgOVvFPdaNi/giphy.gif"
            ></img>
          </NavLink>
          <h1 className="flex items-center justify-center font-bold text-lg mt-5">
            Algebra
          </h1>
        </div>
        <div className="flex flex-col">
          <NavLink
            to="/calculus"
            className="bg-[#27476e] text-2xl text-white rounded-md h-full w-full flex items-center justify-center"
          >
            <img
              className="rounded-lg h-full w-full object-cover"
              src="https://media.giphy.com/media/l2YWF00ZX8wOs0p0s/giphy.gif"
            ></img>
          </NavLink>
          <h1 className="flex items-center justify-center font-bold text-lg mt-5">
            Calculus
          </h1>
        </div>

        <div className="flex flex-col">
          <NavLink
            to="/crypto"
            className="bg-[#27476e] text-2xl text-white rounded-md h-full w-full flex items-center justify-center"
          >
            <img
              className="rounded-lg h-full w-full object-cover"
              src="https://media.giphy.com/media/5xtDarJ7d5HXTRULbSo/giphy.gif"
            ></img>
          </NavLink>
          <h1 className="flex items-center justify-center font-bold text-lg mt-5">
            Cryptography
          </h1>
        </div>

        <div className="flex flex-col">
          <NavLink
            to="/linalg"
            className="bg-[#27476e] text-2xl text-white rounded-md h-full w-full flex items-center justify-center"
          >
            <img
              className="rounded-lg h-full w-full object-cover"
              src="https://media.giphy.com/media/OsMRCAQICXU8j8j7LI/giphy.gif"
            ></img>
          </NavLink>
          <h1 className="flex items-center justify-center font-bold text-lg mt-5">
            Linear Algebra
          </h1>
        </div>
      </div>

      {/* <ul className="flex flex-col items-center justify-center m-[5%]">
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
      </ul> */}
    </div>
  );
}

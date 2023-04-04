import React from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinalg from '../../components/SidebarLinAlg'; //Has not been created for Calculus

export default function TaylorSeries() {
  return (
    <div className="">
      <Navbar isLanding={false} />
      <div className="flex">
        <SidebarLinalg />
        <div className="flex flex-col w-[60%] mt-20">
          {/* Title */}
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold">Taylor / Maclaurin Series</p>
          </div>
          {/* Description */}
          <div>
            <p>
              Intro Paragraph
            </p>
          </div>
          {/* Inputs */}
          <p className='text-lg font-bold my-5'>Input</p>
          <p>Input your equation here:</p>
            <input
                type="text"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder=""
                title="Enter the Equation"
                required
              />
          <p>Input the point:</p>
          <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder=""
                title="Enter the point"
                required
              />
          <p>Input the number of terms desired:</p>
          <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder=""
                title="Enter the point"
                required
              />
          <button>
            Calculate!
          </button>
          <div>
          </div>
          {/* Solutions */}
          <div>
            <p className='text-lg font-bold my-5'>Solutions</p>
          </div>
          {/* Steps */}
          <div>
            <p className='text-lg font-bold my-5'>Steps</p>
          </div>
        </div>
        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl font-bold"> Right Side</h1>
        </div>
      </div>
    </div>
  );
}   

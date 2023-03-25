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
          <div>
            <p className='text-lg font-bold my-5'>Input</p>
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

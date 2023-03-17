import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar_Linalg from '../../components/Sidebar_Linalg';
import Navbar from '../../components/Navbar';

export default function InverseMatrix() {
  return (
    <div className="">
      <Navbar isLanding={false} />
      <div className="flex">
        <Sidebar_Linalg />
        <div className="flex flex-col w-[60%] mt-20">
          {/* Title */}
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold my-5">Inverse Matrix</p>
          </div>
          {/* Description */}
          <div>
            <p className="text-lg font-bold my-5">Description</p>
            <p>Returns the inverse matrix from a given matrix</p>
          </div>
          {/* Inputs */}
          <div>
            <p className="text-lg font-bold my-5">Inputs</p>
            <p>Enter your matrix</p>
            <div className="grid grid-cols-3 gap-4 my-5">
              <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder="0"
                title="Enter a number"
                required
              />
              <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder="0"
                title="Enter a number"
                required
              />
              <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder="0"
                title="Enter a number"
                required
              />
              <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder="0"
                title="Enter a number"
                required
              />
              <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder="0"
                title="Enter a number"
                required
              />
              <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder="0"
                title="Enter a number"
                required
              />
              <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder="0"
                title="Enter a number"
                required
              />
              <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder="0"
                title="Enter a number"
                required
              />
              <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                placeholder="0"
                title="Enter a number"
                required
              />
            </div>
          </div>
          {/* Solutions */}
          <div>
            <p className="text-lg font-bold my-5">Solution</p>
            <div className="grid grid-cols-3 gap-4 my-5">
              <div className="bg-gray-100 rounded-xl p-2.5 text-gray-900">
                1
              </div>
              <div className="bg-gray-100 rounded-xl p-2.5 text-gray-900">
                2
              </div>
              <div className="bg-gray-100 rounded-xl p-2.5 text-gray-900">
                3
              </div>
              <div className="bg-gray-100 rounded-xl p-2.5 text-gray-900">
                4
              </div>
              <div className="bg-gray-100 rounded-xl p-2.5 text-gray-900">
                5
              </div>
              <div className="bg-gray-100 rounded-xl p-2.5 text-gray-900">
                6
              </div>
              <div className="bg-gray-100 rounded-xl p-2.5 text-gray-900">
                7
              </div>
              <div className="bg-gray-100 rounded-xl p-2.5 text-gray-900">
                8
              </div>
              <div className="bg-gray-100 rounded-xl p-2.5 text-gray-900">
                9
              </div>
            </div>
          </div>
          {/* Steps */}
          <div>
            <p className="text-lg font-bold my-5">Steps</p>
            <p>Use the formula</p>
          </div>
        </div>
        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl font-bold">Right Side</h1>
        </div>
      </div>
    </div>
  );
}

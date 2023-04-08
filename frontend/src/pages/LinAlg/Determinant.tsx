<<<<<<< HEAD

=======
>>>>>>> ffada886 (stuff)
import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar_Linalg from '../../components/Sidebar_Linalg';
import Navbar from '../../components/Navbar';

export default function determinant() {
  return (
    <div className="">
      <Navbar isLanding={false} />
      <div className="flex">
        <Sidebar_Linalg />
        <div className="flex flex-col w-[60%] mt-20">
          {/* Title */}
          <div className="flex items-center justify-center rounded-xl">
            <Text h1 size={60} css={{ textGradient: "0deg, #F0F0F0, #27476E 50%" }} weight="bold">
<<<<<<< HEAD
              Enter title here
=======
              Determinant
>>>>>>> ffada886 (stuff)
            </Text>
          </div>
          {/* Description */}
          <div>
            <h1 className="text-lg dark:text-gray-50 font-bold my-5">
<<<<<<< HEAD
              Description
=======
              Returns the determinant of a matrix.
>>>>>>> ffada886 (stuff)
            </h1>
            <p>
              Enter description here
            </p>
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

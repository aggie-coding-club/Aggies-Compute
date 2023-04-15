import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SidebarLinAlg from '../../components/SidebarLinAlg';
import { Text } from '@nextui-org/react';
import inverse_matrix from '../../algorithms/LinAlg/inverse_matrix';
import 'mathjs';
var math = require('mathjs');

export default function InverseMatrix() {
  // Calculate button
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  const [size, setSize] = useState<number>(2); // size of matrix

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize); // update size state with input value
  };

  const [expression, setExpression] = useState('');
  const [steps, setSteps] = useState<string[]>([]);

  const handleExpressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const handleCalculate = () => {
    const calculatedSteps = inverse_matrix(size, expression); // Call the inverse_matrix function from another file with the input expression
    setSteps(calculatedSteps); // Update the steps state with the calculated steps
  };

  console.log(steps);

  return (
    <div className="">
      <Navbar isLanding={false} />
      <div className="flex">
        <SidebarLinAlg />
        <div className="flex flex-col w-[60%] mt-20">
          {/* Title */}
          <div className="flex items-center justify-center rounded-xl">
            <Text
              h1
              size={60}
              css={{ textGradient: '0deg, #F0F0F0, #27476E 50%' }}
              weight="bold"
            >
              Inverse Matrix
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg text-gray-900 dark:text-gray-50 font-bold my-5">
              Description
            </h1>
            <p className="text-gray-900 dark:text-gray-50">
              Calculates the inverse from a square matrix.
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            <h1 className="text-lg text-gray-900 dark:text-gray-50 font-bold my-5">
              Inputs
            </h1>

            <div>
              <label
                htmlFor="size"
                className="text-md font-bold text-gray-900 dark:text-gray-50 mr-5"
              >
                Size:
              </label>
              <input
                id="rows"
                type="number"
                name="size"
                title="Enter the size of your matrix"
                min="1"
                max="10"
                placeholder="2"
                className="max-w-xs bg-gray-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none"
                value={size}
                onChange={handleSizeChange}
                required
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="matrix"
                className="text-md font-bold text-gray-900 dark:text-gray-50 mr-5"
              >
                Matrix
              </label>
              <input
                id="matrx"
                type="text"
                name="matrix"
                title="Enter your matrix in a comma separated list"
                placeholder="1, 2, 3, 4"
                className="max-w-xs bg-gray-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none"
                value={expression}
                onChange={handleExpressionChange}
                required
              />
            </div>

            <div className="flex flex-row justify-center">
              <button
                type="submit"
                className="text-gray-50 dark:text-gray-900 font-bold rounded-xl focus:outline-none transform: transition duration-100 ease-in-out bg-[#27476E] hover:bg-primary_blue hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none p-2 mt-5"
                onSubmit={increment}
                onClick={handleCalculate}
              >
                Calculate
              </button>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-[#AEECEF]/60 p-5">
            <h1 className="text-lg text-gray-900 dark:text-gray-50 font-bold my-5">
              Solution
            </h1>

            <p className="text-gray-900 dark:text-gray-50">
              {steps.slice(steps.length - size).map((value, index) => (
                <p
                  className="text-[#27476E] dark:text-[#AEECEF] font-bold text-xl"
                  key={index}
                >
                  {value}
                </p>
              ))}
            </p>
          </div>

          {/* Steps */}
          <div className="bg-[#AAEEEE]/80 p-5 mb-20">
            <h1 className="text-lg text-gray-900 dark:text-gray-50 font-bold my-5">
              Steps
            </h1>
            <p className="text-gray-900 dark:text-gray-50">
              {/* <ol> */}
              {steps.slice(0, steps.length - size).map((value, index) => (
                <li className="text-gray-900 dark:text-gray-50" key={index}>
                  {value}
                </li>
              ))}
              {/* </ol> */}
              <br />

              {/* Solution */}
              {steps.slice(steps.length - size).map((value, index) => (
                <p
                  className="text-[#27476E] dark:text-[#AEECEF] font-bold text-xl"
                  key={index}
                >
                  {value}
                </p>
              ))}
            </p>
          </div>
        </div>

        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl text-gray-900 dark:text-gray-50 font-bold">
            Right Side
          </h1>
        </div>
      </div>
    </div>
  );
}

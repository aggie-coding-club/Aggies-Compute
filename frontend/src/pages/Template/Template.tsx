import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinalg from '../../components/SidebarLinAlg';
import { Text } from "@nextui-org/react";
// import [Your algorithm file name] from "../../algorithms/[Your algorithm type folder]/[Your algorithm file name";

// Make sure to add your route to App.tsx

export default function YourAlgorithmName() {
  // Calculate button
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  // Your own input variable
  const [yourOwnVariable, setYourOwnVariable] = useState("");
  const handleYourOwnVariableChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setYourOwnVariable(target.value);
  };

  return (
    <div>
      <Navbar isLanding={false} />
      <div className="flex">
        <SidebarLinalg />
        <div className="flex flex-col w-[60%] mt-20">

          {/* Title */}
          <div className="flex items-center justify-center rounded-xl">
            <Text h1 size={60} css={{ textGradient: "0deg, #F0F0F0, #27476E 50%" }} weight="bold">
              Enter title here
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg dark:text-gray-50 font-bold my-5">
              Description
            </h1>
            <p>
              Enter description here
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            <h1 className="text-lg dark:text-gray-50 font-bold my-5">
              Inputs
            </h1>

            <label className="text-md font-bold dark:text-gray-50 mr-5">Enter input here</label>
            <input type="text" id="input" name="yourOwnVariable" title="Enter an expression" placeholder="Enter a sample expression here" className="max-w-xs bg-gray-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none" onChange={handleYourOwnVariableChange} required/>
            
            <div className="flex flex-row justify-center">
              <button type="submit" className="text-gray-50 dark:text-gray-900 font-bold rounded-xl focus:outline-none transform: transition duration-100 ease-in-out bg-[#27476E] hover:bg-primary_blue hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none p-2 mt-5" onSubmit={increment}>
                Calculate
              </button>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-[#AEECEF]/60 p-5">
            <h1 className="text-lg dark:text-gray-50 font-bold my-5">
              Solution
            </h1>
            <p className="dark:text-gray-50">
              Enter solution here
            </p>
          </div>

          {/* Steps */}
          <div className="bg-[#AAEEEE]/80 p-5 mb-20">
            <h1 className="text-lg dark:text-gray-50 font-bold my-5">
              Steps
            </h1>
            <p className="dark:text-gray-50">
              Enter steps here
            </p>
          </div>
        </div>

        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl dark:text-gray-50 font-bold">
            Right Side
          </h1>
        </div>
      </div>
    </div>
  );
}

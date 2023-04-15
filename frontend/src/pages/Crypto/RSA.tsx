import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar_Crypto from '../../components/SideBar_Crypto';
import { Text } from "@nextui-org/react";
// import [Your algorithm file name] from "../../algorithms/[Your algorithm type folder]/[Your algorithm file name";

// Make sure to add your route to App.tsx

export default function RSA() {
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
        <Sidebar_Crypto/>
        <div className="flex flex-col w-[60%] mt-20">

          {/* Title */}
          <div className="flex items-center justify-center rounded-xl">
            <Text h1 size={60} css={{ textGradient: "0deg, #F0F0F0, #27476E 50%" }} weight="bold">
              RSA
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Description
            </h1>
            <p>
            Numerical representation of encryption and decryption of the RSA algorithm.
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Inputs
            </h1>

            <label className="text-md font-bold dark:text-black-50 mr-5">Ciphertext:</label>
            <input type="text" id="input" name="yourOwnVariable" title="Enter an expression" placeholder="Enter ciphertext" className="max-w-xs bg-black-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none" onChange={handleYourOwnVariableChange} required/>
            <div className="h-3"> </div>
            <label className="text-md font-bold dark:text-black-50 mr-5">p (private key): </label>
            <input type="text" id="input" name="yourOwnVariable" title="Enter an expression" placeholder="Enter p (integer)" className="max-w-xs bg-black-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none" onChange={handleYourOwnVariableChange} required/>
            <div className="h-3"> </div>
            <label className="text-md font-bold dark:text-black-50 mr-5">q (private key): </label>
            <input type="text" id="input" name="yourOwnVariable" title="Enter an expression" placeholder="Enter q (integer)" className="max-w-xs bg-black-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none" onChange={handleYourOwnVariableChange} required/>
            <div className="h-3"> </div>
            <label className="text-md font-bold dark:text-black-50 mr-5">e (public key): </label>
            <input type="text" id="input" name="yourOwnVariable" title="Enter an expression" placeholder="Enter e (integer)" className="max-w-xs bg-black-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none" onChange={handleYourOwnVariableChange} required/>
            

            <div className="flex flex-row justify-center">
              <button type="submit" className="m-1.5 text-white-50 dark:text-white-900 font-bold rounded-xl focus:outline-none transform: transition duration-100 ease-in-out bg-[#27476E] hover:bg-primary_blue hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none p-2 mt-5" onSubmit={increment}>
                Encrypt Ciphertext
              </button>
              
              <button type="submit" className="m-1.5 text-white-50 dark:text-white-900 font-bold rounded-xl focus:outline-none transform: transition duration-100 ease-in-out bg-[#27476E] hover:bg-primary_blue hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none p-2 mt-5" onSubmit={increment}>
                Decrypt Ciphertext
              </button>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-[#AEECEF]/60 p-5">
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Solution
            </h1>
            <p className="dark:text-black-50">
              Enter solution here
            </p>
          </div>

          {/* Steps */}
          <div className="bg-[#AAEEEE]/80 p-5 mb-20">
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Steps
            </h1>
            <p className="dark:text-white-50">
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
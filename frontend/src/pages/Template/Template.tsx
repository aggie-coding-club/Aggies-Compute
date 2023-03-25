import React, {SetStateAction, useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar_Linalg from '../../components/Sidebar_Linalg';
import { Text } from "@nextui-org/react";

export default function InverseMatrix() {
  const [yourOwnVariable, setYourOwnVariable] = useState("");
  
  const handleYourOwnVariableChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setYourOwnVariable(target.value);
  };

  return (
    <div className="">
      <Navbar isLanding={false} />
      <div className="flex">
        <Sidebar_Linalg />
        <div className="flex flex-col w-[60%] mt-20">

          {/* Title */}
          <div className="flex items-center justify-center rounded-xl">
            <Text h1 size={60} css={{ textGradient: "0deg, #F0F0F0, #27476E 50%" }} weight="bold">
              Enter title here
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg font-bold my-5">
              Description
            </h1>
            <p>
              Enter description here
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            <h1 className="text-lg font-bold my-5">
              Inputs
            </h1>
            <p>
              Enter input name here
            </p>
            <input type="number" id="input" name="yourOwnVariable" min="1" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="3" title="Enter a width" onChange={handleYourOwnVariableChange} required/>
            
            <div className="flex flex-row justify-center">
              <button className="text-white bg-gradient-to-b from-[#27476E] to-[#000000] rounded-xl focus:outline-none transform: transition duration-100 hover:hover:scale-105 motion-reduce:transform-none p-2 mt-5" onSubmit={useState}>
                <b>
                  Calculate
                </b>
              </button>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-[#AEECEF]/60 p-5">
            <h1 className="text-lg font-bold my-5">
              Solution
            </h1>
            <p>
              Enter solution here
            </p>
          </div>

          {/* Steps */}
          <div className="bg-[#AAEEEE]/80 p-5 mb-20">
            <h1 className="text-lg font-bold my-5">
              Steps
            </h1>
            <p>
              Enter steps here
            </p>
          </div>
        </div>
        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl font-bold">
            Right Side
          </h1>
        </div>
      </div>
    </div>
  );
}

import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import SidebarAlg from '../../components/SidebarAlg';
import { Text } from "@nextui-org/react";
import add from "../../algorithms/Algebra/add";
import subtract from "../../algorithms/Algebra/subtract";
import multiply from "../../algorithms/Algebra/multiply";

// Make sure to add your route to App.tsx

export default function AddSubMult() {
  // Calculate button
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  // Your own input variable
  const [expression1, setExpression1] = useState("");
  const handleExpression1Change = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setExpression1(target.value);
  };

  // Your own input variable
  const [expression2, setExpression2] = useState("");
  const handleExpression2Change = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setExpression2(target.value);
  };

  const [steps, setSteps] = useState("");

  const handleAdd = () => {
    const calculateSteps = add(expression1, expression2);
    setSteps(calculateSteps);
  };

  const handleSub = () => {
    const calculateSteps = subtract(expression1, expression2);
    setSteps(calculateSteps);
  };

  const handleMult = () => {
    const calculateSteps = multiply(expression1, expression2);
    setSteps(calculateSteps);
  };
  return (
    <div>
      <Navbar isLanding={false} />
      <div className="flex">
        <SidebarAlg />
        <div className="flex flex-col w-[60%] mt-20">

          {/* Title */}
          <div className="flex items-center justify-center rounded-xl">
            <Text h1 size={60} css={{ textGradient: "0deg, #F0F0F0, #27476E 50%" }} weight="bold">
              Add/Sub/Mult
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg text-gray-900 font-bold my-5">
              Description
            </h1>
            <p>
              Computes and returns the sum, difference, or product of two expressions
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            <h1 className="text-lg text-gray-900 text-gray-900 font-bold my-5">
              Inputs
            </h1>

        
            <div className="flex flex-row justify-evenly"><input type="text"
             id="input" name="yourOwnVariable"
              title="Enter an expression"
               placeholder="Enter the first expression"
                className="max-w-xs bg-gray-100 rounded-xl p-2.5 text-gray-900 text-gray-900 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none"
                 onChange={handleExpression1Change} required/>
            <input type="text"
             id="input"
              name="yourOwnVariable"
               title="Enter an expression"
                placeholder="Enter another expression"
                 className="max-w-xs bg-gray-100 rounded-xl p-2.5 text-gray-900 text-gray-900 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none"
                  onChange={handleExpression2Change} required/></div>
            <div className="flex flex-row justify-center ">
              <button type="submit"
               className="text-gray-50 font-bold rounded-xl focus:outline-none transform: transition duration-100 ease-in-out bg-[#27476E] hover:bg-primary_blue hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none p-2 mx-2 mt-5"
                onSubmit={increment} onClick={handleAdd}>
                Addition
              </button>
              <button type="submit"
               className="text-gray-50 font-bold rounded-xl focus:outline-none transform: transition duration-100 ease-in-out bg-[#27476E] hover:bg-primary_blue hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none p-2 mx-2 mt-5"
                onSubmit={increment} onClick={handleSub}>
                Subtract
              </button>
              <button type="submit"
               className="text-gray-50 font-bold rounded-xl focus:outline-none transform: transition duration-100 ease-in-out bg-[#27476E] hover:bg-primary_blue hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none p-2 mx-2 mt-5"
                onSubmit={increment} onClick={handleMult}>
                Multiply
              </button>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-[#AEECEF]/60 p-5">
            <h1 className="text-lg text-gray-900 font-bold my-5">
              Solution
            </h1>
            <p className="text-gray-900">
              {steps}
            </p>
          </div>

          {/* Steps */}
          <div className="bg-[#AAEEEE]/80 p-5 mb-20">
            <h1 className="text-lg text-gray-900 font-bold my-5">
              Steps
            </h1>
            <p className="text-gray-900">
              Enter steps here
            </p>
          </div>
        </div>

        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl text-gray-900 font-bold">
            Right Side
          </h1>
        </div>
      </div>
    </div>
  );
}
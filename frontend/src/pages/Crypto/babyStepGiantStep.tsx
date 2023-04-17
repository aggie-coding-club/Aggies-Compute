import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar_Crypto from '../../components/SideBar_Crypto';
import { Text } from "@nextui-org/react";
import { babyList, babystep_giantstep, bgComparison, getN, giantList, matchingNumber } from '../../algorithms/Crypto/babystep_giantstep';

// import [Your algorithm file name] from "../../algorithms/[Your algorithm type folder]/[Your algorithm file name";

// Make sure to add your route to App.tsx

export default function BabyStepGiantStep() {
  const allowedCharacters = "0123456789";

  const [base, setBase] = useState("");
  const [target, setTarget] = useState("");
  const [modulus, setModulus] = useState("");

  const [solution, setSolution] = useState("");
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState("");
  const [step4, setStep4] = useState("");
  const [step5, setStep5] = useState("");
  const [step6, setStep6] = useState("");


  const handleBaseChange = (event: React.FormEvent<HTMLInputElement>) => {
    const t= event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if(allowedCharacters.includes(inputtedCharacter)) {
      setBase(t.value);
    } else {
      t.value = base;
    }
  };

  const handleTargetChange = (event: React.FormEvent<HTMLInputElement>) => {
    const t= event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if(allowedCharacters.includes(inputtedCharacter)) {
      setTarget(t.value);
    } else {
      t.value = target;
    }
  };

  const handleModulusChange = (event: React.FormEvent<HTMLInputElement>) => {
    const t= event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if(allowedCharacters.includes(inputtedCharacter)) {
      setModulus(t.value);
    } else {
      t.value = modulus;
    }
  };

  const handleCalculateClick = () => {
    setSolution(babystep_giantstep(BigInt(base), BigInt(modulus), BigInt(target)).toString());
    setStep1("N = " + getN(BigInt(modulus)));
    setStep2("Baby Step: " + babyList(BigInt(base), BigInt(modulus), BigInt(target)))
    setStep3("Giant Step: " + giantList(BigInt(base), BigInt(modulus), BigInt(target)))
    setStep4(matchingNumber(BigInt(base), BigInt(modulus), BigInt(target)))
    setStep5(bgComparison(BigInt(base), BigInt(modulus), BigInt(target)))
  }

  


  return (
    <div>
      <Navbar isLanding={false} />
      <div className="flex">
        <Sidebar_Crypto/>
        <div className="flex flex-col w-[60%] mt-20">

          {/* Title */}
          <div className="flex items-center justify-center rounded-xl">
            <Text h1 size={60} css={{ textGradient: "0deg, #F0F0F0, #27476E 50%" }} weight="bold">
              Baby Step Giant Step
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Description
            </h1>
            <p>
            The Baby Step Giant Step Algorithm is a method used to solve the Discrete Log Problem in which two generator elements calculate 
            a list of values until they have a matching element, where the values can then be compared and the DLP can be solved.
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Inputs
            </h1>

            <label className="text-md font-bold dark:text-black-50 mr-5">Base:</label>
            <input 
              type="text" id="input" 
              name="yourOwnVariable" 
              title="Enter an expression" 
              placeholder="Enter base (int)" 
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" 
              onChange={handleBaseChange} 
              required
            />

            <div className="h-3"> </div>

            <label className="text-md font-bold dark:text-black-50 mr-5">Target:</label>
            <input 
              type="text" id="input" 
              name="yourOwnVariable" 
              title="Enter an expression" 
              placeholder="Enter target (int)" 
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" 
              onChange={handleTargetChange} 
              required
            />

            <div className="h-3"> </div>

            <label className="text-md font-bold dark:text-black-50 mr-5">Modulus:</label>
            <input 
              type="text" id="input" 
              name="yourOwnVariable" 
              title="Enter an expression" 
              placeholder="Enter modulus (int)" 
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" 
              onChange={handleModulusChange} 
              required
            />

            <div className="h-3"> </div>

            <div className="flex flex-row justify-center">
                <input 
                  type="button" 
                  id="calculate" 
                  value="Calculate" 
                 
                  className="text-white bg-gradient-to-b from-[#27476E] to-[#000000] rounded-xl disabled:opacity-25 focus:outline-none transform: transition duration-100 hover:hover:scale-105 motion-reduce:transform-none p-2" 
                  onClick={handleCalculateClick}
                  />
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-[#AEECEF]/60 p-5">
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Solution
            </h1>
            <p className='text-lg text-center font-bold'>
              {solution}
            </p>
          </div>

          {/* Steps */}
          <div className="bg-[#AAEEEE]/80 p-5 mb-20">
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Steps
            </h1>
            <p className="dark:text-white-50">{step1}</p>
            <p className="dark:text-white-50">{step2}</p>
            <p className="dark:text-white-50">{step3}</p>
            <p className="dark:text-white-50">{step4}</p>
            <p className="dark:text-white-50">{step5}</p>
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
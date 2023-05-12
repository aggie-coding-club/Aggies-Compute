import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import info_ from '../../components/info_crypto.json';
import { Text } from "@nextui-org/react";
import { CRT_helper } from '../../algorithms/Crypto/chineseRemainderTheorem';
import { GCDBigInt } from '../../algorithms/Crypto/helper_Crypto';
import { inverseModBigInt } from '../../algorithms/Crypto/helper_Crypto';
// import [Your algorithm file name] from "../../algorithms/[Your algorithm type folder]/[Your algorithm file name";

// Make sure to add your route to App.tsx

export default function ChineseRemainderTheorem() {
  const allowedCharacters = "0123456789";

  const [a1, set_a1] = useState("");
  const [p1, set_p1] = useState("");
  const [a2, set_a2] = useState("");
  const [p2, set_p2] = useState("");

  const [warning, setWarning] = useState("")
  const [solution, setSolution] = useState("");
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState("");
  const [step4, setStep4] = useState("");
  const [step5, setStep5] = useState("");
  const [step6, setStep6] = useState("");
  const [step7, setStep7] = useState("");
  const [step8, setStep8] = useState("");

  const handle_a1_Change = (event: React.FormEvent<HTMLInputElement>) => {
    const t = event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if (allowedCharacters.includes(inputtedCharacter)) {
      set_a1(t.value);
    } else {
      t.value = a1;
    }
  };

  const handle_a2_Change = (event: React.FormEvent<HTMLInputElement>) => {
    const t = event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if (allowedCharacters.includes(inputtedCharacter)) {
      set_a2(t.value);
    } else {
      t.value = a2;
    }
  };

  const handle_p1_Change = (event: React.FormEvent<HTMLInputElement>) => {
    const t = event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if (allowedCharacters.includes(inputtedCharacter)) {
      set_p1(t.value);
    } else {
      t.value = p1;
    }
  };

  const handle_p2_Change = (event: React.FormEvent<HTMLInputElement>) => {
    const t = event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if (allowedCharacters.includes(inputtedCharacter)) {
      set_p2(t.value);
    } else {
      t.value = p2;
    }
  };


  const handleCalculateClick = () => {
    if (GCDBigInt(BigInt(p1), BigInt(p2)) === BigInt(1)) {
      setSolution(CRT_helper(BigInt(a1), BigInt(a2), BigInt(p1), BigInt(p2)).toString());
      setStep1("x = " + a1 + " (mod " + p1 + ")");
      setStep2(p1 + " | x - " + a1);
      setStep3("x = " + a1 + " + " + p1 + "k");
      setStep4("...");
      setStep5(a1 + " + " + p1 + "k = " + a2 + " (mod " + p2 + ")");

      let k: bigint = inverseModBigInt(BigInt(p1), BigInt(p2)) * (BigInt(a2) - BigInt(a1));

      setStep6("k = " + k + " mod(" + p2 + ")");
      setStep7("...");
      setStep8("x = " + a1 + " + " + p1 + "(" + k + ") = " + solution);

    }

    else {
      setSolution("Error: p1 and p2 must be coprime");
      setStep1("")
      setStep2("")
      setStep3("")
      setStep4("")
      setStep5("")
      setStep6("")
      setStep7("")
      setStep8("")
    }
  }

  return (
    <div>
      <Navbar isLanding={false} />
      <div className="flex">
        <Sidebar info={info_} />
        <div className="flex flex-col w-[60%] mt-20">

          {/* Title */}
          <div className="flex items-center justify-center rounded-xl">
            <Text h1 size={60} css={{ textGradient: "0deg, #F0F0F0, #27476E 50%" }} weight="bold">
              Chinese Remainder Theorem
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Description
            </h1>
            <p>
              The Chinese Remainder Theorem solves a set of congruences where the moduli are coprime with each other.
              (x = a1 (mod p1), x = a2 (mod p2))
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Inputs
            </h1>

            <label className="text-md font-bold dark:text-black-50 mr-5">a1:</label>
            <input
              type="text" id="input"
              name="yourOwnVariable"
              title="Enter an expression"
              placeholder="Enter a1 (int)"
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
              onChange={handle_a1_Change}
              required
            />
            <div className="h-3"> </div>

            <label className="text-md font-bold dark:text-black-50 mr-5">p1:</label>
            <input
              type="text" id="input"
              name="yourOwnVariable"
              title="Enter an expression"
              placeholder="Enter p1 (int)"
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
              onChange={handle_p1_Change}
              required
            />
            <div className="h-3"> </div>

            <label className="text-md font-bold dark:text-black-50 mr-5">a2:</label>
            <input
              type="text" id="input"
              name="yourOwnVariable"
              title="Enter an expression"
              placeholder="Enter a2 (int)"
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
              onChange={handle_a2_Change}
              required
            />
            <div className="h-3"> </div>

            <label className="text-md font-bold dark:text-black-50 mr-5">p2:</label>
            <input
              type="text" id="input"
              name="yourOwnVariable"
              title="Enter an expression"
              placeholder="Enter p2 (int)"
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
              onChange={handle_p2_Change}
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
            <p className="dark:text-black-50">
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
            <p className="dark:text-white-50">{step6}</p>
            <p className="dark:text-white-50">{step7}</p>
            <p className="dark:text-white-50">{step8}</p>
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
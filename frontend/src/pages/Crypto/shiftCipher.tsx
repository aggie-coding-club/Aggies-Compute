import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar_Crypto from '../../components/SideBar_Crypto';
import { Text } from "@nextui-org/react";
import { shiftCipher } from '../../algorithms/Crypto/shiftCipher';
import { toNumbers } from '../../algorithms/Crypto/shiftCipher';
import { spaceOutLetters } from '../../algorithms/Crypto/shiftCipher';
import { shiftValues } from '../../algorithms/Crypto/shiftCipher';
import { spaceOutShifted } from '../../algorithms/Crypto/shiftCipher';
// import [Your algorithm file name] from "../../algorithms/[Your algorithm type folder]/[Your algorithm file name";

// Make sure to add your route to App.tsx

export default function ShiftCipher() {
  const allowedNumbers = "0123456789";
  const allowedLetters = "abcdefghijklmnopqrstuvwxyz ";

  const [ciphertext, set_ciphertext] = useState("");
  const [shift, set_shift] = useState("");
  const [solution, setSolution] = useState("");
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState("");
  const [step4, setStep4] = useState("");



  const handle_ciphertext_Change = (event: React.FormEvent<HTMLInputElement>) => {
    const t= event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if(allowedLetters.includes(inputtedCharacter)) {
      set_ciphertext(t.value);
    } else {
      t.value = ciphertext;
    }
  };

  const handle_shift_Change = (event: React.FormEvent<HTMLInputElement>) => {
    const t= event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if(allowedNumbers.includes(inputtedCharacter)) {
      set_shift(t.value);
    } else {
      t.value = shift;
    }
  };

  const handleCalculateClick = () => {
    setSolution(shiftCipher(ciphertext, Number(shift), allowedLetters));
    setStep1(spaceOutLetters(ciphertext));
    setStep2(toNumbers(ciphertext, Number(shift), allowedLetters))
    setStep3(shiftValues(ciphertext, Number(shift), allowedLetters));
    setStep4(spaceOutShifted(ciphertext, Number(shift), allowedLetters));

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
              Shift Cipher
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Description
            </h1>
            <p>
            The Shift Cipher (also known as the Caesar Cipher) is a basic substitution cipher that substitutes a letter with a another 
            positioned a certain distance value or "shift" within a given alphabet. 
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Inputs
            </h1>

            <label className="text-md font-bold dark:text-black-50 mr-5">Ciphertext:</label>
            <input 
              type="text" id="input" 
              name="yourOwnVariable" 
              title="Enter an expression" 
              placeholder="Enter ciphertext (string)" 
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" 
              onChange={handle_ciphertext_Change} 
              required
            />
            <div className="h-3"> </div>

            <label className="text-md font-bold dark:text-black-50 mr-5">Shift:</label>
            <input 
              type="text" id="input" 
              name="yourOwnVariable" 
              title="Enter an expression" 
              placeholder="Enter shift (int)" 
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" 
              onChange={handle_shift_Change} 
              required
            />
            <div className="h-3"> </div>

            <div className="flex flex-row justify-center">
                <input 
                  type="button" 
                  id="calculate" 
                  value="Encrypt/Decrypt" 
                 
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
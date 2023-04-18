import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import info_ from '../../components/info_crypto.json';
import { Text } from "@nextui-org/react";
import { affineCipher_Encrypt, affineValues_Encrypt, affineValues_Decrypt } from '../../algorithms/Crypto/affineCipher';
import { affineCipher_Decrypt } from '../../algorithms/Crypto/affineCipher';
import { spaceOutLetters } from '../../algorithms/Crypto/shiftCipher';
import { GCD, GCDBigInt } from '../../algorithms/Crypto/helper_Crypto';
import { gcd } from 'mathjs';
import { toNumbers } from '../../algorithms/Crypto/shiftCipher';
import { spaceOutShifted } from '../../algorithms/Crypto/shiftCipher';
// import [Your algorithm file name] from "../../algorithms/[Your algorithm type folder]/[Your algorithm file name";

// Make sure to add your route to App.tsx

export default function AffineCipher() {
  const allowedNumbers = "0123456789";
  const allowedLetters = "abcdefghijklmnopqrstuvwxyz ";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const [ciphertext, set_ciphertext] = useState("");
  const [a, set_a] = useState("");
  const [b, set_b] = useState("");
  const [solution, setSolution] = useState("");
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState("");
  const [step4, setStep4] = useState("");

  const handle_ciphertext_Change = (event: React.FormEvent<HTMLInputElement>) => {
    const t = event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if (allowedLetters.includes(inputtedCharacter)) {
      set_ciphertext(t.value);
    } else {
      t.value = ciphertext;
    }
  }
  const handle_a_Change = (event: React.FormEvent<HTMLInputElement>) => {
    const t = event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if (allowedNumbers.includes(inputtedCharacter)) {
      set_a(t.value);
    } else {
      t.value = a;
    }
  }
  const handle_b_Change = (event: React.FormEvent<HTMLInputElement>) => {
    const t = event.target as HTMLInputElement;
    const inputtedCharacter = t.value.slice(-1);
    if (allowedNumbers.includes(inputtedCharacter)) {
      set_b(t.value);
    } else {
      t.value = b;
    }
  }


  const handleCalculateEncrypt = () => {
    if (GCDBigInt(BigInt(a), BigInt(alphabet.length)) === BigInt(1)) {
      setSolution(affineCipher_Encrypt(ciphertext, Number(a), Number(b), alphabet))
      setStep1(spaceOutLetters(ciphertext));
      setStep2(toNumbers(ciphertext, 0, allowedLetters))
      setStep3(affineValues_Encrypt(ciphertext, Number(a), Number(b), alphabet))
      setStep4(spaceOutShifted(affineCipher_Encrypt(ciphertext, Number(a), Number(b), alphabet), 0, allowedLetters));

    }

    else {
      setSolution("Error: GCD of a and the alphabet length must be 1")
    }
  }
  const handleCalculateDecrypt = () => {
    if (GCDBigInt(BigInt(a), BigInt(alphabet.length)) === BigInt(1)) {
      setSolution(affineCipher_Decrypt(ciphertext, Number(a), Number(b), alphabet))
      setStep1(spaceOutLetters(ciphertext));
      setStep2(toNumbers(ciphertext, 0, allowedLetters))
      setStep3(affineValues_Decrypt(ciphertext, Number(a), Number(b), alphabet))
      setStep4(spaceOutShifted(affineCipher_Decrypt(ciphertext, Number(a), Number(b), alphabet), 0, allowedLetters));


    }

    else {
      setSolution("Error: GCD of a and the alphabet length must be 1")
      setStep1("")
      setStep2("")
      setStep3("")
      setStep4("")
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
              Affine Cipher
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg dark:text-black-50 font-bold my-5">
              Description
            </h1>
            <p>
              The Affine Cipher is a type of substituation shift cipher that relies on two keys, "a" and "b" to encrypt/decrypt ciphertext.
              (y = ax + b (mod p)) where y is the encrypted letter, x is the decrypted letter, and p is the length of the alphabet
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

            <label className="text-md font-bold dark:text-black-50 mr-5">a:</label>
            <input
              type="text" id="input"
              name="yourOwnVariable"
              title="Enter an expression"
              placeholder="Enter a (int)"
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
              onChange={handle_a_Change}
              required
            />
            <div className="h-3"> </div>

            <label className="text-md font-bold dark:text-black-50 mr-5">b:</label>
            <input
              type="text" id="input"
              name="yourOwnVariable"
              title="Enter an expression"
              placeholder="Enter b (int)"
              className=" max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
              onChange={handle_b_Change}
              required
            />
            <div className="h-3"> </div>

            <div className="flex flex-row justify-center">
              <input
                type="button"
                id="calculate"
                value="Encrypt"

                className="text-white bg-gradient-to-b from-[#27476E] to-[#000000] rounded-xl disabled:opacity-25 focus:outline-none transform: transition duration-100 hover:hover:scale-105 motion-reduce:transform-none p-2"
                onClick={handleCalculateEncrypt}
              />

              <input
                type="button"
                id="calculate"
                value="Decrypt"

                className="text-white bg-gradient-to-b from-[#27476E] to-[#000000] rounded-xl disabled:opacity-25 focus:outline-none transform: transition duration-100 hover:hover:scale-105 motion-reduce:transform-none p-2"
                onClick={handleCalculateDecrypt}
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
            <p className="dark:text-white-50">
              <p className="dark:text-white-50">{step1}</p>
              <p className="dark:text-white-50">{step2}</p>
              <p className="dark:text-white-50">{step3}</p>
              <p className="dark:text-white-50">{step4}</p>
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
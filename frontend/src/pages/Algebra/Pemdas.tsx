import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinAlg from '../../components/SidebarLinAlg';
import pemdas from '../../algorithms/Algebra/pemdas';
import { Text } from "@nextui-org/react";

export default function Pemdas() {
  const [expression, setExpression] = useState("");
  const [warning, setWarning] = useState("")
  const [solution, setSolution] = useState("");
  const [steps, setSteps] = useState([""]);

  const allowedCharacters = "0123456789+-/*^() ";

  
  const handleExpressionChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    const inputtedCharacter = target.value.slice(-1);
    if(allowedCharacters.includes(inputtedCharacter)) {
      setExpression(target.value);
    } else {
      target.value = expression;
    }

    // TODO: Check for syntax errors in expression

    if (!parenthesisCheck(target.value)) {
      setWarning("Parenthesis not matched");
    } else if (!operatorCheck(target.value)) {
      setWarning("Improper operations")
    } else {
      setWarning("");
    }
  };

  function parenthesisCheck(expression: string) {
    const parenthesisStack = [];
      for(let char of expression) {
        if (char === "(") {
          parenthesisStack.push("(");
        } else if (char === ")") {
          const check = parenthesisStack.pop();
          if (check === undefined) {
            return false;
          }
        }
      }
      return parenthesisStack.length === 0;
  }

  function operatorCheck(expression: string) {
    if (expression.length === 0) { return true; }
    expression = expression.replace(/\s/g, "");
    if (allowedCharacters.slice(10,-3).includes(expression.charAt(0))) { return false; }
    if (allowedCharacters.slice(10,-3).includes(expression.charAt(expression.length - 1))) { return false; }
    let i = expression.length - 1;
    while (i > 1) {
      const char2 = expression.charAt(i);
      const char1 = expression.charAt(i - 1);
      if (allowedCharacters.slice(10,-3).includes(char1) && allowedCharacters.slice(10,-3).includes(char2)) {
        const char3 = expression.charAt(i - 2);
        return char2 === '-' && !allowedCharacters.slice(10,-3).includes(char3);

      }
      i--;
    }
    return true;
  }

  const handleCalculateClick = () => {
    const result = pemdas(expression)
    setSolution(result[result.length - 1])
    setSteps(result);
  }

  return (
    <div className="">
      <Navbar isLanding={false} />
      <div className="flex">
        <SidebarLinAlg />
        <div className="flex flex-col w-[60%] mt-20">

          {/* Title */}
          <div className="flex items-center justify-center rounded-xl">
            <Text h1 size={60} css={{ textGradient: "0deg, #F0F0F0, #27476E 50%" }} weight="bold">
              PEMDAS
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg font-bold my-5">
              Description
            </h1>
            <p>
              PEMDAS is an acronym for a set of rules for order of operations. It stands for Parenthesis, Exponents, 
              Multiplication/Division, and Addition/Subtraction. All expressions should be evaluated following the PEMDAS rules, starting with the 
              lowest level parenthesis. Multiplication/Division and Addition/Subtraction is a little different, with both operations being evaluated
              from left to right in the expression in the order they appear.
            </p>
            <br/>
            <p>
                To simplify and expression and show the steps, input the expression below and press the "Calculate" button.
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            <h1 className="text-lg font-bold my-5">
              Inputs
            </h1>
            <p>
              Enter expression below
            </p>
            <input type="text" id="input" name="expression" min="1" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black text-center outline-[#27476E] transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="5 + 1 / 2" title="Enter a expression" onChange={handleExpressionChange} required/>
            <p>{warning}</p>
            <div className="flex flex-row justify-center">
                <input type="button" id="calculate" value="Calculate" disabled={!(warning.length === 0)} className="text-white bg-gradient-to-b from-[#27476E] to-[#000000] rounded-xl focus:outline-none transform: transition duration-100 hover:hover:scale-105 motion-reduce:transform-none p-2 mt-5" onClick={handleCalculateClick}/>
            </div>
            <p>
              {expression}
            </p>
          </div>

          {/* Solutions */}
          <div className="bg-[#AEECEF]/60 p-5">
            <h1 className="text-lg font-bold my-5">
              Solution
            </h1>
            <p>
              {solution}
            </p>
          </div>

          {/* Steps */}
          <div className="bg-[#AAEEEE]/80 p-5 mb-20">
            <h1 className="text-lg font-bold my-5">
              Steps
            </h1>
            <ul>
              {steps.map((step, index) => (
                <li>{step}</li>
              ))}
            </ul>
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
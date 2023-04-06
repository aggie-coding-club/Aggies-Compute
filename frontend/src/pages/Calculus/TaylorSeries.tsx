import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinalg from '../../components/SidebarLinAlg'; //Has not been created for Calculus
import { taylorSeries } from '../../algorithms/Calculus/taylor_series';

export default function TaylorSeries() {
  const[equation, setEquation] = useState("")
  const[point, setPoint] = useState("")
  const[order,setOrder] = useState("")
  const [solution, setSolution] = useState("")

  const onEquationChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setEquation(target.value)
  }

  const onPointChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setPoint(target.value)
  }

  const onOrderChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setOrder(target.value)
  }

  const handleCalculate = () => {
    const result = taylorSeries(equation, point, order)
    setSolution(result)
  }

  return (
    <div className="">
      <Navbar isLanding={false} />
      <div className="flex">
        <SidebarLinalg />
        <div className="flex flex-col w-[60%] mt-20">
          {/* Title */}
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold">Taylor / Maclaurin Series</p>
          </div>
          {/* Description */}
          <div>
            <p>
              The Taylor Series is a way to express a given function at a point as an infinite summation of derivatives.
            </p>
          </div>
          {/* Inputs */}
          <p className='text-lg font-bold my-5'>Input</p>
          <p>Input your equation here:</p>
            <input
                type="text"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black"
                placeholder=""
                title="Enter the Equation"
                onChange={onEquationChange}
                required
              />
          <p>Input the point:</p>
          <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black"
                placeholder=""
                title="Enter the point"
                onChange={onPointChange}
                required
              />
          <p>Input the number of terms desired:</p>
          <input
                type="number"
                id="input"
                className="bg-gray-100 rounded-xl p-2.5 text-black"
                placeholder=""
                title="Enter the point"
                onChange={onOrderChange}
                required
              />
          <button
           type="button" 
           id="submit" 
           value="Submit" 
           onClick={handleCalculate}
           className="color: white background-color: #555555 text-align: center"
           >
            Calculate!
            {/*
            For the button to be a submit button, and onClick it needs to acticvate a function that takes input
            From the three textboxes above and output both a solution and steps to the below two functions.
            */}
          </button>
          <div>
          </div>
          {/* Solutions */}
          
          <div>
            <body className='text-lg font-bold my-5'>{solution}</body>
          </div>
          {/* Steps */}
          <div>
            <p className='text-lg font-bold my-5'>Steps</p>
          </div>
        </div>
        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl font-bold"> Right Side</h1>
        </div>
      </div>
    </div>
  );
}   

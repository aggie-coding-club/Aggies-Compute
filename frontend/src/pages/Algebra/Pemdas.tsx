import React from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinalg from '../../components/SidebarLinAlg';

export default function Pemdas() {
return (
    <div className="">
        <Navbar isLanding={false} />
        <div className="flex">
        <SidebarLinalg />
        <div className="flex flex-col w-[60%] mt-20">
            {/* Title */}
            <div className="flex items-center justify-center">
            <p className="text-xl font-bold">PEMDAS</p>
            </div>
            {/* Description */}
            <div>
            <p>
                PEMDAS is a predetermined series of steps used to strictly organize order of operations. 
                PEMDAS itself is an acronym for Parenthesis, Exponents, Multiplication, Division, Addition, and Subtraction.
                The order of operations is meant to be carried out in the same order as the acronym, with a few caveats:
            </p>
            <ul>
                <li>Parenthesis are evaluated from the lowest level outwards</li>
                <li>Multiplication and Division are carried out left to right in the order they appear in the equation</li>
                <li>Addition and Subtraction are carried out left to right in the order they appear in the equation</li>
            </ul>
            </div>
            {/* Inputs */}
            <div>
                <p className="text-lg font-bold my-5">Inputs</p>
                <p>Enter your expression</p>
                <div className="flex flex_row">
                    <input
                        type="text"
                        id="input"
                        className="basis-full bg-gray-100 rounded-xl p-2.5 text-black text-center focus:bg-transparent transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none"
                        placeholder=""
                        title="Enter the expression"
                        required
                    />
                </div>
            </div>
            {/* Calculate */}
            <div className='flex flex_row justify-center'>
                <input
                    type="button"
                    id="calculate"
                    className="basis-1/4 bg-blue-600 rounded-xl p-2.5 m-5"
                    value="Calculate"
                />
            </div>
            {/* Solutions */}
            <div>
                <p className="text-lg font-bold my-5">Solution</p>
                <div className="flex flex-row">
                    <div className="basis-full bg-gray-100 rounded-xl p-2.5 text-gray-900">
                        1
                    </div>
                </div>
            </div>
            {/* Steps */}
            <div>
                <p className="text-lg font-bold my-5">Steps</p>
                <p>Use the formula</p>
            </div>
        </div>
        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
            <h1 className="text-xl font-bold"> Right Side</h1>
        </div>
        </div>
    </div>
    );
}

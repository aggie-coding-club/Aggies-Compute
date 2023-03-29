import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar_Linalg from '../../components/Sidebar_Linalg';
import { Text } from "@nextui-org/react";

export default function InverseMatrix() {
  // Calculate button
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  const [rows, setRows] = useState<number>(2); // initial number of rows
  const [cols, setCols] = useState<number>(2); // initial number of columns
  const [matrix, setMatrix] = useState<string[][]>(
    new Array(rows).fill(new Array(cols).fill(''))
  ); // initial matrix state with empty strings

  const handleRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRows = parseInt(e.target.value);
    setRows(newRows); // update rows state with input value
    setMatrix((prevMatrix) =>
      new Array(newRows)
        .fill(null)
        .map(() => new Array(cols).fill(''))
    ); // update the matrix with new number of rows
  };

  const handleColChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCols = parseInt(e.target.value);
    setCols(newCols); // update cols state with input value
    setMatrix((prevMatrix) =>
      prevMatrix.map((row) =>
        row.length < newCols
          ? [...row, ...new Array(newCols - row.length).fill('')]
          : row.slice(0, newCols)
      )
    ); // update the matrix with new number of columns
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number
  ) => {
    const newMatrix = [...matrix];
    newMatrix[rowIndex][colIndex] = e.target.value;
    setMatrix(newMatrix); // update the state with new matrix values
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
              Inverse Matrix
            </Text>
          </div>

          {/* Description */}
          <div>
            <h1 className="text-lg text-gray-900 dark:text-gray-50 font-bold my-5">
              Description
            </h1>
            <p className="text-gray-900 dark:text-gray-50">
              Returns the inverse matrix from a given matrix
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            
            <h1 className="text-lg text-gray-900 dark:text-gray-50 font-bold my-5">
              Inputs
            </h1>
            
            <div className="flex flex-col items-center">
              <div className="flex space-x-4 my-4">
                <div>
                  <label htmlFor="rows" className="text-md font-bold text-gray-900 dark:text-gray-50 mr-5">Rows:</label>
                  <input id="rows" type="number" name="rows" title="Enter the number of rows in your matrix" min="1" max="10" placeholder="3" className="max-w-xs bg-gray-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none" value={rows} onChange={handleRowChange} required/>
                </div>
                <div>
                  <label htmlFor="cols" className="text-md font-bold text-gray-900 dark:text-gray-50 mt-5 mr-5">Columns:</label>
                  <input id="cols" type="number" name="columns" title="Enter the number of columns in your matrix" min="1" max="10" placeholder="3" className="max-w-xs bg-gray-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none" value={cols} onChange={handleColChange} required/>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-md font-bold text-gray-900 dark:text-gray-50">Enter your matrix:</label>
              <div className={`grid grid-cols-${cols} gap-4`}>
                {matrix.map((row, rowIndex) =>
                  row.map((col, colIndex) => (
                    <input
                    type="text"
                    id="input"
                    title="Enter a number"
                    key={`${rowIndex}-${colIndex}`}
                    placeholder="0"
                    value={matrix[rowIndex][colIndex]}
                    className="min-w-0 bg-gray-100 rounded-xl p-2.5 m-2 text-gray-900 dark:text-gray-50 focus:bg-gray-50 focus:placeholder-gray-400 focus:outline-none transition duration-100 ease-in-out hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none"
                    onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                    required
                    />
                  ))
                )}
              </div>
            </div>

            <div className="flex flex-row justify-center">
              <button type="submit" className="text-gray-50 dark:text-gray-900 font-bold rounded-xl focus:outline-none transform: transition duration-100 ease-in-out bg-[#27476E] hover:bg-primary_blue hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none p-2 mt-5" onSubmit={increment}>
                Calculate
              </button>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-[#AEECEF]/60 p-5">
            <h1 className="text-lg text-gray-900 dark:text-gray-50 font-bold my-5">
              Solution
            </h1>
            <div className="grid grid-rows-3 grid-cols-3 gap-4 my-5">
              <div className="text-gray-900 dark:text-gray-50">1</div>
              <div className="text-gray-900 dark:text-gray-50">2</div>
              <div className="text-gray-900 dark:text-gray-50">3</div>
              <div className="text-gray-900 dark:text-gray-50">4</div>
              <div className="text-gray-900 dark:text-gray-50">5</div>
              <div className="text-gray-900 dark:text-gray-50">6</div>
              <div className="text-gray-900 dark:text-gray-50">7</div>
              <div className="text-gray-900 dark:text-gray-50">8</div>
              <div className="text-gray-900 dark:text-gray-50">9</div>
            </div>
          </div>

          {/* Steps */}
          <div className="bg-[#AAEEEE]/80 p-5 mb-20">
            <h1 className="text-lg text-gray-900 dark:text-gray-50 font-bold my-5">
              Steps
            </h1>
            <p className="text-gray-900 dark:text-gray-50">
              Use the formula
            </p>
          </div>
        </div>

        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl text-gray-900 dark:text-gray-50 font-bold">
            Right Side
          </h1>
        </div>
      </div>
    </div>
  );
}

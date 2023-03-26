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

  // Matrix row and columns
  const [matrixSize, setMatrixSize] = useState({ rows: 3, columns: 3 });
  const [matrix, setMatrix] = useState(() => {
    const initialMatrix = Array(matrixSize.rows).fill(0).map(() => Array(matrixSize.columns).fill(0));
    return initialMatrix;
  });

  function handleCellValueChange(event: React.ChangeEvent<HTMLInputElement>, row: number, column: number) {
    const newMatrix = matrix.map((rowArr, rowIndex) => {
      if (rowIndex === row) {
        return rowArr.map((cellValue, columnIndex) => {
          if (columnIndex === column) {
            return parseInt(event.target.value, 10) || 0;
          }
          return cellValue;
        });
      }
      return rowArr;
    });
    setMatrix(newMatrix);
  }

  function handleMatrixSizeChange(event: React.ChangeEvent<HTMLInputElement>, dimension: string) {
    const newSize = parseInt(event.target.value, 10) || 0;
    setMatrixSize((prevState) => ({ ...prevState, [dimension]: newSize }));
  }

  const handleMatrixChange = (row: number, column: number, event: React.ChangeEvent<HTMLInputElement>) => {
    let copy = [...matrix];
    copy[row][column] = event.target.value;
    setMatrix(copy);

    console.log(matrix);
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
            
            <div className="flex flex-col">
            <label className="text-md font-bold text-gray-900 dark:text-gray-50">Rows:</label>
            <input type="number" id="input" name="rows" title="Enter the number of rows in your matrix" min="1" placeholder="3" className="max-w-xs bg-gray-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none" value={matrixSize.rows} onChange={(event) => handleMatrixSizeChange(event, "rows")} required/>
            
            <label className="text-md font-bold text-gray-900 dark:text-gray-50 mt-5">Columns:</label>
            <input type="number" id="input" name="columns" title="Enter the number of columns in your matrix" min="1" placeholder="3" className="max-w-xs bg-gray-100 rounded-xl p-2.5 text-gray-900 dark:text-gray-50 focus:bg-gray-50 focus:placeholder-gray-400 focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none" value={matrixSize.columns} onChange={(event) => handleMatrixSizeChange(event, "columns")} required/>
            </div>

            <div className="mt-5">
              <label className="text-md font-bold text-gray-900 dark:text-gray-50">Enter your matrix:</label>
              {matrix.map((row, rowIndex) => (
                <div className="flex flex-wrap" key={rowIndex}>
                  {row.map((cell, columnIndex) => (
                    <input
                      type="number"
                      id="input"
                      title="Enter a number"
                      key={`${rowIndex}-${columnIndex}`}
                      className="flex-1 min-w-0 bg-gray-100 rounded-xl p-2.5 m-2 text-gray-900 dark:text-gray-50 focus:bg-gray-50 focus:placeholder-gray-400 focus:outline-none transition duration-100 ease-in-out hover:bg-gray-50 hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none"
                      placeholder="0"
                      value={cell}
                      onChange={(event) => handleCellValueChange(event, rowIndex, columnIndex)}
                      required
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex flex-row justify-center">
              <button type="submit" className="text-gray-50 dark:text-gray-900 font-bold rounded-xl focus:outline-none transform: transition duration-100 ease-in-out bg-[#27476E] hover:bg-primary_blue hover:scale-105 focus:ring-4 ring-primary_blue-light ring-opacity-20 motion-reduce:transform-none p-2 mt-5">
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

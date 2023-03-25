import React, {SetStateAction, useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar_Linalg from '../../components/Sidebar_Linalg';
import { Text, Input } from "@nextui-org/react";

export default function InverseMatrix() {
  // const [matrixSize, setMatrixSize] = useState({ rows: 3, columns: 3 });
  // const [matrix, setMatrix] = useState(() => {
  //   const initialMatrix = Array(matrixSize.rows).fill(0).map(() => Array(matrixSize.columns).fill(0));
  //   return initialMatrix;
  // });

  const [matrixWidth, setMatrixWidth] = useState("");
  const [matrixHeight, setMatrixHeight] = useState("");
  // const [matrix, setMatrix] = useState(Array.from({length: matrixWidth},()=> Array.from({length: matrixHeight}, () => null)));
  
  const handleWidthChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setMatrixWidth(target.value);
  };

  const handleHeightChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setMatrixHeight(target.value);
  };

  // function handleCellValueChange(event: React.ChangeEvent<HTMLInputElement>, row: number, column: number) {
  //   const newMatrix = matrix.map((rowArr, rowIndex) => {
  //     if (rowIndex === row) {
  //       return rowArr.map((cellValue, columnIndex) => {
  //         if (columnIndex === column) {
  //           return parseInt(event.target.value, 10) || 0;
  //         }
  //         return cellValue;
  //       });
  //     }
  //     return rowArr;
  //   });
  //   setMatrix(newMatrix);
  // }

  // function handleMatrixSizeChange(event: React.ChangeEvent<HTMLInputElement>, dimension: string) {
  //   const newSize = parseInt(event.target.value, 10) || 0;
  //   setMatrixSize((prevState) => ({ ...prevState, [dimension]: newSize }));
  // }

  // const handleMatrixChange = (row: number, column: number, event: number) => {
  //   let copy = [...matrix];
  //   copy[row][column] = event.target.value;
  //   setMatrix(copy);

  //   console.log(matrix);
  // };

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
            <h1 className="text-lg font-bold my-5">
              Description
            </h1>
            <p>
              Returns the inverse matrix from a given matrix
            </p>
          </div>

          {/* Inputs */}
          <div className="bg-[#DCEFF0] p-5 mt-5">
            <h1 className="text-lg font-bold my-5">
              Inputs
            </h1>
            <div className="flex space-x-5">
              <p>
                Matrix size:
              </p>
              <input type="number" id="input" name="width" min="1" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="3" title="Enter a width" onChange={handleWidthChange} required/>
              {/* <Input type="number" rounded css={{ $$inputColor: "#ffffff" }} initialValue="3" title="Enter a width" shadow={false} required/> */}
              <p>
                X
              </p>
              <input type="number" id="input" name="height" min="1" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="3" title="Enter a length" onChange={handleHeightChange} required/>
            </div>
            {/* <p>
              Size: {matrixWidth} X {matrixHeight} Elements: {parseInt(matrixWidth) * parseInt(matrixHeight)}
            </p> */}
            < br/>
            <p>
              Enter your matrix
            </p>
            {/* <div className={"grid grid-rows-({matrixWidth}) grid-cols-{matrixHeight} gap-4 my-5"}> */}
            <div className={"grid grid-rows-3 grid-cols-3 gap-4 my-5"}>
              <input type="number" id="input" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="0" title="Enter a number" required/>
              <input type="number" id="input" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="0" title="Enter a number" required/>
              <input type="number" id="input" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="0" title="Enter a number" required/>
              <input type="number" id="input" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="0" title="Enter a number" required/>
              <input type="number" id="input" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="0" title="Enter a number" required/>
              <input type="number" id="input" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="0" title="Enter a number" required/>
              <input type="number" id="input" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="0" title="Enter a number" required/>
              <input type="number" id="input" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="0" title="Enter a number" required/>
              <input type="number" id="input" className="w-full max-w-20 bg-gray-100 rounded-xl p-2.5 text-black focus:bg-transparent focus:outline-none transform: transition duration-100 hover:bg-gray-50 hover:scale-105 motion-reduce:transform-none" placeholder="0" title="Enter a number" required/>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-[#AEECEF]/60 p-5">
            <h1 className="text-lg font-bold my-5">
              Solution
            </h1>
            <div className="grid grid-rows-3 grid-cols-3 gap-4 my-5">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
          </div>

          {/* Steps */}
          <div className="bg-[#AAEEEE]/80 p-5 mb-20">
            <h1 className="text-lg font-bold my-5">
              Steps
            </h1>
            <p>
              Use the formula
            </p>
          </div>
        </div>
        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl font-bold">
            Right Side
          </h1>
        </div>
      </div>
    </div>
//     <div>
//       <div>
//         <label>
//           Rows:
//           <input
//             type="number"
//             min={1}
//             value={matrixSize.rows}
//             onChange={(event) => handleMatrixSizeChange(event, "rows")}
//             style={{ width: "40px", margin: "5px" }}
//           />
//         </label>
//         <label>
//           Columns:
//           <input
//             type="number"
//             min={1}
//             value={matrixSize.columns}
//             onChange={(event) => handleMatrixSizeChange(event, "columns")}
//             style={{ width: "40px", margin: "5px" }}
//           />
//         </label>
//         <p>
//           {matrixSize.rows} x {matrixSize.columns}
//         </p>
//       </div>
//       {matrix.map((row, rowIndex) => (
//         <div key={rowIndex} style={{ display: "flex", flexDirection: "row" }}>
//           {row.map((cell, columnIndex) => (
//             <input
//               key={`${rowIndex}-${columnIndex}`}
//               type="number"
//               value={cell}
//               onChange={(event) => handleCellValueChange(event, rowIndex, columnIndex)}
//               style={{ width: "40px", margin: "5px" }}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
  );
}

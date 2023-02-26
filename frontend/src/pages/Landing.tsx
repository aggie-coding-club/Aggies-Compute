import React from 'react';
import { gauss_elimination } from '../algorithms/LinAlg/rref';
import 'mathjs';

var math = require('mathjs');
export default function Landing() {
  //// Testing Function Portablity. Remove this.
  const basic1: number[][] = [
    [1, 1, -1, 7],
    [1, -1, 2, 3],
    [2, 1, 1, 9]
  ];
  let matrixBasic1: math.Matrix = new math.matrix(basic1);

  let basic1_ref = gauss_elimination(matrixBasic1, false);
  let basic1_rref = gauss_elimination(matrixBasic1, true);
  console.log('matrix: ', basic1);
  console.log('matrix ref', basic1_ref);
  console.log('matrix rref', basic1_rref);

  return (
    <div>
      <p>Landing Page</p>
    </div>
  );
}

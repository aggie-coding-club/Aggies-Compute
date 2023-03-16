import React from 'react';
import { gauss_elimination } from '../algorithms/LinAlg/rref';
import { eigen_value_vector } from '../algorithms/LinAlg/eigen_value_vector';
import 'mathjs';
var math = require('mathjs');
export default function Landing() {
  console.log(eigen_value_vector());
  return (
    <div className="">
      <h1 className="underline text-red-600">landing page</h1>
    </div>
  );
}

import React from 'react';
import { gauss_elimination } from '../algorithms/LinAlg/rref';
import 'mathjs';

var math = require('mathjs');
export default function Landing() {
  return (
    <h1 className="text-3xl font-bold underline text-red-600">
      Simple React Typescript Tailwind Sample
    </h1>
  );
}

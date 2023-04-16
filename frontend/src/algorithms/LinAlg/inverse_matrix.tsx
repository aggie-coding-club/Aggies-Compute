import 'mathjs';
import { column } from 'mathjs';
var math = require('mathjs');
var nerdamer = require('nerdamer');

/**
 * Inverse Matrix
 *
 * @remark
 * Algorithm:
 *
 * @param size - a number of the size of the matrix with element of Number type,
 * @param matrixStr - a matrix in a comma seperated list with element of String type
 *
 * @returns - a string
 */

// Define a function that takes the number of rows, number of columns, and the matrix in string format as inputs
export default function inverse_matrix(
  size: number,
  matrixStr: string
): string[] {
  const matrixArr = matrixStr.split(',').map((val) => parseFloat(val));
  const matrix2D = [];
  for (let i = 0; i < matrixArr.length; i += size) {
    matrix2D.push(matrixArr.slice(i, i + size));
  }

  const det = math.det(matrix2D);

  if (det === 0) {
    return ['Cannot calculate the inverse of a matrix with a determinant of 0'];
  }

  const inverse = math.inv(matrix2D);

  let solution = [];
  solution.push(`Calculate the determinant of the matrix: ${det}`);

  const adjointMatrix = math.transpose(math.inv(math.transpose(matrix2D)));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const element = adjointMatrix[i][j];
      const frac = toFraction(element);
      solution.push(
        `Calculate the adjoint of the matrix element (${i + 1}, ${
          j + 1
        }): ${frac}`
      );
      solution.push(`Divide the adjoint by the determinant: ${frac}`);
      inverse[i][j] = frac;
      solution.push(
        `Replace the element in the inverse matrix with the result: ${inverse[i][j]}`
      );
    }
  }

  solution.push(inverse.map((row: string[]) => row.join(', ')).join('\n'));
  console.log(inverse.map((row: string[]) => row.join(', ')).join('\n'));

  return solution;
}

const toFraction = (value: number): string => {
  const MAX_DENOMINATOR = 10000;
  const tolerance = 1.0e-6;
  let numerator = 1;
  let denominator = 1;
  let i = 0;
  let j = 1;
  let error = Math.abs(numerator / denominator - value);
  while (i <= MAX_DENOMINATOR && error > tolerance) {
    i++;
    j = Math.round(value * i);
    error = Math.abs(j / i - value);
    if (error < tolerance) {
      numerator = j;
      denominator = i;
      break;
    }
    if (j / i < value) {
      if (Math.abs((j + 1) / (i + 1) - value) < error) {
        numerator = j + 1;
        denominator = i + 1;
      }
    } else if (Math.abs((j - 1) / (i - 1) - value) < error) {
      numerator = j - 1;
      denominator = i - 1;
    }
  }
  return denominator === 1
    ? numerator.toString()
    : `${numerator}/${denominator}`;
};

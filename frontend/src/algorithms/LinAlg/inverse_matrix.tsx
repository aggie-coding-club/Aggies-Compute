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
 * @param rows - a number with element of Number type,
 * @param columns - a number with element of Number type
 * @param matrixStr - a matrix with element of String type
 *
 * @returns - a string
 */

// Define a function that takes the number of rows, number of columns, and the matrix in string format as inputs
export default function inverse_matrix(
  rows: number,
  columns: number,
  matrixStr: string
): string[] {
  // Check if the matrix is square
  if (rows !== columns) {
    return ['Only square matrices are invertible'];
  }

  const elements = matrixStr.split(',').map(Number);
  const rowsArray: number[][] = [];
  for (let i = 0; i < rows; i++) {
    rowsArray.push(elements.slice(i * columns, (i + 1) * columns));
  }
  const matrix = rowsArray.map((row) => {
    if (row.length < columns) {
      return [...row, ...Array(columns - row.length).fill(undefined)];
    } else {
      return row;
    }
  });

  // Check if the correct number of rows and columns or number of elements were entered
  if (rows * columns !== elements.length) {
    return [
      "The number of rows and columns don't match the number of elements."
    ];
  }

  const steps: string[] = [];

  // Helper function to swap rows in the matrix
  function swapRows(row1: number, row2: number) {
    const temp = matrix[row1];
    matrix[row1] = matrix[row2];
    matrix[row2] = temp;
    steps.push(`Swap R${row1 + 1} and R${row2 + 1}`);
  }

  function multiplyRow(row: number, scalar: number) {
    if (matrix[row][row] === 0) {
      // Find a row with a nonzero pivot element and swap with the current row
      let newRow = row + 1;
      while (newRow < rows && matrix[newRow][row] === 0) {
        newRow++;
      }
      if (newRow === rows) {
        // No rows below the current row have a nonzero pivot element
        steps.push(`R${row + 1} is a zero row`);
        return;
      }
      swapRows(row, newRow);
    }
    matrix[row] = matrix[row].map((val) => val * scalar);
    steps.push(`Multiply R${row + 1} by ${scalar}`);
  }

  function addMultipleOfRow(row1: number, row2: number, scalar: number) {
    if (matrix[row1][row1] === 0) {
      // Find a row with a nonzero pivot element and swap with row1
      let newRow = row1 + 1;
      while (newRow < rows && matrix[newRow][row1] === 0) {
        newRow++;
      }
      if (newRow === rows) {
        // No rows below row1 have a nonzero pivot element
        steps.push(`R${row1 + 1} is a zero row`);
        return;
      }
      swapRows(row1, newRow);
    }
    matrix[row2] = matrix[row2].map(
      (val, col) => val + scalar * matrix[row1][col]
    );
    steps.push(`Add ${scalar} times R${row1 + 1} to R${row2 + 1}`);
  }

  // Perform Gaussian elimination
  for (let col = 0; col < columns; col++) {
    // Find the row with the maximum absolute value in the current column
    let maxRow = col;
    for (let row = col + 1; row < rows; row++) {
      if (Math.abs(matrix[row][col]) > Math.abs(matrix[maxRow][col])) {
        maxRow = row;
      }
    }

    // Swap rows to bring the maximum value to the top
    if (maxRow !== col) {
      swapRows(col, maxRow);
    }

    // Make the pivot element equal to 1
    const pivot = matrix[col][col];
    multiplyRow(col, 1 / pivot);

    // Eliminate the pivot element from other rows
    for (let row = 0; row < rows; row++) {
      if (row !== col) {
        const factor = -matrix[row][col];
        addMultipleOfRow(col, row, factor);
      }
    }
  }

  // Convert the resulting matrix to reduced row-echelon form (RREF)
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][col] = 0; // Set -0 to 0
      }
    }
  }

  // Convert the resulting matrix to a string array
  const inverseMatrix: string[] = [];
  for (let row = 0; row < rows; row++) {
    inverseMatrix.push(matrix[row].join(', '));
  }

  // Add steps to the inverseMatrix array
  inverseMatrix.unshift(...steps);

  return inverseMatrix;
}

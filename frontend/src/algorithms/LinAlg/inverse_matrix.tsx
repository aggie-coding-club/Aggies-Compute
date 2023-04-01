import 'mathjs';
var math = require('mathjs');

/**
 * Inverse Matrix
 *
 * @remark
 * Algorithm:
 *
 * @param mat - a matrix with element of Matrix type
 * @returns - a matrix with element of Matrix type
*/

export default function inverse_matrix(mat: math.Matrix): { result: math.Matrix, steps: string[] } {
  // const nRows = mat.size()[0];
  // const nCols = mat.size()[1];
  // const identityMat = math.identity(nRows);
  // let augmentedMat = math.concat(mat, identityMat, 1);
  let steps: string[] = [];

  // for (let pivotRow = 0; pivotRow < nRows; pivotRow++) {
  //   // Find the row with the largest absolute pivot element
  //   let largestPivot = math.abs(augmentedMat.get([pivotRow, pivotRow]));
  //   let largestPivotRow = pivotRow;
  //   for (let row = pivotRow + 1; row < nRows; row++) {
  //     let pivot = math.abs(augmentedMat.get([row, pivotRow]));
  //     if (pivot > largestPivot) {
  //       largestPivot = pivot;
  //       largestPivotRow = row;
  //     }
  //   }

  //   // Swap rows to put the largest pivot element in the pivot row
  //   if (largestPivotRow !== pivotRow) {
  //     augmentedMat.swapRows(largestPivotRow, pivotRow);
  //     steps.push(`Swap rows ${largestPivotRow + 1} and ${pivotRow + 1}`);
  //   }

  //   // Scale the pivot row so that the pivot element is 1
  //   const pivotElement = augmentedMat.get([pivotRow, pivotRow]);
  //   if (pivotElement !== 1) {
  //     augmentedMat.set([pivotRow, pivotRow], 1);
  //     for (let col = pivotRow + 1; col < nCols * 2; col++) {
  //       augmentedMat.set([pivotRow, col], augmentedMat.get([pivotRow, col]) / pivotElement);
  //     }
  //     steps.push(`Scale row ${pivotRow + 1} by ${1 / pivotElement}`);
  //   }

  //   // Use the pivot element to clear out all elements above and below it
  //   for (let row = 0; row < nRows; row++) {
  //     if (row === pivotRow) continue;
  //     const rowFactor = augmentedMat.get([row, pivotRow]);
  //     if (rowFactor === 0) continue;
  //     for (let col = pivotRow; col < nCols * 2; col++) {
  //       const newEntry = augmentedMat.get([row, col]) - rowFactor * augmentedMat.get([pivotRow, col]);
  //       augmentedMat.set([row, col], newEntry);
  //     }
  //     steps.push(`Add ${-rowFactor} times row ${pivotRow + 1} to row ${row + 1}`);
  //   }
  // }

  // // Check if the original matrix is invertible
  // const finalPivots = augmentedMat.subset(math.index(math.range(0, nRows), math.range(0, nRows))).diag();
  // const det = math.prod(finalPivots);
  // if (det === 0) {
  //   return { result: math.Matrix, steps: ["Matrix is not invertible"] };
  // }

  // // Extract the inverse matrix from the augmented matrix
  // const inverse = augmentedMat.subset(math.index(math.range(0, nRows), math.range(nCols, nCols * 2)));
  // steps.push("The inverse of the original matrix is:");
  // steps.push(math.format(inverse, { precision: 14 }));

  // return { result: inverse, steps: steps };
  return { result: math.matrix(), steps: steps}
}

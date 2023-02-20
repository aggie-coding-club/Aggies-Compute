import 'mathjs';
import { frac_mat_toString } from './helper_LinAlg';

/**
 * Guass-Jordan Elimination
 * Guass Jordan Elimination Method is used to obtian either
 * a row echelon form(ref) or reduced row echelon form (rref) matrix
 *
 * Algorithm:
 * 1. Determine Pivot Point
 *      pivote point: located at column = row
 *      if pivote is 0
 *          flip with rows below currnet row
 *          if all rows below are zero
 *            skip to next column
 *            pivote point of next column = row - (total skipped pivotes)
 *          else
 *            continue to 3.
 *     if pivote does not equal zero
 *        divide the column by pivote number
 * 2. Using Pivote reduce all rows below to 0
 *      multiple pivote row by -1 * currnet row value and add row to curent row
 * 3. Ensure if any 0,0,0,0 column then flip to bottom
 */
export function gauss_elimination(mat: math.Matrix, reduced: boolean) {
  mat = mat.map(function (value, index, matrix) {
    return math.fraction(value, 1);
  });

  let skip_pivote = 0;
  let pivote: number[] = [0, 0]; // [row, column]

  for (let column = 0; column < mat.size()[0]; ++column) {
    // find pivote of column
    pivote[0] = column - skip_pivote;
    pivote[1] = column;
    let pivote_value: math.Fraction = mat.get(pivote);

    let swapped: boolean = false;
    let check_skip: boolean = false;

    let replace_index: number[] = [];
    for (let i = 0; i < mat.size()[1]; ++i) {
      replace_index.push(i);
    }

    if (math.compare(pivote_value, math.Fraction(1)) == 0) {
      // pivote found
      continue;
    } else if (math.compare(pivote_value, math.Fraction(0)) == 0) {
      // attempt swaps, if possible create pivote
      for (let row = pivote[0] + 1; row < mat.size()[0]; ++row) {
        check_skip = true;
        if (mat.get([row, column]) != 0) {
          swapped = true;
          let row1 = math.row(mat, pivote[0]);
          let row2 = math.row(mat, row);
          mat.subset(math.index(pivote[0], replace_index), row2);
          mat.subset(math.index(row, replace_index), row1);
        }
      }
    } else {
      // Create Pivote
      let pivote_row = math.row(mat, pivote[0]);

      mat.subset(
        math.index(pivote[0], replace_index),
        math.multiply(
          pivote_row,
          math.Fraction(pivote_value.s * pivote_value.d, pivote_value.n)
        )
      );
    }
    if (check_skip && !swapped) {
      ++skip_pivote;
      continue;
    }
    console.log('after pivot created');
    frac_mat_toString(mat);
    // Reduce Row using Pivot
    let start = pivote[0] + 1;
    if (reduced) {
      start = 0;
    }
    for (let row = start; row < mat.size()[0]; ++row) {
      console.log(row, column);
      if (row == column) {
        continue;
      }
      let coeff: math.Fraction = math.multiply(
        math.fraction(-1),
        mat.get([row, column])
      );
      let pivote_row = math.row(mat, pivote[0]);
      let reduce_row = math.row(mat, row);

      mat.subset(
        math.index(row, replace_index),
        math.add(math.multiply(pivote_row, coeff), reduce_row)
      );
    }
  }
  return mat;
}

var math = require('mathjs');
// var fun: math.Fraction[][] = [
//   [math.fraction(1), math.fraction(1), math.fraction(-1), math.fraction(1)],
//   [math.fraction(3), math.fraction(6), math.fraction(9), math.fraction(1)],
//   [math.fraction(4), math.fraction(7), math.fraction(10), math.fraction(13)]
// ];

var fun: number[][] = [
  [1, 1, -1, 7],
  [1, -1, 2, 3],
  [2, 1, 1, 9]
];

var fun_matrix: math.Matrix = math.matrix(fun);
fun_matrix = gauss_elimination(fun_matrix, true);
console.log('final: ');
frac_mat_toString(fun_matrix);

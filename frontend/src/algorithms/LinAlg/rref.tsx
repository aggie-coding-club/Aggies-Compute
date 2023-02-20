import Math from 'mathjs';
// import { matrix } from './math';

/**
 * Guass-Jordan Elimination
 * Guass Jordan Elimination Method is used to obtian either
 * a row echelon form(ref) or reduced row echelon form (rref) matrix
 *
 * TODO:
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
  // var Fraction = require('fractional').Fraction;
  let skip_pivote = 0;
  let pivote: number[] = [0, 0]; // [row, column]

  for (var column = 0; column < mat.size()[0]; ++column) {
    // find pivote of column
    console.log('find pivote');
    pivote[0] = column - skip_pivote;
    pivote[1] = column;
    console.log(mat.size());
    console.log(column);
    let pivote_value: math.Fraction = mat.get(pivote);
    var swapped: boolean = false;
    var check_skip: boolean = false;
    let replace_list: number[] = [];
    for (let i = 0; i < mat.size()[1]; ++i) {
      replace_list.push(i);
    }
    console.log(math.compare(pivote_value, math.Fraction(1)) == 0);
    console.log(math.compare(pivote_value, math.Fraction(0)) == 0);
    if (math.compare(pivote_value, math.Fraction(1)) == 0) {
      console.log('pivote found');
      continue;
    } else if (math.compare(pivote_value, math.Fraction(0)) == 0) {
      // Attempt Swap, if possible create pivote
      for (var row = pivote[0] + 1; row < mat.size()[0]; ++row) {
        console.log('attemp swap pivote');
        check_skip = true;
        if (mat.get([row, column]) != 0) {
          swapped = true;
          let row1 = math.row(mat, pivote[0]);
          let row2 = math.row(mat, row);
          mat.subset(math.index(pivote[0], replace_list), row2);
          mat.subset(math.index(row, replace_list), row1);
        }
      }
    } else {
      // Create Pivote
      console.log('reduce pivote');
      let pivote_row = math.row(mat, pivote[0]);
      console.log(pivote_row._data);
      console.log(math.Fraction(pivote_value.d, pivote_value.n));
      console.log(
        math.multiply(pivote_row, math.Fraction(pivote_value.d, pivote_value.n))
      );
      mat.subset(
        math.index(pivote[0], replace_list),
        math.multiply(pivote_row, math.Fraction(pivote_value.d, pivote_value.n))
      );
    }
    console.log('done');

    if (check_skip && !swapped) {
      ++skip_pivote;
      continue;
    }

    // Reduce Row using Pivot
    let start = pivote[0] + 1;
    if (reduced) {
      start = 0;
    }
    console.log('begin row reducing');
    console.log(start);
    for (var row = start; row < mat.size()[0]; ++row) {
      console.log(row, column);
      if (row == column) {
        continue;
      }
      let coeff: math.Fraction = math.multiply(
        math.fraction(-1),
        mat.get([row, column])
      );
      console.log(coeff);
      let pivote_row = math.row(mat, pivote[0]);
      let reduce_row = math.row(mat, row);

      mat.subset(
        math.index(row, replace_list),
        math.add(math.multiply(pivote_row, coeff), reduce_row)
      );
    }
  }
  return mat;
}

var math = require('mathjs');
var fun: math.Fraction[][] = [
  [math.fraction(2), math.fraction(1), math.fraction(1), math.fraction(1)],
  [math.fraction(3), math.fraction(6), math.fraction(9), math.fraction(1)],
  [math.fraction(4), math.fraction(7), math.fraction(10), math.fraction(13)]
];

var fun_matrix: math.Matrix = math.matrix(fun);
fun_matrix = gauss_elimination(fun_matrix, true);
for (let i = 0; i < fun_matrix.size()[0]; ++i) {
  for (let j = 0; j < fun_matrix.size()[1]; ++j) {
    console.log(fun_matrix.get([i, j]), ', ');
  }
  console.log();
}

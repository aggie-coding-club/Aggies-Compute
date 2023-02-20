"use strict";
exports.__esModule = true;
require("mathjs");
var helper_LinAlg_1 = require("./helper_LinAlg");
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
function gauss_elimination(mat, reduced) {
    if (reduced === void 0) { reduced = true; }
    mat = mat.map(function (value, index, matrix) {
        return math.fraction(value, 1);
    });
    var skip_pivote = 0;
    var pivote = [0, 0]; // [row, column]
    for (var column = 0; column < mat.size()[0]; ++column) {
        // find pivote of column
        pivote[0] = column - skip_pivote;
        pivote[1] = column;
        var pivote_value = mat.get(pivote);
        var swapped = false;
        var check_skip = false;
        var replace_index = [];
        for (var i = 0; i < mat.size()[1]; ++i) {
            replace_index.push(i);
        }
        if (math.compare(pivote_value, math.Fraction(1)) == 0) {
            // pivote found
            continue;
        }
        else if (math.compare(pivote_value, math.Fraction(0)) == 0) {
            // attempt swaps, if possible create pivote
            for (var row = pivote[0] + 1; row < mat.size()[0]; ++row) {
                check_skip = true;
                if (mat.get([row, column]) != 0) {
                    swapped = true;
                    var row1 = math.row(mat, pivote[0]);
                    var row2 = math.row(mat, row);
                    mat.subset(math.index(pivote[0], replace_index), row2);
                    mat.subset(math.index(row, replace_index), row1);
                }
            }
        }
        else {
            // Create Pivote
            var pivote_row = math.row(mat, pivote[0]);
            mat.subset(math.index(pivote[0], replace_index), math.multiply(pivote_row, math.Fraction(pivote_value.s * pivote_value.d, pivote_value.n)));
        }
        if (check_skip && !swapped) {
            ++skip_pivote;
            continue;
        }
        // Reduce Row using Pivot
        var start = pivote[0] + 1;
        if (reduced) {
            start = 0;
        }
        for (var row = start; row < mat.size()[0]; ++row) {
            if (row == column) {
                continue;
            }
            var coeff = math.multiply(math.fraction(-1), mat.get([row, column]));
            var pivote_row = math.row(mat, pivote[0]);
            var reduce_row = math.row(mat, row);
            mat.subset(math.index(row, replace_index), math.add(math.multiply(pivote_row, coeff), reduce_row));
        }
    }
    return mat;
}
exports.gauss_elimination = gauss_elimination;
var math = require('mathjs');
var fun = [
    [1, 1, -1, 7],
    [1, -1, 2, 3],
    [2, 1, 1, 9]
];
var fun_matrix = math.matrix(fun);
fun_matrix = gauss_elimination(fun_matrix, false);
console.log('final: ');
helper_LinAlg_1.frac_mat_toString(fun_matrix);

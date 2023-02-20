"use strict";
exports.__esModule = true;
require("mathjs");
var math = require('mathjs');
function frac_mat_toString(mat) {
    var string_list = [];
    for (var i = 0; i < mat.size()[0]; ++i) {
        var str = '';
        for (var j = 0; j < mat.size()[1]; ++j) {
            var frac = mat.get([i, j]);
            if (frac.s < 0) {
                str += '-';
            }
            str += frac.n.toString();
            if (frac.d != 1) {
                str += '/' + frac.d.toString();
            }
            if (j != mat.size()[1] - 1) {
                str += ', ';
            }
        }
        console.log(str);
    }
    // return string_list;
}
exports.frac_mat_toString = frac_mat_toString;
// TODO: Row/column matrix operations
function matrix_OP(mat) {
    return mat;
}
exports.matrix_OP = matrix_OP;

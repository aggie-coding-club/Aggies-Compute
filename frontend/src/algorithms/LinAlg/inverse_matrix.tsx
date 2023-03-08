import 'mathjs';
import { frac_mat_toString } from './helper_LinAlg';

/**
 * Inverse Matrix
 *
 * @remark
 * Algorithm:
 *
 * @param mat - a matrix with element of Fraction Type
 * @returns - a matrix with element of Fraction Type
 */
var math = require('mathjs');

export function inverse_matrix(mat: math.Matrix) {
  return math.inv(mat);
}

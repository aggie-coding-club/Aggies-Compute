import 'mathjs';
import { frac_mat_toString } from './helper_LinAlg';


/**
 * Methods to find determinant
 *  For 2x2:
 *      ac-bd
 *  For 3x3:
 *      Diagnol method
 *      Co-factor Expansion
 *  For nxn:
 *      Co-factor Expansion
 * 
 * Algorithm:
 *  Diagnol method:
 *      1. (a11)(a22)(a33)+(a12)(a23)(a31)+(a13)(a21)(a32)
 *          -(a31)(a22)(a13)-(a32)(a23)(a11)-(a33)(a21)(a12)
 *  Co-factor nxn:
 *      1. Determine row or column with most zeroes
 *      2. Set pivot on that row/column
 *      3. If row/column is odd, start with +
 *            If row/column is even, start with -
 *      4. 1) Loop rows, skip pivot row
 *         2) Loop columns, skip pivot column
 *         Create a new matrix from resultant values
 *      5. 
 */

//const matrix = [[1, 2], [3, 4]];
var math = require('mathjs');

export function det_2_by_2(mat: math.Matrix) {
    let det : number;
    det = mat.get([0, 0])*mat.get([1,1])-mat.get([0,1])*mat.get([1,0]);
    return det;
  }

function det_3_by_3(mat: math.Matrix) {
    let det : number;
    det = mat.get([0,0])*mat.get([1,1])*mat.get([2,2])+mat.get([0,1])*mat.get([1,2])*mat.get([2,0])
        +mat.get([0,2])*mat.get([1,0])*mat.get([2,1])-mat.get([2,0])*mat.get([1,1])*mat.get([0,2])
        -mat.get([2,1])*mat.get([1,2])*mat.get([0,0])-mat.get([2,2])*mat.get([1,0])*mat.get([0,1]);
    return det;
  }

function cofactor(mat: math.Matrix){
  //expand along first row
  for (let i = 0; i < mat.size()[1]; ++i) {
    replace_index.push(i);
  }
}


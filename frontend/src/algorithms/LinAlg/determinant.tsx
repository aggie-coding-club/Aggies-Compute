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

function minor_matrix(matrix: math.Matrix, row: number, column: number){
    const n = matrix.size()[0];

    //unsure how to implement push with math.Matrix type
    //for now set to any
    let new_matrix : any;

    for(let i = 0; i < n; i++){
        if(i != row){
            let new_row = [];
            for(let j = 0; j < n; j++){
                if(j != column){
                    new_row.push(matrix.get([i,j]));
                }
            }
            new_matrix.push(new_row);
        }
    }
    return new_matrix;
}
//co-factor expanding along first row
function cofactor(mat: math.Matrix){
    let n = mat.size()[0];
    //sum
    let sum = 0;
    //set i as the row to expand on
    let i = 0;
    //loop through each column
    for(let j = 0; j < n; j++){
        let minor = minor_matrix(mat, i, j);
        if(minor.size()[0] == 2){
            let det = det_2_by_2(minor);
            sum+=det*mat.get([0,j]);
        }
        else{
            cofactor(minor);
        }
    }
}


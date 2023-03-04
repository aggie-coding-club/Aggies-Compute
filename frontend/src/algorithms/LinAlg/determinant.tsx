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
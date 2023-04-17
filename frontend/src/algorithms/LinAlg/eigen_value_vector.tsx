import 'mathjs';
import { format } from 'path';
import { matrix_NerdToJS, matrix_nul, determinant_variables } from './helper_LinAlg';
var math = require('mathjs');
const nerdamer = require('nerdamer/all.min');

export function eigen_value_vector(mat: string, mat_var: string) {

  let mat_size = mat.split("]").length - 1;
  let format_matrix = ""
  // var format_matrix = "matrix("

  let start: boolean = true;
  let count: number = 0;
  let row_count: number = 0;
  let is_neg: boolean = false;

  for (let i = 0; i < mat.length; ++i) {
    if (start === true) {
      format_matrix += "[";
      start = false;
      count = 0;
    }

    if (mat.at(i) === '-') {
      is_neg = true;
      continue;
    }

    // checks if the character is a number
    if (Number(mat.at(i)) || Number(mat.at(i)) === 0) {
      if (is_neg) {
        format_matrix += '-';
        is_neg = false;
      }
      format_matrix += mat.at(i)
      if (count === row_count) {
        format_matrix += '-x';
      }
      if (count != mat_size - 1) {
        format_matrix += ',';
      }
      count++;
    }

    if (mat.at(i) === ']') {
      format_matrix += "]";
      start = true;
      if (row_count != mat_size - 1) {
        format_matrix += ",";
      } else {
        // format_matrix += ')';
        break;
      }
      row_count++;
    }
  }

  nerdamer.setVar('M', 'matrix(' + format_matrix + ')');

  // FIXME: Incorrect determinant calculation 
  let deter = nerdamer('determinant(M)');
  let eigen_value = nerdamer('solve(' + deter.toString() + ', ' + mat_var + ')');

  let eigen_value_list: number[] = [];
  for (let i = 0; i < eigen_value.symbol.elements.length; ++i) {
    eigen_value_list.push(Number(eigen_value.symbol.elements[i].multiplier));
  }

  var nulSpans: Number[][][] = [];
  for (let i = 0; i < eigen_value_list.length; ++i) {
    let sub_eigen_mat = format_matrix.replaceAll(mat_var, eigen_value_list[i].toString());
    nerdamer.setVar('N', 'matrix(' + sub_eigen_mat + ')');
    sub_eigen_mat = nerdamer('N').toString()

    let mat_JS: math.Matrix = matrix_NerdToJS(sub_eigen_mat);
    let nulSpan: Number[][] = matrix_nul(mat_JS);
    nulSpans.push(nulSpan);
  }

  console.log(nulSpans);
  let valid_eigen_values: Number[] = [];
  let valid_eigen_vectors: Number[][][] = [];
  for (let i = 0; i < nulSpans.length; ++i) {
    if (nulSpans[i].length != 0) {
      valid_eigen_values.push(eigen_value_list[i]);
      let span: Number[][] = nulSpans[i];
      valid_eigen_vectors.push(span);
    }
  }
  return [valid_eigen_values, valid_eigen_vectors];
}

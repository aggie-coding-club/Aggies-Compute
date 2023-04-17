import 'mathjs';
var math = require('mathjs');
const nerdamer = require('nerdamer/all.min');

export function eigen_value_vector(mat: string, mat_var: string) {

  var mat_size = mat.split("]").length - 1;
  var format_matrix = "matrix("

  var start: boolean = true;
  var count: number = 0;
  var row_count: number = 0;
  for (let i = 0; i < mat.length; ++i) {
    if (start === true) {
      format_matrix += "[";
      start = false;
      count = 0;
    }

    console.log(mat.at(i))
    if (Number(mat.at(i)) || Number(mat.at(i)) === 0) {
      console.log(mat.at(i))

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
        format_matrix += ')';
        break;
      }
      row_count++;
    }
  }
  console.log(format_matrix)

  nerdamer.setVar('M', format_matrix);
  let deter = nerdamer('determinant(M)');
  console.log(deter.toString());
  let eigen_value = nerdamer('solve(' + deter.toString() + ', ' + mat_var + ')');
  console.log(eigen_value.toString());
}

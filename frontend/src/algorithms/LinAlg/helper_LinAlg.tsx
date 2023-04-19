import 'mathjs';
var math = require('mathjs');

export function frac_mat_toString(mat: math.Matrix) {
  var string_list: string[] = [];
  for (let i = 0; i < mat.size()[0]; ++i) {
    let str: string = '';
    for (let j = 0; j < mat.size()[1]; ++j) {
      let frac: math.Fraction = mat.get([i, j]);
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


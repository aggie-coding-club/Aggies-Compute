import 'mathjs';
import { gauss_elimination } from './rref';
import { column } from 'mathjs';
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
}

export function matrix_NerdToJS(mat_nerd: string) {
  let ncol: number = 0;
  for (let i = 0; i < mat_nerd.length; ++i) {
    if (Number(mat_nerd.at(i)) || Number(mat_nerd.at(i)) === 0) {
      ncol++;
    }
    if (mat_nerd.at(i) === ']') {
      break;
    }
  }

  let replace_index: number[] = [];
  for (let i = 0; i < ncol; ++i) {
    replace_index.push(i);
  }


  let mat_JS = math.matrix();
  let start: boolean = true;
  let count: number = 0;
  let mat_JS_row: number[] = [];
  let row_count: number = 0;
  let is_neg: boolean = false;

  for (let i = 0; i < mat_nerd.length; ++i) {
    if (mat_nerd.at(i) === '-') {
      is_neg = true;
      continue;
    }

    // checks if the character is a number
    if (Number(mat_nerd.at(i)) || Number(mat_nerd.at(i)) === 0) {
      if (is_neg) {
        mat_JS_row.push(-Number(mat_nerd.at(i)));
        is_neg = false;
      } else {
        mat_JS_row.push(Number(mat_nerd.at(i)));
      }
      count++;
    }

    if (mat_nerd.at(i) === ']') {
      start = true;
      mat_JS.subset(math.index(row_count, replace_index), mat_JS_row);
      row_count++;
      count = 0;
      mat_JS_row = [];
    }
  }
  return mat_JS;
}

export function determinant_variables(mat: string) {
  // TODO: implement
  return '';
}


export function matrix_nul(mat: math.Matrix) {
  let reduced: math.Matrix = gauss_elimination(mat);
  reduced = reduced.map(function (value) {
    return math.number(value);
  });
  let free_variables: number[] = [];
  let free_variable_count: number = 0;
  // initlize loop and determine location of free variables
  for (let column = 0; column < reduced.size()[0]; ++column) {
    for (let row = 0; row < reduced.size()[1]; ++row) {
      if (row === column + free_variable_count) {
        if (reduced.get([row, column + free_variable_count]) != 1) {
          free_variables.push(column);
          ++free_variable_count;
          break;
        }
      }
    }
  }
  let nul_span: number[][] = [];
  for (let col = 0; col < reduced.size()[1]; ++col) {
    if (free_variables.indexOf(col) === -1) {
      continue
    }
    let span: number[] = [];
    for (let i = 0; i < reduced.size()[0]; ++i) {
      if (free_variables.indexOf(i) > -1) {
        if (i === col) {
          span.push(1);
        } else {
          span.push(0);
        }
        continue
      }
      span.push(-reduced.get([i, col]));
    }
    nul_span.push(span);
  }
  return nul_span;
}


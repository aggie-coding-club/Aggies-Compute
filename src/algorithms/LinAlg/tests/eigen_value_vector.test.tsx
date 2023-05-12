import { eigen_value_vector } from '../eigen_value_vector';
import 'mathjs';

var math = require('mathjs');

test('eigen_value_vector1: ', () => {
  let mat: string = '[2,-8],[1,-4]';
  let mat_var: string = 'x';
  let ans = eigen_value_vector(mat, mat_var)
  console.log(ans[0])
  console.log(ans[1]);
});

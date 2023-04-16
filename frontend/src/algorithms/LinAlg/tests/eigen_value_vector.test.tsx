import { eigen_value_vector } from '../eigen_value_vector';
import 'mathjs';

var math = require('mathjs');

test('eigen_value_vector1: ', () => {
  let mat: string = '[1,2],[0,3]';
  let mat_var: string = 'x';
  eigen_value_vector(mat, mat_var);
});

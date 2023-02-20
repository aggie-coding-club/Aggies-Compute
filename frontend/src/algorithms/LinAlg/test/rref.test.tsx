import { gauss_elimination } from '../rref';
import 'mathjs';
import { frac_mat_toString } from '../helper_LinAlg';

var math = require('mathjs');

test('matrix_basic_1: ', () => {
  const basic1: number[][] = [
    [1, 1, -1, 7],
    [1, -1, 2, 3],
    [2, 1, 1, 9]
  ];
  const basic1_result: math.Fraction[][] = [
    [math.fraction(1), math.fraction(0), math.fraction(0), math.fraction(6)],
    [math.fraction(0), math.fraction(1), math.fraction(0), math.fraction(-1)],
    [math.fraction(0), math.fraction(0), math.fraction(1), math.fraction(-2)]
  ];
  const matrixBasic1: math.Matrix = math.matrix(basic1);
  const matrixBasic1_result: math.Matrix = math.matrix(basic1_result);

  let actual_matrix: math.Matrix = gauss_elimination(matrixBasic1, true);

  for (let i = 0; i < actual_matrix.size()[0]; ++i) {
    for (let j = 0; j < actual_matrix.size()[1]; ++j) {
      expect(actual_matrix.get([i, j]).s).toStrictEqual(
        matrixBasic1_result.get([i, j]).s
      );
      expect(actual_matrix.get([i, j]).d).toStrictEqual(
        matrixBasic1_result.get([i, j]).d
      );
      expect(actual_matrix.get([i, j]).n).toStrictEqual(
        matrixBasic1_result.get([i, j]).n
      );
    }
  }
});

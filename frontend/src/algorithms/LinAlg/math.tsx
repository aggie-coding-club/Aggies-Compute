export class matrix {
  mat: number[][];

  constructor(mat: number[][]) {
    this.mat = mat;
  }

  mult_row(mat: number[][], row: number, value: number) {
    for (var column = 0; column < mat.length; ++column) {
      mat[row][column] = mat[row][column] * value;
    }
    return mat;
  }

  swap_row(mat: number[][], row1: number, row2: number) {
    for (var column = 0; column < mat.length; ++column) {
      let temp = mat[row1][column];
      mat[row1][column] = mat[row2][column];
      mat[row2][column] = temp;
    }
    return mat;
  }

  //   row1 + row2 -> row1
  add_row(row1: number[], row2: number[]) {
    for (var column = 0; column < row1.length; ++column) {
      let temp = row1[column] + row2[column];
      row1[column] = temp;
    }
    return row1;
  }
}

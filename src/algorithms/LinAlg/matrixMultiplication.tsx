
/**Check if inner dimensions are the same
 *      Loop through the rows of matrix a ---> i
 *       Loop through the colums of matrix b ---> j
 *        Loop through each value in the colum of matrix b --->k
 *        Multiply the values of matrix a[i][k] * b[k][j]
 *          sum all the products for each row and colum
 *              Pushing that value to an empty row 
 * 
 * @param a First Matrix
 * @param b Second Matrix
 * @returns A new Matrix with the outer diemnsions of a & b
 */
export function multiply(a:any , b :any)
{
if (a[0].length != b.length)
{
    return "Cannot multiply these matrices"
}
else
{
  //Resultant matirx to be returned
  let matrix   = []
  //The sum for each row and colum multiplication
  let sum : number

  for (let i = 0;i <a.length;i++)
  {
    //Empty row to store the row * colum values for each row of matrix a
    let d : number[] = []
    for (let j =0;j<b[0].length;j++)
    {
        sum = 0
        for(let k = 0;k<b.length;k++)
        {
            sum += a[i][k] * b[k][j]  
        }
        d.push(sum)
    }
    //Pushing that row to the resultant matrix
    matrix.push(d)
  }
return matrix
}
}

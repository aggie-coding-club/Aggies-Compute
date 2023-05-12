import 'mathjs'
/**
 * Check if the matrices are of same dimension
 * if not then return "Matrices must be same dimensions"
 * if they are then create new matrix to store sums of each index
 *   for loop through each the of the indicies 
 *       add the values at the current index
 *       append that value to empty array to represent the row of new matrix
 *       Push the row to the final matrix , at the end of adding
 * @param a The first Matrix(Array of Arrays)
 * @param b The second Matrix(Array of Arrays
 * Same logic applies to subtract just minus instead of adding
 */

export function add(a:any,b:any)
{
//checking diemensions are the same 
if(a.length == b.length && a[0].length == b[0].length)
{
    //The sum matrix
    let final = []
    //Looping throug the row
    for(let i = 0 ;i <a.length ;i++)
    {
        //Adding each values of Matrix a & b going row by row
            let row = []
            //Looping through the colums
            for(let j = 0; j < a[0].length;j++)
            {
            //Appending each value to the row
            row.push(a[i][j]+b[i][j])
            }
            //Appending the summed row to the final matrix
            final.push(row)
    }
return final
}
else
{
    return "Matrices must have the same diemensions!"
}
}


export function subtract(a:any,b:any)
{
//checking diemensions are the same 
if(a.length == b.length && a[0].length == b[0].length)
{
    //The sum matrix
    let final = []
    //Looping throug the row
    for(let i = 0 ;i <a.length ;i++)
    {
        //Subtracting each values of Matrix a & b going row by row
            let row = []
            //Looping through the colums
            for(let j = 0; j < a[0].length;j++)
            {
            //Appending each value to the row
            row.push(a[i][j]-b[i][j])
            }
            //Appending the difference row to the final matrix
            final.push(row)
    }
return final
}
else
{
    return "Matrices must have the same diemensions!"
}
}

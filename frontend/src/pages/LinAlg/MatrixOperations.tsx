import { text } from 'body-parser';
import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinalg from '../../components/SidebarLinAlg';
import { multiply } from '../../algorithms/LinAlg/matrixMultiplication';
import { add,subtract } from '../../algorithms/LinAlg/addSubMatrix';
export{}




//Function to create an empty matrix based off rows and cols
function makeMatrix(row:any, col:any)
{

let Matrix = new Array(row).fill(0).map(() => new Array(col).fill(0));
  return Matrix
}

//Create an Object to represent the rows , cols
class DMatrix{
    //PIVS
    rows: number;
    cols: number;
    values: number[][];
   //Instantiation
    constructor(rows:any,cols:any,matrix? :number[][])
    {
      this.rows=rows
      this.cols=cols
      if(matrix == null)
      {
      this.values = makeMatrix(this.rows,this.cols)
      }
      else{
    
        this.values =matrix
      }
    }
    toString()
    {
      return `rows: ${this.rows}`
    }
    getValue()
    {
      return this.values
    }
    transferVals(prev : number[][])
  {
    const Rowlimit = Math.min(prev.length,this.values.length)
    const Collimt = Math.min(prev[0].length,this.values[0].length)
    for (let i=0;i<Rowlimit;i++)
      {
        for(let j =0;j<Collimt;j++)
          {
            this.values[i][j] = prev[i][j]
          }
      }
  }
  }
//Creating the Component that renders the elements of the given Matrix
function Divmatrix(props:any)
{   const handleInput = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const value = parseInt(e.target.value);
    props.onInputChange(row, col, value);
  };
    
    
    const stuff2:any =[]
    for(let i=0;i<props.rows;i++)
    {
        for(let j =0;j<props.cols;j++)
        {
            stuff2.push(<div > 
                <input 
                className='bg-blue-300 w-7 rounded text-center 
            appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none[&::-webkit-inner-spin-button]:appearance-none ' 
                type = "number"
                defaultValue={props.matrix[i][j]}
                key={`${i}-${j}`}
                onChange={(e) => handleInput(e, i, j)}
                ></input>
            </div>)
        }
    }
 if     (props.cols ===2){return(<div className='grid grid-cols-2 gap-3 max-h-[20%]'> {stuff2} </div>)}
 else if(props.cols=== 3){return(<div className='grid grid-cols-3 gap-3 max-h-[20%]'> {stuff2}</div>) }
 else if(props.cols=== 4){return(<div className='grid grid-cols-4 gap-3 max-h-[20%]'> {stuff2}</div>) }
 else if(props.cols=== 5){return(<div className='grid grid-cols-5 gap-3 max-h-[20%]'> {stuff2}</div>) }
 else if(props.cols=== 6){return(<div className='grid grid-cols-6 gap-3 max-h-[20%]'> {stuff2}</div>) }
 else {return stuff2}
  
}
function ShowResult(props:any)
{
  if(props.matrix != null && props.show ==true)
  {
    const stuff2:any =[]
    for(let i=0;i<props.matrix.length;i++)
    {
        for(let j =0;j<props.matrix[0].length;j++)
        {
            stuff2.push(<div className='bg-blue-300 w-7 rounded text-center 
            appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none[&::-webkit-inner-spin-button]:appearance-none ' 
                defaultValue={props.matrix[i][j]}> 
                      </div>)
        }
    }
    if     (props.matrix[0].length ===2){return(<div className='grid grid-cols-2 gap-3 max-h-[20%]'> {stuff2} </div>)}
 else if(props.matrix[0].length ===3){return(<div className='grid grid-cols-3 gap-3 max-h-[20%]'> {stuff2}</div>) }
 else if(props.matrix[0].length ===4){return(<div className='grid grid-cols-4 gap-3 max-h-[20%]'> {stuff2}</div>) }
 else if(props.matrix[0].length ===5){return(<div className='grid grid-cols-5 gap-3 max-h-[20%]'> {stuff2}</div>) }
 else if(props.matrix[0].length ===6){return(<div className='grid grid-cols-6 gap-3 max-h-[20%]'> {stuff2}</div>) }
 else {return stuff2}
  }

}




export default function MatrixOperation()

{   
    let [Matrixrow,setRow] =useState(3)
    let [Matrixcol , setCol] = useState(3)
    let [matrixA,setMatrix] = useState(new DMatrix(Matrixrow,Matrixcol))
    let [MatrixrowB,setRowB] =useState(3)
    let [MatrixcolB , setColB] = useState(3)
    let [matrixB,setMatrixB] = useState(new DMatrix(MatrixrowB,MatrixcolB))
    let [see, setSee] =useState(false)

      const handleClick = (e:any) =>
      {
        setSee(true)
      }

    const handleRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const a =Number(e.target.value)
      const newRows = parseInt(e.target.value)
        if(newRows > 6)
        { setRow(6)}
        else {setRow(newRows)}
        if(newRows < 2){ setRow(2)}
        else {setRow(newRows)}
        const b = new DMatrix(newRows, Matrixcol)
        //Tranfer that values from the previous matrix(that fit) to the new one
        b.transferVals(matrixA.values)
        setMatrix(b); 
      };
    const handleColChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if(e.target.value =="NaN")
      {setCol(2)}
      const newCols = parseInt(e.target.value)
      if(newCols > 6){ setCol(6)}
      else {setCol(newCols)}
      if(newCols < 2){ setCol(2)}
      else {setCol(newCols)}
      const b =new DMatrix(Matrixrow, newCols)
      b.transferVals(matrixA.values)
      setMatrix(b);
      };
      const handleInputChange = (row: number, col: number, value: number) => { 

      let NewMatrix: number[][] = new Array(matrixA.rows).fill(0).map(() => new Array(matrixA.cols).fill(0));
      for(let i =0;i<matrixA.rows;i++)
        {
          for(let j=0;j<matrixA.cols;j++)
            { 
              NewMatrix[i][j]=matrixA.values[i][j]
            }
        }
        console.log("After",NewMatrix)
        NewMatrix[row][col] = value;
        const newMatrixA = new DMatrix(Matrixrow, Matrixcol,NewMatrix);
        setMatrix(newMatrixA);
      }
      
      const handleRowChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
        const a =Number(e.target.value)
        const newRows = parseInt(e.target.value)
          if(newRows > 6)
          { setRowB(6)}
          else {setRowB(newRows)}
          if(newRows < 2){ setRowB(2)}
          else {setRowB(newRows)}
          const b = new DMatrix(newRows, MatrixcolB)
          //Tranfer that values from the previous matrix(that fit) to the new one
          b.transferVals(matrixB.values)
          setMatrixB(b); 
      };
      const handleColChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value =="NaN")
      {setColB(2)}
      const newCols = parseInt(e.target.value)
      if(newCols > 6){ setColB(6)}
      else {setColB(newCols)}
      if(newCols < 2){ setColB(2)}
      else {setColB(newCols)}
      const b =new DMatrix(MatrixrowB, newCols)
      b.transferVals(matrixB.values)
      setMatrixB(b);
      };
       
      const handleInputChangeB = (row: number, col: number, value: number) => { 

        let NewMatrix: number[][] = new Array(matrixB.rows).fill(0).map(() => new Array(matrixB.cols).fill(0));
        for(let i =0;i<matrixB.rows;i++)
          {
            for(let j=0;j<matrixB.cols;j++)
              { 
                NewMatrix[i][j]=matrixB.values[i][j]
              }
          }
          console.log("After",NewMatrix)
          NewMatrix[row][col] = value;
          const newMatrixB = new DMatrix(MatrixrowB, MatrixcolB,NewMatrix);
          setMatrixB(newMatrixB);
        }
      

    
    return(
    <div> 
        <Navbar isLanding = {false}/> 
        <div className='flex'>
            <SidebarLinalg/>
            <div className='flex flex-col w-[60%] mt-20'>
            {/* Title */}
                <div className='flex items-center justify-center'>
                    <p className='text-xl font-bold'>Matrix Operations</p>
                </div>
            {/*Filler for now bruh */}
            <h1 className='font-bold text-xl mb-5'>Description</h1>
                <p className='mb-5'>
                In order to add or subtract matrices (A and B) , the diemsion and rows of A and B
                must match.For multuplication the colums of matrix A must match the rows of C. 
                </p>
            <h2 className='font-bold text-xl'> Inputs</h2>
            {/**'grid grid-flow-row lg:grid-cols-2 gap-2 text-center ' */}
            <div className='grid grid-flow-row lg:grid-cols-2 gap-2 text-center '> 
                {/* 2 Colums that contain a single colum */}

                {/* Each colum has 2 elements (The size inputs , the matrix ) */}
                <div className='grid grid-flow-row place-items-center max-h-[20%] '> 
                    {/* Input boxes split into 3 cols */}
                    <div className='grid grid-cols-3  mb-2 w-[20%] '>
                        {/*Matrix A */}
                        <input className='  text-center bg-gray-400 rounded ' min ="2"max ='6' type ='number'value={Matrixrow} onChange={handleRowChange}></input>
                        <div className=' text-center'> x </div>
                        <input className='text-center bg-gray-400 rounded' min ="2" max ={6}type ='number' value={Matrixcol} onChange={handleColChange}></input>
                    </div>
                    <div>
                    <Divmatrix matrix ={matrixA.values} rows= {Matrixrow} cols ={Matrixcol} onInputChange ={handleInputChange}></Divmatrix>
                    </div>
                    <div>
                    {matrixA.getValue()}
                    </div>
                </div>
                <div className='grid grid-flow-row place-items-center max-h-[20%]'> 
                    {/* Input boxes split into 3 cols */}
                    <div className='grid grid-cols-3  mb-2 w-[20%] '>
                        {/*Matrix B */}
                        <input className='  text-center bg-gray-400 rounded ' min ="2"max ='6' type ='number'value={MatrixrowB} onChange={handleRowChangeB}></input>
                        <div className=' text-center'> x </div>
                        <input className='text-center bg-gray-400 rounded' min ="2" max ="6" type ='number' value={MatrixcolB} onChange={handleColChangeB}></input>
                    </div>
                    <div>
                    <Divmatrix matrix ={matrixB.values} rows= {MatrixrowB} cols ={MatrixcolB} onInputChange ={handleInputChangeB}></Divmatrix>
                    </div>
                    <div> 
                    {matrixB.getValue()}
                    </div>
                </div>
                  
            </div>
                {/*The grid to contain the two matrices  */}
            <button className='bg-blue-300 w-fit rounded ' onClick={handleClick}>Calculate</button>
            {multiply(matrixA.values,matrixB.values)}
            <h3 className='font-bold text-xl'> Solution</h3>
           <div>
            
            { <ShowResult martrix={multiply(matrixA.values,matrixB.values)} show ={see}></ShowResult>}
            </div>
            </div>
        {/* This is the right sidebar for something*/}
        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl font-bold"> Right Side</h1>
        </div>
        </div>
        
    </div>
    )
}
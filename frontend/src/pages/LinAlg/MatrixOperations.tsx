import { text } from 'body-parser';
import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinalg from '../../components/SidebarLinAlg';

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
    transferVals()
    {
      let tem=0
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
                defaultValue={0}
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




export default function MatrixOperation()

{   
    let [Matrixrow,setRow] =useState(3)
    let [Matrixcol , setCol] = useState(3)
    let [matrixA,setMatrix] = useState(new DMatrix(Matrixrow,Matrixcol))

    const handleRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value =="")
        {setRow(2)}
        const newRows = parseInt(e.target.value)
        if(newRows > 6)
        { setRow(6)}
        else {setRow(newRows)}
        if(newRows < 2){ setRow(2)}
        else {setRow(newRows)}
        const b = new DMatrix(newRows, Matrixcol)
        setMatrix(b);
      };
    const handleColChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value =="")
        {setCol(2)}
        const newCols = parseInt(e.target.value)
        if(newCols > 6){ setCol(6)}
        else {setCol(newCols)}
        if(newCols < 2){ setCol(2)}
        else {setCol(newCols)}
        const b =new DMatrix(Matrixrow, newCols)
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
                        <input className='  text-center bg-gray-400 rounded ' max ='6' type ='number'value={Matrixrow} onChange={handleRowChange}></input>
                        <div className=' text-center'> x </div>
                        <input className='text-center bg-gray-400 rounded' max ={6}type ='number' value={Matrixcol} onChange={handleColChange}></input>
                    </div>
                    <div>
                    <Divmatrix matrix ={matrixA.values} rows= {Matrixrow} cols ={Matrixcol} onInputChange ={handleInputChange}></Divmatrix>
                    </div>
                    <div>
                    {matrixA.getValue()}
                    </div>
                </div>
                <div className='grid grid-flow-row place-items-center '> 
                    {/* Input boxes split into 3 cols */}
                    <div className='grid grid-cols-3  mb-2 w-[20%] '>
                        {/*Matrix B */}
                        <input className='  text-center bg-gray-400 rounded ' type="number" value={Matrixrow} ></input>
                        <div className=' text-center'> x </div>
                        <input className='text-center bg-gray-400 rounded'></input>
                    </div>
                    <div> 
                    {'Placeholder for the second matrix'}
                    </div>
                </div>
                    
            </div>
                {/*The grid to contain the two matrices  */}
                <div className='grid grid-cols-2 gap-10 text-center'>
                    {/* Matrix A */}
                    
                

                </div>
            <div className='bg-black w-100'></div>
            <h3 className='font-bold text-xl'> Solution</h3>
            </div>
        {/* This is the right sidebar for something*/}
        <div className="flex bg-[#DEDEDE] w-[20%] m-16 items-center justify-center">
          <h1 className="text-xl font-bold"> Right Side</h1>
        </div>
        </div>
        
    </div>
    )
}
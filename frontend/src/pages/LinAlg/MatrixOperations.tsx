import { text } from 'body-parser';
import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinalg from '../../components/SidebarLinAlg';

export{}
function Items(a : number)
{
 let elements  = []
 for(let i =0 ;i<a;i++)
 {
    elements.push(<div > 
        <input 
        className='bg-blue-300 w-7 rounded text-center appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ' 
        type = "number"
        ></input>
    </div>)
 }
 return elements
}

function Matrix(rows:number , cols : number)
{
    if( cols === 2)
    {
        return(
            <div className='grid grid-cols-2 gap-3 max-h-[20%]'> 
                {Items(rows * cols)}
            </div>
        )
    }
    else if (cols === 3)
    {
        return(
            <div className='grid grid-cols-3 gap-3 max-h-[20%]'>
                {Items(rows * cols)}
            </div>
        )
    }
    else if (cols === 4)
    {
        return(
            <div className='grid grid-cols-4 gap-3 max-h-[20%]' >
                {Items(rows * cols)}
            </div>
        )
    }
    else if (cols === 5)
    {
        return(
            <div  className='grid grid-cols-5 gap-3 max-h-[20%]' >
                {Items(rows * cols)}
            </div>
        )
    }
    else if (cols === 6)
    {
        return(
            <div className='grid grid-cols-6 gap-3 max-h-[20%] min-w-min'>
                {Items(rows * cols)}
            </div>
        )
    }
}

export default function MatrixOperation()
{
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
                        <input className='  text-center bg-gray-400 rounded '></input>
                        <div className=' text-center'> x </div>
                        <input className='text-center bg-gray-400 rounded'></input>
                    </div>
                    <div>
                    {Matrix(6,6)}
                    </div>
                </div>
                <div className='grid grid-flow-row place-items-center '> 
                    {/* Input boxes split into 3 cols */}
                    <div className='grid grid-cols-3  mb-2 w-[20%] '>
                        {/*Matrix B */}
                        <input className='  text-center bg-gray-400 rounded '></input>
                        <div className=' text-center'> x </div>
                        <input className='text-center bg-gray-400 rounded'></input>
                    </div>
                    <div>
                    {Matrix(6,6)}
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

import { text } from 'body-parser';
import React from 'react';
import Navbar from '../../components/Navbar';
import SidebarLinalg from '../../components/SidebarLinAlg';

export{}

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
                <div className='grid grid-cols-2 gap-10 text-center'>
                    <div>3 x 3</div>
                    <div> 3 x 3</div>
                    <div className='grid grid-cols-3  gap-5 font-bold'>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-red-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        
                    </div>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        <div className='bg-blue-300 rounded'> 5</div>
                        
                    </div>
                

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

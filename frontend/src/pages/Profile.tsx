import React from 'react';
import Navbar from '../components/Navbar';

export default function Profile() {
  return (
    <div>
      <Navbar isLanding={false} />
      <div className='flex flex-col justify-center items-center pt-24'>
        <div className='flex flex-col w-[35%]'>
          <div className='text-xl bold'> Account Name</div>
          <div className='flex flex-col justify-start bg-zinc-100 shadow-md rounded px-8 pt-8 pb-8 px-12 h-full w-full'
          >
            <div className='flex flex-row justify-between my-2'>
              <label className='whitespace-nowrap'>First Name</label>
              <input className='w-[80%]' type="text"></input>
            </div>
            <div className='flex flex-row justify-between my-2'>
              <label className='whitespace-nowrap'>Last Name</label>
              <input className='w-[80%]' type="text"></input>
            </div>


            <div className='flex flex-row justify-between my-2'>
              <label className='whitespace-nowrap'>Email</label>
              <input className='w-[80%]' type="text"></input>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[90%] mt-8">
              Update
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center pt-24'>
        <div className='flex flex-col w-[35%]'>
          <div className='text-xl bold'> Account Name</div>
          <div className='flex flex-col justify-start bg-zinc-100 shadow-md rounded px-8 pt-8 pb-8 px-12 h-full w-full'
          >
            <div className='flex flex-row justify-between my-2'>
              <label className='whitespace-nowrap'>New Password</label>
              <input className='w-[55%]' type="text"></input>
            </div>
            <div className='flex flex-row justify-between my-2'>
              <label className='whitespace-nowrap'>Confirm New Password</label>
              <input className='w-[55%]' type="text"></input>
            </div>




            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[90%] mt-8">
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center pt-24 pb-24'>
        <div className='flex flex-col w-[35%]'>
          <div className='text-xl bold'> Account Management</div>
          <div className='flex flex-col justify-start bg-zinc-100 shadow-md rounded px-8 pt-8 pb-8 px-12 h-full w-full'
          >
            <div className='flex flex-row justify-between my-2'>
              <label className='whitespace-nowrap'>Calculator History</label>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-full w-1/3">
                Reset
              </button>
            </div>
            <div className='flex flex-row justify-between my-2'>
              <label className='whitespace-nowrap'>Pratice History</label>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-full w-1/3">
                Reset
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

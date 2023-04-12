import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='grid grid-cols-2 bg-primary_blue-light-0 bg-opacity-20 h-48 p-5'>
            <div className='flex flex-col ml-2'>
                <h1 className="flex justify-start items-center w-full mt-12 text-2xl font-extrabold text-primary_blue-light-2">
                    Aggie <span className="text-primary_blue-light-1">Compute</span>
                </h1>
                <div className=''>
                    <p className='text-neutral-500 text-xs'>©Aggie Compute 2023</p>
                    <p className='text-neutral-500 text-xs'>All rights reserved.</p>

                </div>

            </div>

            <div className="flex justify-start items-center justify-center mx-auto w-full max-w-screen-xl p-4  lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="grid grid-cols-2 gap-8 sm:gap-24 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-primary_blue">Help</h2>
                            <ul className="text-gray-600 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Make Request</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-primary_blue">Resources</h2>
                            <ul className="text-gray-600 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">Calculator List</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Features List</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-primary_blue">Legal</h2>
                            <ul className="text-gray-600  font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    )
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Landing.css';

export default function Landing() {
  return (
    <div className="bg-bg_grey overflow-x-auto">
      <div className="">
        <Navbar isLanding={true} />
      </div>

      {/* landing-page-header */}
      <div className="flex flex-col w-full h-80 items-center w-full bg-gradient-to-b from-primary_blue-dark to-primary_blue-light-0 via-primary_blue animate-gradient-y ">
        <h1 className="flex items-center w-full h-1/3 pt-32 justify-center text-6xl font-extrabold  text-primary_blue-light-2">
          Aggie <span className="text-primary_blue-light-1">Compute</span>
        </h1>

        <h2 className="flex flex-col items-center w-full pt-6 h-2/3 justify-center text-xl font-medium text-white">
          Empowering Students with Math,
          <span>
            <span className="text-primary_blue-light-0 font-bold"> Free </span>
            and
            <span className="text-primary_blue-light-0 font-bold mx-1">
              Centralized
            </span>
            Resources
          </span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center  m-12 pb-12">
        {/* later may need to dymaically determine row # */}
        <div className="grid grid-cols-3 grid-rows-2 grid gap-14 px-64 pb-12">
          <div className="flex flex-col">
            <NavLink
              to="/algebra"
              className="bg-primary_blue-dark text-2xl text-white rounded-md h-full w-full flex items-center justify-center"
            >
              <img
                className="rounded-lg h-full w-full object-cover"
                src="https://media.giphy.com/media/l2Je3qSgOVvFPdaNi/giphy.gif"
                alt="algebra animation"
              ></img>
            </NavLink>
            <div className="flex flex-col w-full items-center justify-center">
              <h1 className="flex items-center w-full justify-center font-bold text-lg mt-5">
                Algebra
              </h1>
              <h1 className="text-center italic	text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>
          <div className="flex flex-col">
            <NavLink
              to="/calculus"
              className="bg-primary-blue-dark text-2xl text-white rounded-md h-full w-full flex items-center justify-center"
            >
              <img
                className="rounded-lg h-full w-full object-cover"
                src="https://media.giphy.com/media/l2YWF00ZX8wOs0p0s/giphy.gif"
                alt="calculus animation"
              ></img>
            </NavLink>
            <div className="flex flex-col w-full items-center justify-center">
              <h1 className="flex items-center w-full justify-center font-bold text-lg mt-5">
                Calculus
              </h1>
              <h1 className="text-center italic text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>

          <div className="flex flex-col">
            <NavLink
              to="/crypto"
              className="bg-primary-blue-dark text-2xl text-white rounded-md h-full w-full flex items-center justify-center"
            >
              <img
                className="rounded-lg h-full w-full object-cover"
                src="https://media.giphy.com/media/5xtDarJ7d5HXTRULbSo/giphy.gif"
                alt="cryptography animation"
              ></img>
            </NavLink>
            <div className="flex flex-col w-full items-center justify-center">
              <h1 className="flex items-center w-full justify-center font-bold text-lg mt-5">
                Cryptography
              </h1>
              <h1 className="text-center italic	text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>

          <div className="flex flex-col">
            <NavLink
              to="/linalg"
              className="bg-primary-blue-dark text-2xl text-white rounded-md h-full w-full flex items-center justify-center"
            >
              <img
                className="rounded-lg h-full w-full object-cover"
                src="https://media.giphy.com/media/OsMRCAQICXU8j8j7LI/giphy.gif"
                alt="linear algebra animation"
              ></img>
            </NavLink>

            <div className="flex flex-col w-full items-center justify-center">
              <h1 className="flex items-center w-full justify-center font-bold text-lg mt-5">
                Linear Algebra
              </h1>
              <h1 className="text-center italic	text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>

          <div className="flex flex-col">
            <NavLink
              to="/linalg"
              className="bg-primary-blue-dark text-2xl text-white rounded-md h-full w-full flex items-center justify-center"
            >
              <img
                className="rounded-lg h-full w-full object-cover"
                src="https://media.giphy.com/media/eB5WYVSaOT0qUmHOWA/giphy.gif"
                alt="placeholder animation"
              ></img>
            </NavLink>

            <div className="flex flex-col w-full items-center justify-center">
              <h1 className="flex items-center w-full justify-center font-bold text-lg mt-5">
                ...
              </h1>
              <h1 className="text-center italic	 text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>
        </div>

        {/* Features */}

        <div className="flex  justify-center items-center h-[650px] w-[80%]  bg-primary_blue bg-opacity-20">
          <div className="grid grid-cols-3 w-[90%] h-[80%]">
            <NavLink
              to="/acbot"
              className="relative flex items-center justify-center circle-item"
            >
              <div className="absolute bg-white flex items-center justify-center h-[92%] m-[4%] mr-0 rounded-md">
                <img
                  className="h-full w-full object-cover rounded-md"
                  src={require('../images/chat_bot.jpg')}
                  alt="chat bot"
                ></img>
              </div>
              <div className=" flex text-center items-center justify-center">
                <div className="relative h-56 w-56 circle-item rounded-full ">
                  <div className="bg-primary_blue-light-1 w-full h-full rounded-full opacity-0 circle-info">
                    <h3 className="pt-20 h-32 text-white text-3xl font-bold text-center drop-shadow">
                      AC BOT
                    </h3>
                    <p className="text-white py-[10px] px-[5px] mx-[40px] text-sm border-t-2 border-black border-opacity-25 italic circle-item">
                      The Intelligent Learning Companion
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>

            <div className="grid grid-rows-5 gap-y-[2%] my-[2%]">
              <NavLink to="/algorithms" className="row-span-1">
                <div className=" bg-bg_grey flex items-center justify-center w-[96%] h-[100%] m-[4%] mr-0 rounded-md">
                  <h1 className="link link-underline link-underline-black text-2xl font-bold text-center">
                    Features
                  </h1>
                </div>
              </NavLink>

              <NavLink
                to="/photomathclone"
                className="row-span-4 relative flex items-center justify-center circle-item"
              >
                <div className="absolute bg-white flex items-center justify-center h-[92%] m-[4%] mr-0 rounded-md">
                  <img
                    className="h-full w-full object-cover rounded-md"
                    src={require('../images/ocr_feature.jpg')}
                    alt="math ocr"
                  ></img>
                </div>
                <div className=" flex text-center  items-center justify-center">
                  <div className="relative h-56 w-56 circle-item rounded-full ">
                    <div className="bg-primary_blue-light-1 w-full h-full rounded-full opacity-0 circle-info">
                      <h3 className="pt-20 h-32 text-white text-3xl font-bold text-center drop-shadow">
                        MATH OCR
                      </h3>
                      <p className="text-white py-[10px] px-[5px] mx-[40px] text-sm border-t-2 border-black border-opacity-25 italic circle-item">
                        Optical Character Recognition and solver
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="grid grid-rows-2  gap-y-[2%] my-[2%]">
              <NavLink
                to="/calculator"
                className="row-span-1 relative flex items-center justify-center circle-item mx-[4%] my-[4%] mb-0"
              >
                <div className="absolute bg-white flex items-center justify-center  h-full  w-full rounded-md">
                  <img
                    className="h-full w-full object-cover rounded-md"
                    src={require('../images/iStock-mathproblems-2048x1366.webp')}
                    alt="calculator"
                  ></img>
                </div>
                <div className=" flex text-center  items-center justify-center">
                  <div className="relative h-40 w-40 circle-item rounded-full ">
                    <div className="bg-primary_blue-light-1 w-full h-full rounded-full opacity-0 circle-info">
                      <h3 className="pt-10 h-18 text-white text-2xl font-bold text-center drop-shadow">
                        Calculator
                      </h3>
                      <p className="text-white py-[5px] px-[10px] mx-[20%] text-sm border-t-2 border-black border-opacity-25 italic circle-item">
                        Perform Basic Computations
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>

              <NavLink
                to="#"
                className="row-span-1 relative flex items-center justify-center circle-item mx-[4%] my-[4%] mt-0"
              >
                <div className="absolute bg-white flex items-center justify-center h-full  w-full rounded-md">
                  <img
                    className="h-full w-full object-cover rounded-md"
                    src={require('../images/1.jpg')}
                    alt="other"
                  ></img>
                </div>
                <div className=" flex text-center  items-center justify-center">
                  <div className="relative h-40 w-40 circle-item rounded-full ">
                    <div className="bg-primary_blue-light-1 w-full h-full rounded-full opacity-0 circle-info">
                      <h3 className="pt-10 h-18 text-white text-2xl font-bold text-center drop-shadow">
                        Duck
                      </h3>
                      <p className="text-white py-[5px] px-[10px] mx-[20%] text-sm border-t-2 border-black border-opacity-25 italic circle-item">
                        Lorem, ipsum dolor.
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

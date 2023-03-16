import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Landing.css';

export default function Landing() {
  return (
    <div className="bg-bg_grey">
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

      <div className="m-12 pb-12">
        {/* <div className="flex flex-col items-center justify-center pb-12">
          <h1 className="text-4xl font-bold">Subjects</h1>
        </div> */}
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
              <h1 className="text-center text-slate-400">
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
              <h1 className="text-center text-slate-400">
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
              <h1 className="text-center text-slate-400">
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
              <h1 className="text-center text-slate-400">
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
              <h1 className="text-center text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-screen h-screen justify-center pt-36">
          <div className="grid grid-cols-3 w-[70%] h-[70%] border border-2 bg-blue-200">
            <div className="">
              <NavLink to="#">
                <div className="bg-white flex items-center justify-center h-[92%] m-[4%] mr-0 border-4 border-slate-300  ">
                  <img
                    className="h-full w-full object-cover"
                    src={require('../images/chat_bot.jpg')}
                    alt="chat bot"
                  ></img>
                  {/* <h1 className="text-2xl font-bold text-center">
                    Pratice Problem with AC Chat
                  </h1> */}
                </div>
              </NavLink>
            </div>

            <div className="">
              <NavLink to="#">
                <div className=" bg-white flex items-center justify-center w-[96%] h-[20%] m-[4%] mr-0 border-4 border-slate-300">
                  <h1 className="link link-underline link-underline-black text-2xl font-bold text-center">
                    Features
                  </h1>
                </div>
              </NavLink>

              <NavLink to="#">
                <div className="bg-white flex items-center justify-center h-[70%] m-[4%] mr-0  border-4 border-slate-300">
                  <h1 className="text-2xl font-bold text-center ">MATH OCR</h1>
                </div>
              </NavLink>
            </div>

            <div className="">
              <NavLink to="#">
                <div className="bg-white flex items-center justify-center h-[45%]  m-[4%]  border-4 border-slate-300">
                  <h1 className="text-2xl font-bold text-center ">
                    Calculator
                  </h1>
                </div>
              </NavLink>
              <NavLink to="#">
                <div className="bg-white flex items-center justify-center h-[45%] m-[4%]  border-4 border-slate-300">
                  <h1 className="text-2xl font-bold text-center ">Filler</h1>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

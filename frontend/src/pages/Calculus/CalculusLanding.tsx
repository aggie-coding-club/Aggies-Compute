import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/FooterMain'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const lin_items = [
  <NavLink
    to="/calculus/simple_derivative"
    className="flex flex-col justify-center items-center  bg-slate-800 bg-opacity-40 rounded-xl py-24 px-4 mx-4
    transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-60"
  >
    <div className="flex flex-col items-center justify-center h-48 mx-5">
      <img src={require("../../images/rref.jpg")}></img>
      <p className='font-bold mt-8 text-white text-xl'>Simple Derivative</p>
    </div>
  </NavLink>,

  <NavLink
    to="/linalg//algebra/add_sub_mult"
    className="flex flex-col justify-center items-center  bg-slate-800 bg-opacity-40 rounded-xl py-24 px-4 mx-4
transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-60"
  >
    <div className="flex flex-col items-center justify-center h-48 mx-5">
      {/* <img src={require("../../images/inverse_matrix.jpg")}></img> */}
      <p className='font-bold mt-8 text-white text-xl'>N/A</p>
    </div>
  </NavLink>,

  <NavLink
    to="/linalg/matrix_operations"
    className="flex flex-col justify-center items-center  bg-slate-800 bg-opacity-40 rounded-xl py-24 px-4 mx-4
transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-60"
  >
    <div className="flex flex-col items-center justify-center h-48 mx-5">
      {/* <img className="" src={require("../../images/matrix_op.jpg")}></img> */}
      <p className='font-bold mt-8 text-white text-xl'>N/A</p>
    </div>
  </NavLink>,


  <NavLink
    to="/linalg/rref_ref"
    className="flex flex-col justify-center items-center  bg-slate-800 bg-opacity-40 rounded-xl py-24 px-4 mx-4
transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-60"
  >
    <div className="flex flex-col items-center justify-center h-48 mx-5">
      {/* <img src={require("../../images/rref.jpg")}></img> */}
      <p className='font-bold mt-8 text-white text-xl'>N/A</p>
    </div>
  </NavLink>,

  <NavLink
    to="/linalg/rref_ref"
    className="flex flex-col justify-center items-center  bg-slate-800 bg-opacity-40 rounded-xl py-24 px-4 mx-4
transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-60"
  >
    <div className="flex flex-col items-center justify-center h-48 mx-5">
      {/* <img src={require("../../images/rref.jpg")}></img> */}
      <p className='font-bold mt-8 text-white text-xl'>N/A</p>

    </div>
  </NavLink>,
];


export default function CalculusLanding() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items] = useState(lin_items);

  const slidePrev = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
  }
  const slideNext = () => {
    if (activeIndex === items.length - 3) return;
    setActiveIndex(activeIndex + 1);
  }

  const onArrowHover = (direction: string) => {
    const arrow = document.getElementById(`${direction}-arrow`);
    if (arrow != null) {
      if (direction === 'left') {
        if (activeIndex === 0) return;
        arrow.setAttribute('class', arrow.className.replace('border-r-white', 'border-r-primary_blue-light-0'))
      } else {
        if (activeIndex === items.length - 3) return;
        arrow.setAttribute('class', arrow.className.replace('border-l-white', 'border-l-primary_blue-light-0'))
      }
    }
  }

  const offArrowHover = (direction: string) => {
    const arrow = document.getElementById(`${direction}-arrow`);
    if (arrow != null) {
      if (direction === 'left') {
        arrow.setAttribute('class', arrow.className.replace('border-r-primary_blue-light-0', 'border-r-white'))
      } else {
        arrow.setAttribute('class', arrow.className.replace('border-l-primary_blue-light-0', 'border-l-white'))
      }
    }
  }

  const syncActiveIndex = ({ item }: any) => setActiveIndex(item);


  return (
    <div className='bg-bg_grey overflow-x-auto h-screen'>
      <Navbar isLanding={false} />

      <div className='flex flex-col justify-center items-center'>

        <div className='mt-8 font-bold text-4xl'>Linear Algebra</div>
      </div>
      <div className='flex flex-col justify-center items-center mt-8 mb-24 mx-48 pt-8  px-12  
        bg-gradient-to-r 
        from-primary_blue
        to-primary_blue
        via-slate-500
        animate-gradient-xy
      
      '>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        />
        <div className="flex flex-row b-refs-buttons m-2">

          <button className="h-0 w-0 border-y-8 border-y-transparent border-r-[16px] border-r-white mx-2"
            id='left-arrow'
            onMouseOver={() => onArrowHover('left')}
            onMouseOut={() => offArrowHover('left')}
            onClick={slidePrev}></button>
          <button className="h-0 w-0 border-y-8 border-y-transparent border-l-[16px] border-l-white mx-2 "
            id='right-arrow'
            onMouseOver={() => onArrowHover('right')}
            onMouseOut={() => offArrowHover('right')}
            onClick={slideNext}></button>
        </div>

      </div>
      <div className="w-full mt-64">
        <Footer />
      </div>
    </div>
  );
}
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


export default function CryptoLanding() {
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
      <ul className="flex flex-col items-center justify-center">
        <NavLink
          to="/crypto/affineCipher"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Affine Cipher
        </NavLink>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <NavLink
          to="/crypto/shiftCipher"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Shift Cipher
        </NavLink>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <NavLink
          to="/crypto/babyStepGiantStep"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Baby Step Giant Step
        </NavLink>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <NavLink
          to="/crypto/chineseRemainderTheorem"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Chinese Remainder Theorem
        </NavLink>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <NavLink
          to="/crypto/diffieHellman"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          Diffie Hellman Key Exchange
        </NavLink>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <NavLink
          to="/crypto/rsa"
          className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
        >
          RSA
        </NavLink>
      </ul>

      
   
      
    

    </div>

    
  );
}

// export default function CryptoLanding() {
//   return (
//     <div>
//       <Navbar isLanding={false} />
//       <ul className="flex flex-col items-center justify-center m-[5%]">
//         <NavLink
//           to="/crypto"
//           className="bg-[#27476e] text-white p-[1%] my-[1%] rounded-md"
//         >
//           replace-this
//         </NavLink>
//       </ul>
//     </div>
//   );
// }

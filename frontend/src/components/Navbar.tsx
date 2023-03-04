import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './nav_styles.css';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar-container">
        <NavLink
          to="/Landing"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#fff',
            textDecoration: 'none'
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#fff',
            textDecoration: 'none'
          })}
        >
          ChatGPT
        </NavLink>

        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#fff',
            textDecoration: 'none'
          })}
        >
          PhotoMath
        </NavLink>

        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#fff',
            textDecoration: 'none'
          })}
        >
          Education
        </NavLink>

        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#fff',
            textDecoration: 'none'
          })}
        >
          Profile
        </NavLink>
      </nav>
    </div>
  );
}
// export default function Navbar() {
//   // Navigation
//   const navigate = useNavigate();
//   const goCalculator = () => {
//     navigate('/calculator');
//   };

//   const goAC_Bot = () => {
//     navigate('/ac_bot');
//   };

//   const goPhotoMathClone = () => {
//     navigate('/photomathclone');
//   };

//   const goProfile = () => {
//     navigate('/profile');
//   };

//   return (
//     <div>
//       <nav className="navbar-container">

//       </nav>
//     </div>
//   );
// }

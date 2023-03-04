import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import '../styles.css';

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-evenly h-[30px] w-full bg-[27476e]">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#fff',
            textDecoration: 'none'
          })}
        >
          <img
            src={require('../images/ac-logo.png')}
            className="h-auto max-w-xs"
            alt="AC Logo"
          />
        </NavLink>

        <NavLink className="text-white" to="/ac_bot">
          AC Bot
        </NavLink>

        <NavLink to="/photomathclone">PhotoMath</NavLink>

        <NavLink to="/education">Education</NavLink>

        <NavLink to="/profile">Profile</NavLink>
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

import React from 'react';
import { useNavigate } from 'react-router-dom';

import './nav_styles.css';

export default function Navbar() {
  // Navigation
  const navigate = useNavigate();
  const goCalculator = () => {
    navigate('/calculator');
  };

  const goAC_Bot = () => {
    navigate('/ac_bot');
  };

  const goPhotoMathClone = () => {
    navigate('/photomathclone');
  };

  const goProfile = () => {
    navigate('/profile');
  };

  return (
    <div>
      <nav className="navbar-container"></nav>
    </div>
  );
}

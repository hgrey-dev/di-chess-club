import React from 'react';
import NavBar from './NavBar.jsx';
import '../stylesheets/LandingPage.css';

import Logo from '../svg/DICC-logo-black.svg';

const LandingPage = () => {
  return (
    <div className='LP-container'>
      <NavBar />
      <div className='LP-splash'>
        <div className='LP-splash-container'>
          <img className='LP-splash-logo' src={Logo} alt='Developers Institute Chess Club' />
          <h1 className='LP-splash-header'>Developers Institute Chess Club</h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
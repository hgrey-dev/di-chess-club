import React from 'react';
import NavBar from './NavBar.jsx';
import '../stylesheets/LandingPage.css';

import Logo from '../svg/DICC-logo-black.svg';

const LandingPage = () => {
  return (
    <div className='LP-container'>
      <NavBar />
      <section className='LP-splash'>
        <div className='LP-splash-container'>
          <img className='LP-splash-logo' src={Logo} alt='Developers Institute Chess Club' />
          <h1 className='LP-splash-header'>Developers Institute Chess Club</h1>
        </div>
      </section>
      <section className='LP-activities'>
        <h2>Latest Club Activities</h2>
        <div className='LP-latest'>
          <div className='LP-latest-game'>
            <h3>Latest Game</h3>
          </div>
          <div className='LP-latest-schedule'>
            <h3>Club Activities Schedule</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
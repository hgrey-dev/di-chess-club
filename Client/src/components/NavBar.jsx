import React from 'react';
import Logo from '../svg/DICC-logo.svg';
import '../stylesheets/NavBar.css';

const NavBar = () => {
  return (
    <div className='NB-container'>
      <img className='NB-logo' src={Logo} alt='Developers Institute Chess Club' />
      <ul className='NB-buttons'>
        <div className='NB-button button-selected'>
          <a className='NB-button-text text-selected' href='/'>Home</a>
        </div>
        <div className='NB-button'>
          <a className='NB-button-text' href='/'>Leaderboard</a>
        </div>
        <div className='NB-button'>
          <a className='NB-button-text' href='/'>Login</a>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
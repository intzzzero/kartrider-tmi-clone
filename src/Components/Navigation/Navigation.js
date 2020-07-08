import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const navItem = ['HOME', 'RANK', 'CART', 'TRACK', 'LEAGUE', 'LAB'];
const navView = navItem.map((data) => {
  return (
    <li>
      <div className='active'>
        <Link to='/main' className='btn btn-1'>
          {data}
          <svg>
            <rect x='0' y='0' fill='none' width='100%' height='100%' />
          </svg>
        </Link>
      </div>
    </li>
  );
});

const Navigation = memo(() => {
  return (
    <div className='nav-container'>
      <div className='header'>
        <div className='header-inner'>
          <Link to='/main' className='logo-games'>
            <img alt='logo-game' src='https://tmi.nexon.com/img/assets/logo_kart.png' />
          </Link>
          <Link to='/main' className='logo-tmi'>
            <img alt='logo-tmi' src='https://tmi.nexon.com/img/assets/tmi_logo_default_b.svg' />
          </Link>

          <div className='avatar'>
            <img
              alt='avatar'
              src='https://lh3.googleusercontent.com/proxy/WW65AyaUQ6jSueAlwVpTccSse9tizDGrnTosAb8xG-joN9q12Da4IhmFI2T3P8RHpDeeKDMXUkScy92Qz3ZWM6_Gz4M4qjAGex_TTZZqC45DwVZbWC2885tS'
            />
          </div>
        </div>

        <div className='navigation'>
          <div className='navigation-inner'>
            <div className='navigation-tab'>
              <ul>{navView}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Navigation;

import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = memo(() => {
  return (
    <div className='nav-container'>
      <div className='header'>
        <div className='header-inner'>
          <Link to='/main' className='logo-games'>
            <img src='https://tmi.nexon.com/img/assets/logo_kart.png' alt='logo-game' />
          </Link>
          <Link to='/main' className='logo-tmi'>
            <img src='https://tmi.nexon.com/img/assets/tmi_logo_default_b.svg' alt='logo-tmi' />
          </Link>

          <div className='avatar'>
            <img
              src='https://lh3.googleusercontent.com/proxy/WW65AyaUQ6jSueAlwVpTccSse9tizDGrnTosAb8xG-joN9q12Da4IhmFI2T3P8RHpDeeKDMXUkScy92Qz3ZWM6_Gz4M4qjAGex_TTZZqC45DwVZbWC2885tS'
              alt='avatar'
            />
          </div>
        </div>

        <div className='navigation'>
          <div className='navigation-inner'>
            <div className='navigation-tab'>
              <ul>
                <li>
                  <div className='active'>
                    <Link to='/main' className='btn btn-1'>
                      HOME
                      <svg>
                        <rect x='0' y='0' fill='none' width='100%' height='100%' />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='active'>
                    <Link to='/rank' className='btn btn-1'>
                      RANK
                      <svg>
                        <rect x='0' y='0' fill='none' width='100%' height='100%' />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='active'>
                    <Link to='/cart' className='btn btn-1'>
                      CART
                      <svg>
                        <rect x='0' y='0' fill='none' width='100%' height='100%' />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='active'>
                    <Link to='/track' className='btn btn-1'>
                      TRACK
                      <svg>
                        <rect x='0' y='0' fill='none' width='100%' height='100%' />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='active'>
                    <Link to='/league' className='btn btn-1'>
                      LEAGUE
                      <svg>
                        <rect x='0' y='0' fill='none' width='100%' height='100%' />
                      </svg>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='active'>
                    <Link to='/lab' className='btn btn-1'>
                      LAB
                      <svg>
                        <rect x='0' y='0' fill='none' width='100%' height='100%' />
                      </svg>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Navigation;

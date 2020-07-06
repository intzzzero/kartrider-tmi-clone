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
        </div>

        <div className='navigation'>
          <div className='navigation-inner'>
            <div className='navigation-tab'>
              <ul>
                <li>
                  <div className='active'>
                    <Link to='/main'>홈</Link>
                  </div>
                </li>
                <li>
                  <div className='active'>
                    <Link to='/rank'>랭킹</Link>
                  </div>
                </li>
                <li>
                  <div className='active'>
                    <Link to='/cart'>카트</Link>
                  </div>
                </li>
                <li>
                  <div className='active'>
                    <Link to='/track'>트랙</Link>
                  </div>
                </li>
                <li>
                  <div className='active'>
                    <Link to='/league'>리그</Link>
                  </div>
                </li>
                <li>
                  <div className='active'>
                    <Link to='/lab'>연구소</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='content'>
          <div className='content-inner'>
            <div className='mask'></div>
            <div className='mask-inner'>
              <div className='home-title'>
                <div className='main-message'>
                  <p>
                    <Link to='https://developers.nexon.com/'>넥슨 Open API 기반</Link>
                  </p>
                  <p>카트라이더 전적 검색</p>
                  <div className='main-copy'>
                    <p>STAY HOME with TMI</p>
                  </div>
                </div>

                <div className='search-form'>
                  <form>
                    <div className='select'>
                      <label>유저</label>
                      <input type='text' placeholder='카트라이더 닉네임을 입력' />
                      <button>
                        <img src='https://tmi.nexon.com/img/assets/tmi_logo_default.svg' alt='buttonPic'></img>
                      </button>
                    </div>
                  </form>
                </div>
                <img src='https://tmi.nexon.com/img/assets/covid_left.png' alt='leftPic' className='left-pic'></img>
                <img src='https://tmi.nexon.com/img/assets/covid_right.png' alt='rightPic' className='right-pic'></img>
                <span className='left-bg'></span>
                <span className='right-bg'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Navigation;

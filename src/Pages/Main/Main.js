import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import './Main.scss';

const Main = memo(() => {
  const inputHanlder = e => {
    const { value } = e.target;
  };

  return (
    <>
      <Navigation />
      <div className='main-content'>
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
                    <input onChange={inputHanlder} type='text' placeholder='카트라이더 닉네임을 입력' />
                    <button>
                      <img alt='buttonPic' src='https://tmi.nexon.com/img/assets/tmi_logo_default.svg' />
                    </button>
                  </div>
                </form>
              </div>
              <img className='left-pic' alt='leftPic' src='https://tmi.nexon.com/img/assets/covid_left.png' />
              <img className='right-pic' alt='rightPic' src='https://tmi.nexon.com/img/assets/covid_right.png' />
              <span className='left-bg'></span>
              <span className='right-bg'></span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Main;

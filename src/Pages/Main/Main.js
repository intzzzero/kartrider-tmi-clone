import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import Modal from '../../modal';
import SignUp from '../../Pages/Signup/Signup';
import Footer from '../../Components/Footer/Footer';
import './Main.scss';

const Main = memo(() => {
  const [id, setID] = useState('');
  const [profile, setProfile] = useState('');
  const [isModalActive, setModalActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navigation />
      <div className='main-content'>
        {isLoggedIn ? (
          <button className='login'>안녕하세요!</button>
        ) : (
          <button className='login' name='open' onClick={() => setModalActive(true)}>
            로그인
          </button>
        )}
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

              {isModalActive && (
                <Modal>
                  <SignUp onClose={() => setModalActive(false)} />
                </Modal>
              )}

              <div className='search-form'>
                <form>
                  <div className='select'>
                    <label>유저</label>
                    <input type='text' placeholder='카트라이더 닉네임을 입력' />
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

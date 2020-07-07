import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import SignUp from '../../Pages/Signup/Signup';
import Modal from '../../modal';

const Main = memo(() => {
  const [id, setID] = useState('');
  const [profile, setProfile] = useState('');
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(false);

  const modalHandler = (e) => {
    const { name } = e.target;
    if (name === 'open') {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className='main-content'>
        {login ? (
          <button className='login'>안녕하세요!</button>
        ) : (
          <button className='login' name='open' onClick={modalHandler}>
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

              {modal && (
                <Modal>
                  <SignUp onClose={modalHandler} />
                </Modal>
              )}

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
      <Footer />
    </>
  );
});

export default Main;

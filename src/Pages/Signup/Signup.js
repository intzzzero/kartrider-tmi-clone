import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

const Signup = memo(({ onClose }) => {
  return (
    <>
      <div className='blur'></div>
      <div className='signup-container'>
        <div className='shadowed-box'>
          <div className='logo-container'>
            <div className='logo'>카트라이더TMI</div>
          </div>
          <div className='contents'>
            <span>SNS 로그인</span>
            <div className='social-login'>
              <Link to=''>
                <img
                  className='kakao'
                  alt='kakao'
                  src='https://developers.kakao.com/tool/resource/static/img/button/login/full/en/kakao_login_large_wide.png'
                />
              </Link>
              <Link to=''>
                <img
                  className='google'
                  alt='google'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQY8xYeJ0g9vNLBNDUMbVif_9f_vcgZ9Z_fpQ&usqp=CAU'
                />
              </Link>
            </div>
            <button name='close' onClick={onClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

export default Signup;

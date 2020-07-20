import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/reduxIndex';
import { Link, withRouter } from 'react-router-dom';
import KakaoLogin from 'react-kakao-login';
import './Signup.scss';

const Signup = memo(({ onClose }) => {
  const dispatch = useDispatch();

  const resFail = err => {
    alert('로그인에 실패하였습니다');
  };

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
                <KakaoLogin
                  className='kakao-login'
                  jsKey='6a7d9edc8ae52aab4e554e0485cd499f'
                  onSuccess={() => dispatch(fetchUsers())}
                  onFailure={resFail}
                  cookiePolicy={'single_host_origin'}
                >
                  <img
                    className='kakao'
                    alt='kakao'
                    src='https://developers.kakao.com/tool/resource/static/img/button/login/full/en/kakao_login_large_wide.png'
                  />
                </KakaoLogin>
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

export default withRouter(Signup);

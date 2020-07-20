import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reFetchUsers } from '../../redux/reduxIndex';
import SignInModal from '../../modal';
import SignIn from '../../Pages/SignIn/SignIn';
import SignUpModal from '../../modal';
import SignUp from '../../Pages/Signup/Signup';
import kakaoProfileImg from '../../Images/Resources/kakaoProfileImg.jpg';
import './Navigation.scss';

const Navigation = memo(() => {
  const usersData = useSelector((state) => state.usersData);
  const dispatch = useDispatch();
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    dispatch(reFetchUsers());
  }, [dispatch]);

  const navItem = [
    { id: 0, name: 'HOME', url: '/main' },
    { id: 1, name: 'RANK', url: '/rank' },
    { id: 2, name: 'CART', url: '/cart' },
    { id: 3, name: 'TRACK', url: '/track' },
    { id: 4, name: 'LEAGUE', url: '/league' },
    { id: 5, name: 'LAB', url: '/lab' },
  ];

  const navView = navItem.map((data) => {
    return (
      <li key={data.id}>
        <div className='active'>
          <Link to={data.url} className='btn btn-1'>
            {data.name}
            <svg>
              <rect x='0' y='0' fill='none' width='100%' height='100%' />
            </svg>
          </Link>
        </div>
      </li>
    );
  });

  const logOut = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  const linkHandler = () => {
    setIsModalActive(true);
  };

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
            {localStorage.getItem('access_token') ? <img alt='avatar' src={usersData.profileImg} /> : <img alt='avatar' src={kakaoProfileImg} />}
          </div>

          {localStorage.getItem('access_token') ? (
            <div className='login-state'>
              <button className='welcome'>{`안녕하세요! ${usersData.nickName}님`}</button>
              <button className='login-and-logout-btn' onClick={logOut}>
                로그아웃
              </button>
            </div>
          ) : (
            <div className='login-state'>
              <button className='login-and-logout-btn' name='open' onClick={() => setIsModalActive(true)}>
                로그인
              </button>
            </div>
          )}
        </div>

        {isModalActive && (
          <SignUpModal>
            <SignUp onClose={() => setIsModalActive(false)} usersData={usersData} />
          </SignUpModal>
        )}

        <div className='navigation'>
          <div className='navigation-inner'>
            <div className='navigation-tab'>
              <ul>
                {navView}
                {localStorage.getItem('access_token') ? (
                  <li>
                    {isModalActive && (
                      <SignInModal>
                        <SignIn onClose={() => setIsModalActive(false)} />
                      </SignInModal>
                    )}
                    <div className='active' onClick={() => setIsModalActive(true)}>
                      <Link to='' className='btn btn-1'>
                        닉네임 연동
                        <svg>
                          <rect x='0' y='0' fill='none' width='100%' height='100%' />
                        </svg>
                      </Link>
                    </div>
                  </li>
                ) : (
                  <li></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Navigation;

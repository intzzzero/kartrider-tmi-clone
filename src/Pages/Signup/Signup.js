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
                  src='https://developers.kakao.com/tool/resource/static/img/button/login/full/en/kakao_login_large_wide.png'
                  alt='kakao'
                />
              </Link>
              <Link to=''>
                <img
                  className='google'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQY8xYeJ0g9vNLBNDUMbVif_9f_vcgZ9Z_fpQ&usqp=CAU'
                  alt='google'
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

// import React from 'react';
// import styled from 'styled-components';
// import oc from 'open-color';
// import { Link } from 'react-router-dom';

// // 화면의 중앙에 위치시킨다
// const Positioner = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// // 너비, 그림자 설정
// const ShadowedBox = styled.div`
//   width: 500px;
//   box-shadow: 10px 10px grey;
//   border-radius: 5px;
//   border: 2px solid black;
// `;

// // 로고
// const LogoWrapper = styled.div`
//   background: ${oc.blue[7]};
//   height: 5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Logo = styled(Link)`
//   color: white;
//   font-family: 'Rajdhani';
//   font-size: 2.4rem;
//   letter-spacing: 5px;
//   text-decoration: none;
// `;

// // children 이 들어가는 곳
// const Contents = styled.div`
//   background: white;
//   padding: 2rem;
//   height: auto;
// `;

// const Signup = ({ children }) => (
//   <Positioner>
//     <ShadowedBox>
//       <LogoWrapper>
//         <Logo to='/'>카트라이더TMI</Logo>
//       </LogoWrapper>
//       <Contents>{children}</Contents>
//     </ShadowedBox>
//   </Positioner>
// );

// export default Signup;

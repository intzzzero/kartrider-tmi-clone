import React, { memo, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { linkFromKakaoIdToCartUser } from '../../redux/reduxIndex';
import './SignIn.scss';

const SignIn = memo(({ onClose }) => {
  const [cartId, setCartId] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const linkHandler = (e) => {
    e.preventDefault();
    dispatch(linkFromKakaoIdToCartUser(cartId));
    setIsModalActive(onClose);
  };

  return (
    <>
      <div className='blur'></div>
      <div className='signin-container'>
        <div className='shadowed-box'>
          <div className='logo-container'>
            <div className='logo'>카트라이더TMI</div>
          </div>
          <div className='contents'>
            <span>카트라이더 ID 연동하기</span>
            <div className='input-form'>
              <form>
                <div className='input-tag'>
                  <input
                    type='text'
                    placeholder='카트라이더 닉네임을 입력해주세요'
                    ref={inputRef}
                    value={cartId}
                    onChange={(e) => setCartId(e.target.value)}
                  ></input>
                  <button name='link' onClick={linkHandler}>
                    연 동 하 기
                  </button>
                  <button name='link' onClick={onClose}>
                    취 소
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default SignIn;

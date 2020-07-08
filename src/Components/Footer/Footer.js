import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = memo(() => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='logos'>
          <img alt='logo' src='https://tmi.nexon.com/img/assets/lab_logo.svg' />
          <span className='copy'>Data based on NEXON DEVELOPERS</span>
        </div>
        <div className='info'>
          <ul>
            <li>
              <Link to='/'>About TMI</Link>
            </li>
            <li>
              <Link to='https://goo.gl/forms/gVRtyj8ZuEvos8Nt1'>문의/피드백</Link>
            </li>
            <li>
              <Link to='https://tmi.nexon.com/kart/board'>업데이트 로그</Link>
            </li>
            <li>
              <Link to='https://career.nexon.com/'>채용</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Footer;

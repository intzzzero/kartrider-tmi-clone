import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RankingGuide = ({ rankingGuideToggle }) => {
	return (
		<RankingGuideWrapper>
			<div className='guideImgsWrapper'>
				<FontAwesomeIcon className='closeIcon' onClick={rankingGuideToggle} icon={faTimes} />
				<input type='checkbox' />
				<div className='charactersImg'>
					<img className='bubble' src='https://tmi.nexon.com/img/assets/guide_bubble.png' alt='bubble' />
					<img className='point' src='https://tmi.nexon.com/img/assets/guide_gg.png' alt='text' />
					<img className='dao' src='https://tmi.nexon.com/img/assets/guide_dao.png' alt='dao' />
					<img className='bazzie' src='https://tmi.nexon.com/img/assets/guide_bazzie.png' alt='bazzie' />
				</div>
				<img src='https://tmi.nexon.com/img/assets/guide_desc.png' alt='ranking guide' />
			</div>
		</RankingGuideWrapper>
	);
};

const primaryColor = '#0177fe';

const characterUpAnimation = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const characterDownAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const RankingGuideWrapper = styled.div`
	width: 100%;
	height: 120%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	position: fixed;
	display: flex;
	justify-content: center;
	padding-top: 5%;

	.guideImgsWrapper {
		position: relative;

		.closeIcon {
			font-size: 1.8rem;
			position: absolute;
			right: 15px;
			top: 10px;
			color: ${primaryColor};
			cursor: pointer;
		}

		input {
			position: absolute;
			top: 612px;
			left: 345px;
		}

		.charactersImg {
			position: absolute;
			right: 25%;

			.bubble {
				position: relative;
				bottom: 10px;
				left: 250px;
				animation: ${characterDownAnimation} 0.5s ease-in-out forwards;
			}

			.point {
				position: relative;
				bottom: 80px;
				left: 250px;
				animation: ${characterDownAnimation} 0.5s ease-in-out forwards;
			}

			.dao {
				position: absolute;
				left: 350px;
				top: 50px;
				animation: ${characterDownAnimation} 0.5s ease-in-out forwards;
			}

			.bazzie {
				position: relative;
				top: 150px;
				left: 50px;
				animation: ${characterUpAnimation} 0.5s ease-in-out forwards;
			}
		}
	}
`;

export default RankingGuide;

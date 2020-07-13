import React, { useState, Fragment } from 'react';
import { useParams } from 'react-router';
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

import Navigation from '../../../Components/Navigation/Navigation';
import Footer from '../../../Components/Footer/Footer';
import { CircularProgressbar } from 'react-circular-progressbar';
import CircleProgressProvider from '../CircleProgress/CircleProgressProvider';

import { rankInfo } from '../../../config.js';

const RankDetail = () => {
	const [ speedMode, setSpeedMode ] = useState(2);
	const [ playMode, setPlayMode ] = useState(1);
	const { id } = useParams();
	const userInfo = rankInfo.filter(user => user.rank === Number(id));

	const defaultUserImg =
		'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/42c729e64e31aea803e4881432f7b95129ce97535c29e4f9a72919a9f267b418.png';

	const speedModeText = [ '빠름', '매우빠름', '무한부스터' ];

	return (
		<Fragment>
			<Navigation />
			<RankDetailContainer>
				<NameCard>
					<div className='flagBg' />
					{userInfo.map(user => (
						<div className='nameCardWrapper' key={user.rank + user.name}>
							<img src={user.img || defaultUserImg} alt={user.name} />
							<div className='infoWrapper'>
								<h2>{user.name}</h2>
							</div>
						</div>
					))}
					<div className='playModeBtnWrapper'>
						<IndividualPlayModeBtn playMode={playMode === 1} onClick={() => setPlayMode(1)}>
							<FontAwesomeIcon className='userIcon' icon={faUser} />
							개인전
						</IndividualPlayModeBtn>
						<TeamPlayModeBtn playMode={playMode === 2} onClick={() => setPlayMode(2)}>
							<FontAwesomeIcon className='usersIcon' icon={faUsers} />
							팀전
						</TeamPlayModeBtn>
					</div>
				</NameCard>
				<RainbowBg />
				<section>
					<CircleChartWrapper>
						{userInfo.map(user => (
							<CircleContainer>
								<CircleWrapper>
									<p>승률</p>
									<CircleProgressProvider valueStart={0} valueEnd={user.winRatio}>
										{value => <CircularProgressbar value={value} text={`${value}%`} />}
									</CircleProgressProvider>
								</CircleWrapper>
								<CircleWrapper>
									<p>완주율</p>
									<CircleProgressProvider valueStart={0} valueEnd={100 - user.retireRatio}>
										{value => (
											<CircularProgressbar
												value={value}
												text={`${value}%`}
												styles={completeRatioStyle}
											/>
										)}
									</CircleProgressProvider>
								</CircleWrapper>
								<CircleWrapper>
									<p>리타이어율</p>
									<CircleProgressProvider valueStart={0} valueEnd={user.retireRatio}>
										{value => (
											<CircularProgressbar
												value={value}
												text={`${value}%`}
												styles={retireRatioStyle}
											/>
										)}
									</CircleProgressProvider>
								</CircleWrapper>
							</CircleContainer>
						))}
					</CircleChartWrapper>
					<CurrentFiftyGames />
					<CommentWrapper />
				</section>
				<div className='speedModeBtnWrapper'>
					{speedModeText.map((mode, idx) => (
						<SpeedModeBtn
							speedMode={speedMode === idx + 1}
							onClick={() => setSpeedMode(idx + 1)}
							key={mode + idx}
						>
							{mode}
						</SpeedModeBtn>
					))}
				</div>
			</RankDetailContainer>
			<Footer />
		</Fragment>
	);
};

const primaryColor = '#0177fe';
const deepPrimaryColor = '#015ecc';

const RankDetailContainer = styled.main`
	width: 100%;
	height: 100%;
	background-color: #fafafa;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 50px 0;

	& > section {
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		div {
			width: 325px;
			height: 265px;
			margin-bottom: 10px;
		}
	}

	.speedModeBtnWrapper {
		width: 70%;
		height: 50px;
		display: flex;
		font-size: 0.85rem;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.3);
		border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
	}
`;

const NameCard = styled.section`
	width: 70%;
	height: 180px;
	border-left: 4px solid ${primaryColor};
	margin-bottom: 25px;
	position: relative;

	.nameCardWrapper {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		img {
			width: 180px;
			height: auto;
		}

		.infoWrapper {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			z-index: 2;

			h2 {
				font-size: 2.5rem;
				font-weight: 600;
				padding-bottom: 50px;
			}
		}
	}

	.playModeBtnWrapper {
		position: absolute;
		display: flex;
		left: 240px;
		top: 110px;
		z-index: 2;
	}

	.flagBg {
		background-image: url('https://ak.picdn.net/shutterstock/videos/768526/thumb/1.jpg');
		background-size: cover;
		opacity: 0.03;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: 1;
	}
`;

const IndividualPlayModeBtn = styled.button`
	width: 104px;
	height: 25px;
	border: 1px solid ${deepPrimaryColor};
	font-size: 0.75rem;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	cursor: pointer;
	border-radius: 5px 0 0 5px;
	color: ${props => (props.playMode ? '#fff' : deepPrimaryColor)};
	background-color: ${props => (props.playMode ? deepPrimaryColor : '#fff')};

	.userIcon {
		margin-right: 10px;
		font-size: 0.9rem;
	}
`;

const TeamPlayModeBtn = styled.button`
	width: 104px;
	height: 25px;
	border: 1px solid ${deepPrimaryColor};
	font-size: 0.75rem;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	cursor: pointer;
	border-radius: 0 5px 5px 0;
	color: ${props => (props.playMode ? '#fff' : deepPrimaryColor)};
	background-color: ${props => (props.playMode ? deepPrimaryColor : '#fff')};

	.usersIcon {
		margin-right: 10px;
		font-size: 1rem;
	}
`;

const RainbowBgAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const RainbowBg = styled.div`
	width: 70%;
	height: 45px;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: ${RainbowBgAnimation} 10s ease infinite;
	margin-bottom: 25px;
`;

const CircleChartWrapper = styled.div`
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CircleContainer = styled.div`display: flex;`;

const CircleWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 12px;

	p {
		font-size: 0.85rem;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.7);
		margin-bottom: 20px;
	}
`;

const CircleSeperateLine = styled.div`
	height: 80px;
	width: 1px;
	background-color: rgba(0, 0, 0, 0.05);
	position: relative;
	margin: 20px auto;
`;

const retireRatioStyle = {
	path: {
		stroke: '#F62558',
		strokeLinecap: 'butt',
		transition: 'stroke-dashoffset 1.4s ease 0s'
	},
	text: {
		fill: '#F62558'
	}
};

const completeRatioStyle = {
	path: {
		stroke: '#9CD728',
		strokeLinecap: 'butt',
		transition: 'stroke-dashoffset 0.5s ease 0s'
	},
	text: {
		fill: '#9CD728'
	}
};

const CurrentFiftyGames = styled.div`
	margin: 0 10px;
	background-color: #fff;
`;

const CommentWrapper = styled.div`background-color: #fff;`;

const SpeedModeBtn = styled.div`
	width: 90px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	cursor: pointer;

	${props =>
		props.speedMode &&
		css`
			color: ${primaryColor};
			border-bottom: 3px solid ${primaryColor};
		`};

	::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 3px;
		left: 0;
		bottom: -2.5px;
		background-color: ${primaryColor};
		transform-origin: bottom right;
		transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
	}

	:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	:hover {
		color: ${primaryColor};
	}
`;

export default RankDetail;

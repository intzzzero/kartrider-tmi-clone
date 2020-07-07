import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import CircleProgressProvider from './CircleProgress/CIrcleProgressProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

import './CircleProgress/CircleProgressResetStyle.css';
import waveImg from '../../Images/wave.png';
import { rankInfo } from '../../config.js';

const Rank = () => {
	const topThree = rankInfo.slice(0, 3);
	const otherUsers = rankInfo.slice(3);

	return (
		<RankContatiner>
			<RankInfoTextContainer>
				<div className='textWrapper'>
					<h3>7월 TMI 랭킹</h3>
					<div />
					<p>
						<span>랭킹 산정기간 </span> 2020년 07월 01일 00:00:00 ~ 2020년 07월 31일 24:00:00
					</p>
					<p>
						<span>최근 업데이트 </span> 2020년 07월 07일 11:06:53
					</p>
				</div>
				<div className='btnWrapper'>
					<button>
						<FontAwesomeIcon className='userIcon' icon={faUser} />
						개인전
					</button>
					<button>
						<FontAwesomeIcon className='usersIcon' icon={faUsers} />
						팀전
					</button>
				</div>
			</RankInfoTextContainer>

			<UserCardContainer>
				{topThree.map(user => (
					<UserCard key={'top three' + user.name}>
						<UserNameWrapper>
							<div />
							<p>{user.name}</p>
							<span>순위 {user.rank}위</span>
						</UserNameWrapper>

						<CircleContainer>
							<CircleWrapper>
								<p>승률</p>
								<CircleProgressProvider valueStart={0} valueEnd={user.winRatio}>
									{value => <CircularProgressbar value={value} text={`${value}%`} />}
								</CircleProgressProvider>
							</CircleWrapper>

							<CircleSeperateLine />

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
					</UserCard>
				))}
			</UserCardContainer>
			<WaveBg>
				<FirstWave />
				<SecondWave />
			</WaveBg>
			<OtherUsersContainer>
				<div className='chartHeader'>
					<p>#</p>
					<p>닉네임</p>
				</div>
				{otherUsers.map(user => (
					<OtherUsersCard key={'other users' + user.name}>
						<div>
							<p>{user.rank}</p>
						</div>
						<div>
							<p>{user.name}</p>
						</div>
					</OtherUsersCard>
				))}
			</OtherUsersContainer>
		</RankContatiner>
	);
};

const RankContatiner = styled.div`
	position: relative;
	top: 48px;
	width: 100%;
	max-height: 100%;
	background-color: #fafafa;
	padding-bottom: 50px;
`;

const RankInfoTextContainer = styled.article`
	position: absolute;
	width: 70%;
	height: 140px;
	z-index: 10;
	top: 110px;
	left: 15%;
	color: #fff;
	letter-spacing: -0.7px;
	padding: 0 10px;

	.textWrapper {
		h3 {
			font-size: 1.4rem;
		}

		div {
			width: 35px;
			height: 3px;
			background-color: #fff;
			margin: 12px 0;
		}

		p {
			font-size: 0.75rem;
			line-height: 1rem;

			span {
				font-weight: 600;
			}
		}
	}

	.btnWrapper {
		margin-top: 20px;
		display: flex;

		button {
			width: 104px;
			height: 25px;
			border: 1px solid #fff;
			background-color: #fff;
			color: #015ecc;
			font-size: 0.75rem;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
				'Helvetica Neue', sans-serif;

			&:first-child {
				border-top-left-radius: 5px;
				border-bottom-left-radius: 5px;
			}

			&:last-child {
				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;
				background-color: #015ecc;
				color: #fff;
			}

			.userIcon,
			.usersIcon {
				margin-right: 10px;
			}

			.userIcon {
				font-size: 0.9rem;
			}

			.usersIcon {
				font-size: 1rem;
			}
		}
	}
`;

const UserCardContainer = styled.article`
	width: 100%;
	height: 655px;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

const UserCard = styled.div`
	position: relative;
	top: 90px;
	margin: 20px;
	width: 250px;
	height: 250px;
	border-radius: 10px;
	background-color: #fff;

	&:hover {
		color: #0177fe;

		p {
			color: #0177fe;
		}
	}
`;

const UserNameWrapper = styled.div`
	border-bottom: 1px solid #0177fe;

	div {
		width: 100%;
		height: 130px;
		background-image: url('https://ak.picdn.net/shutterstock/videos/768526/thumb/1.jpg');
		background-size: cover;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		opacity: 0.04;
	}

	p {
		position: absolute;
		font-size: 1.15rem;
		font-weight: 600;
		color: #0177fe;
		top: 45px;
		left: 40px;
	}

	span {
		position: absolute;
		font-size: 0.85rem;
		font-weight: 600;
		top: 80px;
		left: 40px;
	}
`;

const CircleContainer = styled.div`
	display: flex;
	padding: 0 30px;
`;

const CircleWrapper = styled.div`
	width: 60px;
	height: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;

	p {
		font-size: 0.75rem;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.7);
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
		transition: 'stroke-dashoffset 1.4s ease 0s'
	},
	text: {
		fill: '#F62558'
	}
};

const OtherUserCardAnimation = keyframes`
	0% {
		opacity: 0;
		top: 100px;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
		top: -50px;
	}
`;

const OtherUsersContainer = styled.article`
	width: 70%;
	height: auto;
	margin: 0 auto;
	position: relative;
	top: -50px;
	animation: ${OtherUserCardAnimation} 0.8s ease-in-out forwards;

	.chartHeader {
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff;
		height: 30px;

		p {
			display: inline-block;
			margin-left: 60px;
			margin-right: 120px;
		}
	}
`;

const OtherUsersCard = styled.div`
	width: 100%;
	height: 42px;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.05);
	margin-bottom: 12px;
	display: flex;
	align-items: center;

	&:hover {
		border: 1px solid #0177fe;
	}

	div:first-child {
		font-size: 1rem;
		width: 120px;
		text-align: center;
		color: rgba(0, 0, 0, 0.7);
		font-weight: 600;
	}

	div:last-child {
		font-size: 1rem;
		width: 200px;
		text-align: left;
		margin-left: 100px;
		color: rgba(0, 0, 0, 0.9);
	}
`;

const WaveBg = styled.div`
	width: 100%;
	height: 655px;
	position: relative;
	overflow: hidden;
	background-color: #015ecc;
`;

const FirstWaveAnimation = keyframes`
	0% {
		background-position-x: 0;
	}
	100% {
		background-position-x: 1000px;
	}
`;

const SecondWaveAnimation = keyframes`
	0% {
		background-position-x: 0;
	}
	100% {
		background-position-x: -1000px;
	}
`;

const FirstWave = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 250px;
	background-image: url(${waveImg});
	background-color: #015ecc;
	background-size: 1000px 250px;
	animation: ${FirstWaveAnimation} 15s linear infinite;
	opacity: 0.075;
	animation-delay: 0s;
`;

const SecondWave = styled.div`
	position: absolute;
	bottom: -10px;
	left: 0;
	width: 100%;
	height: 250px;
	background-image: url(${waveImg});
	background-color: #015ecc;
	background-size: 1000px 250px;
	animation: ${SecondWaveAnimation} 5s linear infinite;
	opacity: 0.05;
	animation-delay: -3s;
`;

export default Rank;

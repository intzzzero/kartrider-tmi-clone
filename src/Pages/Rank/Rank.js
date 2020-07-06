import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import waveImg from '../../Images/wave.png';
import { rankInfo } from '../../config.js';

const topThree = rankInfo.splice(0, 3);

const Rank = () => {
	return (
		<RankContatiner>
			<UserCardContainer>
				{topThree.map(user => (
					<UserCard key={'top three' + user.name}>
						<p>{user.name}</p>
					</UserCard>
				))}
			</UserCardContainer>
			<WaveBg>
				<FirstWave />
				<SecondWave />
			</WaveBg>
		</RankContatiner>
	);
};

const RankContatiner = styled.div`
	position: relative;
	top: 48px;
	width: 100%;
	max-height: 100%;
	background-color: #fafafa;
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
	border-radius: 15px;
	background-color: #fff;

	p {
		font-size: 1.2rem;
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

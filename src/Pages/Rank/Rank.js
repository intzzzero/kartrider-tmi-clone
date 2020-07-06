import React, { memo, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const RankContatiner = styled.div`
	position: relative;
	top: 48px;
	width: 100%;
	max-height: 100%;
	background-color: #fafafa;
`;

const WaveBg = styled.div`
	width: 100%;
	height: 655px;
	position: relative;
	overflow: hidden;
	background-color: #015ecc;
`;

const firstWave = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 200px;
	background: url('https://www.covert.design/wp-content/uploads/2019/10/white-background-wave-2-e1571450471217.png');
	background-size: 1200px 200px;
	opacity: 0.025;
	animation: ${animateFirstWave} 15s linear infinite;
	opacity: 0.05;
	animation-delay: 0s;
	bottom: 0;
`;

const secondWave = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 200px;
	background: url('https://www.covert.design/wp-content/uploads/2019/10/white-background-wave-2-e1571450471217.png');
	background-size: 1200px 200px;
	opacity: 0.025;
	animation: animateSecondWave 5s linear infinite;
	opacity: 0.075;
	animation-delay: -3s;
	bottom: 0;
`;

const animateFirstWave = keyframes`
		0% {
			background-position-x: 0;
		}
		100% {
			background-position-x: 1200px;
		}
`;

const animateSecondWave = keyframes`
		0% {
			background-position-x: 0;
		}
		100% {
			background-position-x: 1200px;
		}
`;

const Rank = memo(() => {
	return (
		<RankContatiner>
			<WaveBg>
				<firstWave />
				<secondWave />
			</WaveBg>
		</RankContatiner>
	);
});

export default Rank;

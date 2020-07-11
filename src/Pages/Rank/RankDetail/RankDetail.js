import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

import Navigation from '../../../Components/Navigation/Navigation';
import Footer from '../../../Components/Footer/Footer';
import RankChart from './RankChart/RankChart';

import { rankInfo } from '../../../config.js';

const RankDetail = () => {
	const [ speedMode, setSpeedMode ] = useState(2);

	useEffect(() => {
		console.log();
	}, []);

	const defaultUserImg =
		'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/42c729e64e31aea803e4881432f7b95129ce97535c29e4f9a72919a9f267b418.png';

	const speedModeText = [ '빠름', '매우빠름', '무한부스터' ];

	return (
		<RankDetailContainer>
			<NameCard />
			<RainbowBg />
			<section>
				<CircleChartWrapper />
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
	);
};

const primaryColor = '#0177fe';

const RankDetailContainer = styled.main`
	width: 100%;
	height: 100%;
	background-color: #fafafa;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	& > section {
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		div {
			width: 325px;
			height: 265px;
			background-color: #fff;
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
	background-color: #fff;
	border-left: 4px solid ${primaryColor};
	margin-bottom: 25px;
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

const CircleChartWrapper = styled.div``;

const CurrentFiftyGames = styled.div`margin: 0 10px;`;

const CommentWrapper = styled.div``;

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

import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import CircleProgressProvider from '../CircleProgress/CircleProgressProvider';
import '../CircleProgress/CircleProgressResetStyle.css';
import { rankInfo } from '../../../config.js';

const TopUsers = () => {
	const topThree = rankInfo.slice(0, 3);

	return (
		<UserCardContainer>
			{topThree.map(user => (
				<UserCard to={`/rank/${user.rank}`} key={'top three' + user.name}>
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
									<CircularProgressbar value={value} text={`${value}%`} styles={retireRatioStyle} />
								)}
							</CircleProgressProvider>
						</CircleWrapper>
					</CircleContainer>
				</UserCard>
			))}
		</UserCardContainer>
	);
};

const primaryColor = '#0177fe';

const UserCardContainer = styled.article`
	width: 100%;
	height: 655px;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

const UserCard = styled(Link)`
	position: relative;
	top: 90px;
	margin: 20px;
	width: 250px;
	height: 250px;
	border-radius: 10px;
	background-color: #fff;
	cursor: pointer;

	&:hover {
		color: ${primaryColor};

		p,
		span {
			color: ${primaryColor};
		}
	}
`;

const UserNameWrapper = styled.div`
	border-bottom: 1px solid ${primaryColor};
	cursor: pointer;

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
		color: ${primaryColor};
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
		strokeLinecap: 'butt',
		transition: 'stroke-dashoffset 1.4s ease 0s'
	},
	text: {
		fill: '#F62558'
	}
};

export default TopUsers;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rankInfo } from '../../../config.js';

const OtherUsers = () => {
	const otherUsers = rankInfo.slice(3);

	return (
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
	);
};

const primaryColor = '#0177fe';

const OtherUserCardAnimation = keyframes`
	0% {
		opacity: 0;
		top: 50px;
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
	animation-delay: 0.5s;

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
	height: 42px;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.05);
	margin-bottom: 12px;
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover {
		border: 1px solid ${primaryColor};
		color: ${primaryColor};
	}

	div:first-child {
		font-size: 1rem;
		width: 120px;
		text-align: center;
		font-weight: 600;
	}

	div:last-child {
		font-size: 1rem;
		width: 200px;
		text-align: left;
		margin-left: 100px;
	}
`;

export default OtherUsers;

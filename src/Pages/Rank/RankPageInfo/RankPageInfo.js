import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const RankPageInfo = ({ rankingGuideToggle }) => {
	const [ playMode, setPlayMode ] = useState(1);
	const [ speedMode, setSpeedMode ] = useState(1);

	const speedModeText = [ '매빠', '빠름', '무부' ];

	return (
		<RankInfoTextContainer>
			<div className='monthlyRanking'>
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
					<div>
						<IndividualPlayModeBtn playMode={playMode === 1} onClick={() => setPlayMode(1)}>
							<FontAwesomeIcon className='userIcon' icon={faUser} />
							개인전
						</IndividualPlayModeBtn>
						<TeamPlayModeBtn playMode={playMode === 2} onClick={() => setPlayMode(2)}>
							<FontAwesomeIcon className='usersIcon' icon={faUsers} />
							팀전
						</TeamPlayModeBtn>
					</div>
					<div className='seperateLine' />
					<div className='rightBtnWrapper'>
						{speedModeText.map((text, idx) => (
							<SpeedModeBtn
								speedMode={speedMode === idx + 1}
								onClick={() => setSpeedMode(idx + 1)}
								key={text + idx}
							>
								{text}
							</SpeedModeBtn>
						))}
					</div>
				</div>
			</div>
			<button className='rankingGuide' onClick={rankingGuideToggle}>
				랭킹가이드
			</button>
		</RankInfoTextContainer>
	);
};

const deepPrimaryColor = '#015ecc';

const RankInfoTextContainer = styled.article`
	position: absolute;
	width: 70%;
	height: 140px;
	z-index: 50;
	top: 110px;
	left: 15%;
	color: #fff;
	letter-spacing: -0.7px;
	padding: 0 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.monthlyRanking {
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
			display: flex;
			justify-content: space-between;
			align-items: flex-end;

			.seperateLine {
				width: 1px;
				height: 15px;
				background-color: #fff;
				margin-right: 12px;
				margin-bottom: 5px;
			}

			div {
				margin-top: 20px;
				margin-right: 12px;
				display: flex;

				button:hover {
					background-color: #fff;
					color: ${deepPrimaryColor};
				}
			}

			.rightBtnWrapper {
				display: flex;

				button {
					width: 40px;
					height: 25px;
					font-size: 0.75rem;
					display: flex;
					justify-content: center;
					align-items: center;
					outline: none;
					cursor: pointer;

					&:first-child {
						border-radius: 5px 0 0 5px;
						border-right: none;
					}

					&:last-child {
						border-radius: 0 5px 5px 0;
						border-left: none;
					}
				}
			}
		}
	}

	.rankingGuide {
		width: 70px;
		height: 22px;
		background-color: ${deepPrimaryColor};
		color: #fff;
		border: 1px solid #fff;
		font-size: 0.74rem;
		font-weight: 600;

		&:hover {
			background-color: #fff;
			color: ${deepPrimaryColor};
		}
	}
`;

const IndividualPlayModeBtn = styled.button`
	width: 104px;
	height: 25px;
	border: 1px solid #fff;
	font-size: 0.75rem;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	cursor: pointer;
	border-radius: 5px 0 0 5px;
	color: ${props => (props.playMode ? deepPrimaryColor : '#fff')};
	background-color: ${props => (props.playMode ? '#fff' : deepPrimaryColor)};

	.userIcon {
		margin-right: 10px;
		font-size: 0.9rem;
	}
`;

const TeamPlayModeBtn = styled.button`
	width: 104px;
	height: 25px;
	border: 1px solid #fff;
	font-size: 0.75rem;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	cursor: pointer;
	border-radius: 0 5px 5px 0;
	color: ${props => (props.playMode ? deepPrimaryColor : '#fff')};
	background-color: ${props => (props.playMode ? '#fff' : deepPrimaryColor)};

	.usersIcon {
		margin-right: 10px;
		font-size: 1rem;
	}
`;

const SpeedModeBtn = styled.button`
	border: 1px solid #fff;
	color: ${props => (props.speedMode ? deepPrimaryColor : '#fff')};
	background-color: ${props => (props.speedMode ? '#fff' : deepPrimaryColor)};
`;

export default RankPageInfo;

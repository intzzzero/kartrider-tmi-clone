import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router';
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

import Navigation from '../../../Components/Navigation/Navigation';
import Footer from '../../../Components/Footer/Footer';
import { CircularProgressbar } from 'react-circular-progressbar';
import CircleProgressProvider from '../CircleProgress/CircleProgressProvider';
import CurrentGamesChart from './CurrentGamesChart/CurrentGamesChart';
import Comment from './Comment/Comment';
import CurrentTrackChart from './CurrentTrackChart/CurrentTrackChart';

import { urls, defaultUserImg, speedModeText, trackMockData } from '../../../config';

const RankDetail = () => {
  const [character, setCharacter] = useState({});
  const [record, setRecord] = useState({});
  const [speedMode, setSpeedMode] = useState(2);
  const [playMode, setPlayMode] = useState(1);
  const id = Number(useParams().id);

  useEffect(() => {
    fetch(urls.rankDetailUrl + id)
      .then((res) => res.json())
      .then((res) => {
        setRecord(res);
        setCharacter(res.character);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Navigation />
      <RankDetailContainer>
        <NameCard>
          <div className='flagBg' />
          <div className='nameCardWrapper'>
            <img src={character.img || defaultUserImg} alt={character.nickname} />
            <div className='infoWrapper'>
              <h2>{character.nickname || '배찌'}</h2>
            </div>
          </div>
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
        <RainbowBg>
          <p>{character.nickname || '배찌'}와 채팅하기</p>
        </RainbowBg>
        <section>
          <CircleChartWrapper>
            <div className='textWrapper'>
              <p>
                <span>종합</span> 전적
              </p>
              <p>500전 245승 255패</p>
            </div>
            <CircleContainer>
              <CircleWrapper>
                <p>승률</p>
                <CircleProgressProvider valueStart={0} valueEnd={record.win_ratio * 100 || 56}>
                  {(value) => <CircularProgressbar value={value} text={`${value}%`} />}
                </CircleProgressProvider>
              </CircleWrapper>

              <CircleWrapper>
                <p>완주율</p>
                <CircleProgressProvider valueStart={0} valueEnd={100 - record.retire_ratio || 90}>
                  {(value) => <CircularProgressbar value={value} text={`${value}%`} styles={completeRatioStyle} />}
                </CircleProgressProvider>
              </CircleWrapper>

              <CircleWrapper>
                <p>리타이어율</p>
                <CircleProgressProvider valueStart={0} valueEnd={record.retire_ratio || 10}>
                  {(value) => <CircularProgressbar value={value} text={`${value}%`} styles={retireRatioStyle} />}
                </CircleProgressProvider>
              </CircleWrapper>
            </CircleContainer>
          </CircleChartWrapper>
          <CurrentGames>
            <div className='textWrapper'>
              <p>
                <span>순위변동</span> 추이
              </p>
              <p>
                지난 500경기 <span>1.92위</span> 최근 50경기 <span>1.90위</span>
              </p>
            </div>
            <div className='chartWrapeer'>
              <CurrentGamesChart userCurrentRank={record.rank_list_50} />
            </div>
          </CurrentGames>
          <CommentWrapper>
            <Comment />
          </CommentWrapper>
        </section>
        <div className='speedModeBtnWrapper'>
          {speedModeText.map((mode, idx) => (
            <SpeedModeBtn speedMode={speedMode === idx + 1} onClick={() => setSpeedMode(idx + 1)} key={mode + idx}>
              {mode}
            </SpeedModeBtn>
          ))}
        </div>
        <TrackInfoContainer>
          <div className='trackChartWrapper'>
            <div className='chartWrapper'>
              <CurrentTrackChart />
            </div>
            <div className='trackWrapper'>track</div>
          </div>
          <div className='trackCardWrapper'>
            {trackMockData.map((track, idx) => (
              <div key={track + idx}>
                <p>
                  <span>{idx + 1}</span>
                  {track}
                </p>
              </div>
            ))}
          </div>
        </TrackInfoContainer>
      </RankDetailContainer>
      <Footer />
    </Fragment>
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
  padding: 50px 0;

  section {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .speedModeBtnWrapper {
    width: 70%;
    height: 50px;
    display: flex;
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.3);
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 50px;
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
      width: 330px;
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
  border: 1px solid ${primaryColor};
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border-radius: 5px 0 0 5px;
  color: ${(props) => (props.playMode ? '#fff' : primaryColor)};
  background-color: ${(props) => (props.playMode ? primaryColor : '#fff')};

  .userIcon {
    margin-right: 10px;
    font-size: 0.9rem;
  }
`;

const TeamPlayModeBtn = styled.button`
  width: 104px;
  height: 25px;
  border: 1px solid ${primaryColor};
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  color: ${(props) => (props.playMode ? '#fff' : primaryColor)};
  background-color: ${(props) => (props.playMode ? primaryColor : '#fff')};

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
  display: flex;
  align-items: center;

  p {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 50px;
    cursor: pointer;
  }
`;

const CircleChartWrapper = styled.div`
  width: 325px;
  height: 265px;
  margin-bottom: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .textWrapper {
    width: 90%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 13px;
    margin-top: 18px;

    span {
      color: ${primaryColor};
    }
  }
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100%;
`;

const CircleWrapper = styled.div`
  width: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2.5px;

  p {
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 20px;
  }
`;

const retireRatioStyle = {
  path: {
    stroke: '#F62558',
    strokeLinecap: 'butt',
    transition: 'stroke-dashoffset 1.4s ease 0s',
  },
  text: {
    fill: '#F62558',
  },
};

const completeRatioStyle = {
  path: {
    stroke: '#9CD728',
    strokeLinecap: 'butt',
    transition: 'stroke-dashoffset 0.5s ease 0s',
  },
  text: {
    fill: '#9CD728',
  },
};

const CurrentGames = styled.div`
  width: 325px;
  height: 265px;
  margin: 0 10px 10px 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .textWrapper {
    width: 90%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    p:first-child {
      font-size: 0.85rem;
    }

    p:last-child {
      font-size: 0.7rem;
    }

    span {
      color: ${primaryColor};
    }
  }
`;

const CommentWrapper = styled.div`
  width: 325px;
  height: 265px;
  margin-bottom: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .textWrapper {
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    font-weight: 600;
    padding-bottom: 12px;
    margin-top: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    span {
      color: ${primaryColor};
    }
  }
`;

const SpeedModeBtn = styled.div`
  width: 90px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  ${(props) =>
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

const TrackInfoContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .trackChartWrapper {
    width: 325px;
    height: auto;
    background-color: #fafafa;

    div:first-child {
      height: 265px;
      background-color: #fff;
    }

    div:last-child {
      height: 265px;
      background-color: #fff;
    }
  }

  .trackCardWrapper {
    width: 660px;
    height: auto;

    div {
      height: 90px;
      margin-bottom: 20px;
      background-color: #fff;
    }
  }
`;

export default RankDetail;

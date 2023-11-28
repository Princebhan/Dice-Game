import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import victorySound from './victory-sound.mp3';
import youWonGif from './you-won.gif';

const TotalScore = ({ score, onReset }) => {
  const totalScoreToWin = 1;
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    if (score >= totalScoreToWin) {
      playVictorySound();
      setTimeout(() => {
        setShowGif(true);
        showWinAlert(); // Call the function to show the alert
      }, 1000);
    }
  }, [score, totalScoreToWin]);

  const playVictorySound = () => {
    const audio = new Audio(victorySound);
    audio.play();
  };

  const showWinAlert = () => {
    setTimeout(() => {
      alert('Congratulations! You won!');
    }, 500); // Adjust the timeout duration as needed
  };

  const handleReset = () => {
    setShowGif(false);
    onReset(); // Call the provided onReset function to reset the score
  };

  return (
    <ScoreContainer>
      {showGif ? (
        <div>
          <GifImage src={youWonGif} alt="You Won" />
          <ResetButton onClick={handleReset}>Reset Game</ResetButton>
        </div>
      ) : (
        <>
          <h1>{score}</h1>
          <p>Total score</p>
          <p>Total score to win: {totalScoreToWin} or more</p>
        </>
      )}
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 300px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const GifImage = styled.img`
  max-width: 100%;
  max-height: 300px;
`;

const ResetButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

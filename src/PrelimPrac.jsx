import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const MatrixGame = () => {
  const [grid, setGrid] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [scores, setScores] = useState(Array(9).fill(0));
  const [lastRolled, setLastRolled] = useState(null);
  const [rolling, setRolling] = useState(false); 
  const [intervalId, setIntervalId] = useState(null); 

  const handleStartRoll = () => {
    setRolling(true);
    const id = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 9) + 1;

      
      const newGrid = [...grid];
      if (lastRolled !== null) {
        newGrid[lastRolled] = lastRolled + 1; 
      }
      newGrid[randomNum - 1] = 0; 
      setGrid(newGrid);
      setLastRolled(randomNum - 1);
    }, 100); 

    setIntervalId(id);
  };

  const handleStopRoll = () => {
    clearInterval(intervalId);
    setRolling(false);
    
    if (lastRolled !== null) {
      const newScores = [...scores];
      newScores[lastRolled] += 1;
      setScores(newScores);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalId); 
  }, [intervalId]);

  return (
    <div style={{ textAlign: 'center' }}>
      
      <div style={{ marginBottom: '10px' }}>
        {grid.map((num, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '5px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f0f0f0', fontSize: '20px' }}>
            {index + 1}
          </div>
        ))}
      </div>

     
      <div style={{ marginBottom: '20px' }}>
        {scores.map((score, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '5px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f0f0f0', fontSize: '20px' }}>
            {score}
          </div>
        ))}
      </div>

      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px', justifyContent: 'center' }}>
        {grid.map((num, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#e0e0e0',
              fontSize: '30px',
              border: '1px solid #ccc',
            }}
          >
            {num}
          </div>
        ))}
      </div>

      
      <Button
        variant="contained"
        color="primary"
        onClick={rolling ? handleStopRoll : handleStartRoll}
        style={{ marginTop: '20px' }}
      >
        {rolling ? 'STOP ROLL' : 'START ROLL'}
      </Button>
    </div>
  );
};

export default MatrixGame;

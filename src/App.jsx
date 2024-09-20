import React, { useState } from 'react';
import './App.css';

function App() {
  const initialNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Initial zeros for the top row
  const keypadNumbers = [1, 2, 3, 0, 5, 6, 7, 8, 9]; // The keypad layout

  const [topNumbers, setTopNumbers] = useState(initialNumbers);

  const handleTileClick = (num) => {
    // On tile click, update the first zero in the top row with the clicked number
    const newTopNumbers = [...topNumbers];
    const firstZeroIndex = newTopNumbers.indexOf(0);
    if (firstZeroIndex !== -1) {
      newTopNumbers[firstZeroIndex] = num;
      setTopNumbers(newTopNumbers);
    }
  };

  const handleRoll = () => {
    // Reset the top numbers to zero
    setTopNumbers(initialNumbers);
  };

  return (
    <div className="App">
      {/* Display the top row with 1 to 9 numbers */}
      <div className="top-row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div key={num} className="box">
            {num}
          </div>
        ))}
      </div>
      {/* Display the second row of zeros */}
      <div className="top-row">
        {topNumbers.map((num, index) => (
          <div key={index} className="box">
            {num}
          </div>
        ))}
      </div>

      {/* Display the keypad grid */}
      <div className="grid-container">
        {keypadNumbers.map((num) => (
          <div key={num} className="grid-item" onClick={() => handleTileClick(num)}>
            {num}
          </div>
        ))}
      </div>

      {/* Start Roll button */}
      <button className="roll-button" onClick={handleRoll}>
        START ROLL
      </button>
    </div>
  );
}

export default App;

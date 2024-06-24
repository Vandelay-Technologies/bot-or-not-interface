import React, { useState } from 'react';
import { startGame } from '../services/api';

const GameWindow = ({ user }) => {
  const [selectedToken, setSelectedToken] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = async () => {
    const success = await startGame(selectedToken);
    if (success) {
      setGameStarted(true);
    } else {
      alert('Failed to start game');
    }
  };

  return (
    <div>
      <h1>Game Window</h1>
      {!gameStarted ? (
        <>
          <select onChange={(e) => setSelectedToken(e.target.value)}>
            <option value="">Select Token</option>
            <option value="token1">Token 1</option>
            <option value="token2">Token 2</option>
          </select>
          <button onClick={handleStartGame}>Start Game</button>
        </>
      ) : (
        <div>Game has started!</div>
      )}
    </div>
  );
};

export default GameWindow;

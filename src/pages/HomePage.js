import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Home</h1>
      {!user ? (
        <div>Please log in to start playing.</div>
      ) : (
        <Link to="/game">
          <button>Start Game</button>
        </Link>
      )}
    </div>
  );
};

export default HomePage;

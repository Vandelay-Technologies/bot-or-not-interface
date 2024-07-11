import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const HomePage = ({ user, balance }) => {
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

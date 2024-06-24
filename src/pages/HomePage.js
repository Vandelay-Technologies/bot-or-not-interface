import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const HomePage = ({ user, balance }) => {
  return (
    <div>
      <Header user={user} balance={balance} />
      <main>
        {!user ? (
          <div>Please log in to start playing.</div>
        ) : (
          <Link to="/game">
            <button>Start Game</button>
          </Link>
        )}
      </main>
    </div>
  );
};

export default HomePage;

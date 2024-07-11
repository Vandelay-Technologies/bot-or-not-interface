import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import CreditBalancePage from './pages/CreditBalancePage';
import GameWindow from './pages/GameWindow';

function App() {
  // temporary vars
  const user = { username: 'player' };
  const balance = 1000;

  return (
    <Router>
      <div>
        <Header user={user} balance={balance} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/credit-balance" element={<CreditBalancePage />} />
            <Route path="/game" element={<GameWindow />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

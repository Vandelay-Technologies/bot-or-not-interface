import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import CreditBalancePage from './pages/CreditBalancePage';
import GameWindow from './pages/GameWindow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/credit-balance" element={<CreditBalancePage />} />
        <Route path="/game" element={<GameWindow />} />
      </Routes>
    </Router>
  );
}

export default App;

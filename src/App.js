import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import CreditBalancePage from './pages/CreditBalancePage';
import GameWindow from './pages/GameWindow';
import { getProfile } from './services/api';

function App() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getProfile().then(profile => setUser(profile)).catch(() => localStorage.removeItem('token'));
    }
  }, []);

  return (
    <Router>
      <div>
        <Header user={user} balance={balance} />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {user ? (
                <>
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/credit-balance" element={<CreditBalancePage />} />
                  <Route path="/game" element={<GameWindow />} />
                </>
              ) : null}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

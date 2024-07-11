import React from 'react';
import './assets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import CreditBalancePage from './pages/CreditBalancePage';
import GameWindow from './pages/GameWindow';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/credit-balance" element={<CreditBalancePage />} />
                <Route path="/game" element={<GameWindow />} />
              </Route>
            </Routes>
          </div>
        </main>
      </Router>
    </UserProvider>
  );
}

export default App;

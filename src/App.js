import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import CreditBalancePage from './pages/CreditBalancePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/credit-balance" component={CreditBalancePage} />
      </Switch>
    </Router>
  );
}

export default App;

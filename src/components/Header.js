import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import CreditBalanceIcon from './CreditBalanceIcon';

const Header = ({ user, balance }) => {
  return (
    <header>
      <nav>
        <ul>
          {!user ? (
            <li><LoginButton /></li>
          ) : (
            <>
              <li><Link to="/profile">{user.username}</Link></li>
              <li><CreditBalanceIcon balance={balance} /></li>
              <li><LogoutButton /></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

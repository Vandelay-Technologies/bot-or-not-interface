import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import CreditBalanceIcon from './CreditBalanceIcon';

const Header = ({ user, balance }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BOT OR NOT</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {!user ? (
              <li className="nav-item"><LoginButton /></li>
            ) : (
              <>
                <li className="nav-item"><Link to="/profile">{user.username}</Link></li>
                <li className="nav-item"><CreditBalanceIcon balance={balance} /></li>
                <li className="nav-item"><LogoutButton /></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
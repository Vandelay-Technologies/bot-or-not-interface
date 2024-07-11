import React from 'react';
import { Link } from 'react-router-dom';

const CreditBalanceButton = () => {
  return (
    <Link className="nav-link" to="/credit-balance">
      Credits
    </Link>
  );
};

export default CreditBalanceButton;

import React from 'react';
import { Link } from 'react-router-dom';

const CreditBalanceIcon = ({ balance }) => {
  return (
    <Link className="nav-link" to="/credit-balance">
      {balance} Credits
    </Link>
  );
};

export default CreditBalanceIcon;

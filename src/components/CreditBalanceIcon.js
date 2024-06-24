import React from 'react';
import { Link } from 'react-router-dom';

const CreditBalanceIcon = ({ balance }) => {
  return (
    <Link to="/credit-balance">
      <div className="balance-icon">
        {balance} Credits
      </div>
    </Link>
  );
};

export default CreditBalanceIcon;

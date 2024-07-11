import React, { useContext } from 'react';
import { refreshBalances } from '../api/user';
import { UserContext } from '../context/UserContext';

const CreditBalancePage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleRefresh = async () => {
    const updatedBalances = await refreshBalances();
    setUser({ ...user, balances: updatedBalances });
  };

  return (
    <div>
      <h1>Credit Balance</h1>
      <ul>
        {user ? user.balances.map((balance, index) => (
          <li key={index}>
            {balance.token}: {balance.amount}
          </li>
        )) : null}
      </ul>
      <button onClick={handleRefresh}>Refresh Balances</button>
      <button>Top Up</button>
      <button>Withdraw</button>
    </div>
  );
};

export default CreditBalancePage;

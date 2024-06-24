import React, { useState, useEffect } from 'react';
import { getBalances, refreshBalances } from '../services/api';

const CreditBalancePage = () => {
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    async function fetchBalances() {
      const balanceData = await getBalances();
      setBalances(balanceData);
    }

    fetchBalances();
  }, []);

  const handleRefresh = async () => {
    const updatedBalances = await refreshBalances();
    setBalances(updatedBalances);
  };

  return (
    <div>
      <h1>Credit Balance</h1>
      <ul>
        {balances.map((balance, index) => (
          <li key={index}>
            {balance.token}: {balance.amount}
          </li>
        ))}
      </ul>
      <button onClick={handleRefresh}>Refresh Balances</button>
      <button>Top Up</button>
      <button>Withdraw</button>
    </div>
  );
};

export default CreditBalancePage;

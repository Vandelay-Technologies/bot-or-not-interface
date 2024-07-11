import React, { useContext } from 'react';
import { loginWithWallet } from '../api/auth';
import { getProfile, getBalances } from '../api/profile';
import { UserContext } from '../context/UserContext';

const LoginButton = () => {
  const { setUser, setBalances } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const success = await loginWithWallet();
      if (success) {
        const profile = await getProfile();
        setUser(profile);
        const balances = await getBalances();
        setBalances(balances);
        window.location.reload();
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return <button className="btn btn-primary" onClick={handleLogin}>Login</button>;
};

export default LoginButton;

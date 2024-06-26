import React from 'react';
import { loginWithWallet } from '../services/api';

const LoginButton = () => {
  const handleLogin = async () => {
    try {
      await loginWithWallet();
      window.location.reload();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;

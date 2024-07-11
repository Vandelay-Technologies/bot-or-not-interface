import React, { useContext } from 'react';
import { loginWithWallet } from '../api/auth';
import { getUser } from '../api/user';
import { UserContext } from '../context/UserContext';

const LoginButton = () => {
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const success = await loginWithWallet();

      if (success) {
        const user = await getUser();
        setUser(user);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return <button className="btn btn-primary" onClick={handleLogin}>Login</button>;
};

export default LoginButton;

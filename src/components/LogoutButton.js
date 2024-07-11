import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const LogoutButton = () => {
  const { logout } = useContext(UserContext);

  return <button className="btn btn-secondary" onClick={logout}>Logout</button>;
};

export default LogoutButton;

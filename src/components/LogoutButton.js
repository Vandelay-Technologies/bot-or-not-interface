import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;

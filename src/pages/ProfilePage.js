import React, { useEffect, useContext } from 'react';
import { getUser, updateUser } from '../api/user';
import { UserContext } from '../context/UserContext';

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function refreshUser() {
      const userData = await getUser();
      setUser(userData);
    }

    refreshUser();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user);
    alert('Profile updated successfully');
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Wallet Address</label>
          <input type="text" name="walletAddress" value={user.walletAddress} readOnly />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;

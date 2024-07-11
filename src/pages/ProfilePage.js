import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../api/profile';

const ProfilePage = () => {
  const [profile, setProfile] = useState({ walletAddress: '', username: '' });

  useEffect(() => {
    async function fetchProfile() {
      const profileData = await getProfile();
      setProfile(profileData);
    }

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(profile);
    alert('Profile updated successfully');
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Wallet Address</label>
          <input type="text" name="walletAddress" value={profile.walletAddress} readOnly />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={profile.username} onChange={handleChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;

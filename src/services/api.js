import axios from 'axios';
import Web3 from 'web3';

const API_URL = 'http://localhost:5000';

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  console.error("Metamask not detected");
}

export const loginWithWallet = async () => {
  try {
    await window.ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    const walletAddress = accounts[0];

    const response = await axios.post(`${API_URL}/login`, { walletAddress });
    if (response.data.success) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return true;
    }
  } catch (error) {
    console.error('Login failed', error);
  }
  return false;
};

export const getProfile = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  });
  return response.data;
};

export const updateProfile = async (profile) => {
  const user = JSON.parse(localStorage.getItem('user'));
  await axios.put(`${API_URL}/profile`, profile, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  });
};

export const getBalances = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.get(`${API_URL}/balances`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  });
  return response.data;
};

export const refreshBalances = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.post(`${API_URL}/balances/refresh`, {}, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  });
  return response.data;
};

export const startGame = async (token) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.post(`${API_URL}/game/start`, { token }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  });
  return response.data.success;
};

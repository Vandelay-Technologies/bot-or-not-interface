import axios from 'axios';
import Web3 from 'web3';

const API_URL = process.env.REACT_APP_API_URL;

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

    // Request a message to sign
    const { data: { message } } = await axios.post(`${API_URL}/auth/request-signature`, { walletAddress });

    // Sign the message
    const signature = await web3.eth.personal.sign(message, walletAddress);

    // Verify the signature and get JWT token
    const response = await axios.post(`${API_URL}/auth/login`, { walletAddress, signature });
    if (response.data.success) {
      localStorage.setItem('token', response.data.token);
      return true;
    }
  } catch (error) {
    console.error('Login failed', error);
  }
  return false;
};

export const getProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const updateProfile = async (profile) => {
  const token = localStorage.getItem('token');
  await axios.put(`${API_URL}/profile`, profile, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getBalances = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/balances`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const refreshBalances = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_URL}/balances/refresh`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const startGame = async (token) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_URL}/game/start`, { token }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data.success;
};

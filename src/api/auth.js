import axiosInstance from './axios';

const { Web3 } = require('web3');

let web3;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
} else {
    console.error("Metamask not detected");
}

export const loginWithWallet = async () => {
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const accounts = await web3.eth.getAccounts();
        const walletAddress = accounts[0];

        const response = await axiosInstance.post(`/auth/request-signature`, { walletAddress });
        const message = response.data.message;

        if (typeof message !== 'string') {
            throw new Error('Invalid message format');
        }

        if (!web3.utils.isAddress(walletAddress)) {
            throw new Error('Invalid wallet address');
        }

        const signature = await web3.eth.personal.sign(message, walletAddress, '');

        const loginResponse = await axiosInstance.post(`/auth/login`, { walletAddress, signature });

        if (loginResponse.data.success) {
            localStorage.setItem('token', loginResponse.data.token);
            return true;
        }
    } catch (error) {
        console.error('Error details:', error);

        if (error.message && error.message.includes('validation')) {
            console.error('Validation error details:', error);
        }
        if (error.code === 4001) {
            console.error('User rejected the request');
        } else if (error.code === -32603) {
            console.error('Internal JSON-RPC error', error);
        } else {
            console.error('Login failed', error);
        }
    }
    return false;
};

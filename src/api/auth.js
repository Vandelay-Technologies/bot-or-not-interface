import axiosInstance from './axios';
import Web3 from 'web3';

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

        const { data: { message } } = await axiosInstance.post(`/auth/request-signature`, { walletAddress });
        const signature = await web3.eth.personal.sign(message, walletAddress);
        const response = await axiosInstance.post(`/auth/login`, { walletAddress, signature });
        
        if (response.data.success) {
            localStorage.setItem('token', response.data.token);
            return true;
        }
    } catch (error) {
        console.error('Login failed', error);
    }
    return false;
};

import axiosInstance from './axios';

export const getProfile = async () => {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.get(`/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const updateProfile = async (profile) => {
    const token = localStorage.getItem('token');
    await axiosInstance.put(`/profile`, profile, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const getBalances = async () => {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.get(`/balances`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const refreshBalances = async () => {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.post(`/balances/refresh`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

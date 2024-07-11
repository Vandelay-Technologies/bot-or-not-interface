import axiosInstance from './axios';

export const getUser = async () => {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.get(`/user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const updateUser = async (user) => {
    const token = localStorage.getItem('token');
    await axiosInstance.put(`/user`, user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
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

import axiosInstance from './axios';

export const startGame = async (gameToken) => {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.post(`/game/start`, { gameToken }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data.success;
};

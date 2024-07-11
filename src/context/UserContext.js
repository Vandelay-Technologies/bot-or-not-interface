import React, { createContext, useState, useEffect } from 'react';
import { getUser } from '../api/user';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const refreshUserData = async () => {
            const user = await getUser();
            setUser(user);
        }
        const token = localStorage.getItem('token');

        if (token) {
            refreshUserData();
        }
    }, []);

    function logout() {
        localStorage.removeItem('token');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };

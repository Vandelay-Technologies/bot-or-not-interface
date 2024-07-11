import React, { createContext, useState, useEffect } from 'react';
import { getBalances, getProfile } from '../api/profile';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [balances, setBalances] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            getProfile()
                .then(profile => setUser(profile))
                .catch(() => localStorage.removeItem('token'));

            getBalances()
                .then(balances => setBalances(balances))
                .catch(() => localStorage.removeItem('token'));
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, balances, setBalances }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };

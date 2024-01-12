import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState(null);

    const login = (userData, adminStatus = false) => {
        setUser(userData);
        setIsAdmin(adminStatus);
    };
    return (
        <UserContext.Provider value={{ user, login, isAdmin }}>
            {children}
        </UserContext.Provider>
    );
};

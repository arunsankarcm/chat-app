import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId'); // Assuming you're storing userId
        if (token) {
            setIsLoggedIn(true);
            setUserId(userId);
        }
        setLoading(false);
    }, []);

    const login = (token, userId) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('userId', userId); // Store userId
        setIsLoggedIn(true);
        setUserId(userId);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId'); // Remove userId
        setIsLoggedIn(false);
        setUserId(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userId, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);


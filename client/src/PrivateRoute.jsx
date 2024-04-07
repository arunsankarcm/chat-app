import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authcontext';

const PrivateRoute = ({ children }) => {
    const { isLoggedIn, loading } = useAuth();
    if (loading) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
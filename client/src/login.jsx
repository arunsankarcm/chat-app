import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './authcontext';
import { useNavigate } from 'react-router-dom';
import './css/login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/users/login', { username, password });
            const { token, userId } = response.data; 
            localStorage.setItem('authToken', token);
            localStorage.setItem('userId', userId); // Store the userId
            login(token, userId); // Pass the userId to the login function
            navigate('/layout');
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    alert('Incorrect username or password.');
                } else {
                    console.error('Login error:', error);
                }
            } else {
                console.error('Login error:', error);
            }
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <p className="signup-link">
                Not registered yet? <span onClick={() => navigate('/signup')}>Signup</span>
            </p>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username.length < 5 || password.length < 6) {
            setError('Username must be at least 5 characters and password must be at least 6 characters.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/users/signup', { username, password });
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data.message);
            } else {
                console.error('Signup error:', error);
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="signup-container">
            {error && <div className="error-message">{error}</div>}
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    required
                    minLength={5}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    required
                    minLength={6}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
            <p className="login-link">
                Already a user? <span onClick={() => navigate('/login')}>Login</span>
            </p>
        </div>
    );
};

export default Signup;

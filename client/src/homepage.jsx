import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/HomePage.css';

function HomePage() {
    let navigate = useNavigate(); 

    return (
        <div className="homepage">
            <h1>Chat-App</h1>
            <div className="buttons">
                <button className="button" onClick={() => navigate('/login')}>Login</button>
                <button className="button" onClick={() => navigate('/signup')}>Signup</button>
            </div>
        </div>
    );
}

export default HomePage;

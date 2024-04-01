import React from 'react';
import Sidebar from './sidebar';
import ChatInterface from './ChatInterface';
import './css/Layout.css';

function Layout() {
    return (
        <div className="layout">
            <Sidebar />
            <ChatInterface />
        </div>
    );
}

export default Layout;

import React, { useState } from 'react';
import ConversationContext from './ConversationContext';
import Sidebar from './sidebar';
import ChatInterface from './ChatInterface';
import './css/Layout.css';

function Layout() {
    const [currentConversationId, setCurrentConversationId] = useState(null);

    return (
        <div className="layout">
            <ConversationContext.Provider value={{ currentConversationId, setCurrentConversationId }}>
                <Sidebar />
                {<ChatInterface />}
            </ConversationContext.Provider>
        </div>
    );
}

export default Layout;

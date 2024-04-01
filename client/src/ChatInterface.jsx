import React from 'react';
import './css/ChatInterface.css'; // Make sure to create this CSS file

function ChatInterface() {
    // Assuming a selected contact's name is passed as a prop
    return (
        <div className="chat-interface">
            <div className="chat-header">
                {/* Here would be the selected contact's name */}
                <div className="contact-name">Chat Name</div>
            </div>
            {/* Chat messages would go here */}
            <div className="chat-messages"></div>
            {/* Text input for typing new messages */}
            <div className="chat-input">
                <input type="text" placeholder="Type a message..." />
            </div>
        </div>
    );
}

export default ChatInterface;

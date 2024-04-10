import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './css/ChatInterface.css';
import { useAuth } from './authcontext';
import ConversationContext from './ConversationContext';

function ChatInterface() {
    const [messages, setMessages] = useState([]);
    const { userId } = useAuth();
    const { currentConversationId } = useContext(ConversationContext);

    useEffect(() => {
        const fetchMessages = async () => {
            if (currentConversationId) {
                try {
                    const response = await axios.get(`http://localhost:3000/message/${currentConversationId}`);
                    setMessages(response.data);
                } catch (error) {
                    console.error('Error fetching messages:', error);
                }
            } else {
                setMessages([]); // Clear messages if there's no current conversation ID
            }
        };

        fetchMessages();
    }, [currentConversationId]);

    return (
        <div className="chat-interface">
            <div className="chat-header">
                <div className="contact-name">Chat Name</div>
            </div>
            <div className="chat-messages">
                {messages.map((message) => (
                    <div key={message._id} className={`message-item ${message.sender === userId ? 'my-message' : ''}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type a message..." />
            </div>
        </div>
    );
}

export default ChatInterface;

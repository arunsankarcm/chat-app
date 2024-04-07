import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is installed
import './css/ChatInterface.css';
import { useAuth } from './authcontext'; // import useAuth

function ChatInterface() {
    // States for messages and the current user
    const [messages, setMessages] = useState([]);
    const { userId } = useAuth(); // Get the userId from the context

    // Effect to fetch messages from the backend when the component mounts
    useEffect(() => {
        const conversationId = '660c57162fdb09be9deebc89'; // Replace with the actual conversation ID
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/message/${conversationId}`);
                setMessages(response.data); // Assuming the backend returns an array of message objects
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []); // Empty dependency array to run only on mount

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

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './css/ChatInterface.css';
import { useAuth } from './authcontext';
import ConversationContext from './ConversationContext';

function ChatInterface() {
    const [messages, setMessages] = useState([]);
    const { userId } = useAuth();
    const { currentConversationId } = useContext(ConversationContext);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        console.log('Effect running', currentConversationId);
        const fetchMessages = async () => {
            if (currentConversationId) {
                try {
                    const response = await axios.get(`http://localhost:3000/message/${currentConversationId}`);
                    setMessages(response.data);
                } catch (error) {
                    console.error('Error fetching messages:', error);
                }
            } else {
                console.log('No conversation selected');
                setMessages([]);
            }
        };

        fetchMessages();
    }, [currentConversationId]);

    console.log('Rendering', messages);

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
                {messages.length === 0 && <div>No messages yet.</div>}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={() => console.log('Send message:', newMessage)}>Send</button>
            </div>
        </div>
    );
}

export default ChatInterface;

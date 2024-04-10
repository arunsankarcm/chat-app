import React, { useEffect, useState, useContext } from 'react';
import ConversationContext from './ConversationContext'; // This should be the context you created
import './css/Sidebar.css'; // Make sure to create this CSS file
import { useAuth } from './authcontext'; // import useAuth


function Sidebar() {
    const [users, setUsers] = useState([]);
    const { setCurrentConversationId } = useContext(ConversationContext);
    const { userId } = useAuth(); // Get the userId from the context`

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users/get-users');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // Assuming you have access to the logged-in user's ID, filter out the logged-in user
                const filteredUsers = data.filter(user => user._id !== userId);
                setUsers(filteredUsers);
            } catch (error) {
                console.error("Could not fetch users:", error);
            }
        };

        fetchUsers();
    }, [userId]); // Add userId as a dependency if it's dynamic
 // The empty array as the second argument ensures this effect only runs once

    async function handleUserClick(clickedUserId) {
        // Assuming you have a state or context that holds the logged-in user's ID
        // Fetch the list of conversations for the logged-in user
        let conversations = [];
        try {
            const response = await fetch(`http://localhost:3000/conversation/${userId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            conversations = await response.json(); // Expecting an array of conversation objects
        } catch (error) {
            console.error("Could not fetch conversations:", error);
            return;
        }

        // Find the conversation ID where both the logged-in user and the clicked user are members
        let conversationId = null;
        for (let conversation of conversations) {
            if (conversation.members.includes(clickedUserId)) {
                conversationId = conversation._id;
                break;
            }
        }

        // If a conversation with the clicked user exists, set the conversation ID in the context
        if (conversationId) {
            setCurrentConversationId(conversationId);
        } else {
            setCurrentConversationId(null);
            console.error("No conversation found with the clicked user");
        }
    }


    return (
        <div className="sidebar">
            <div className="contacts">
                {users.map(user => (
                    <div
                        key={user._id}
                        className="contact-item"
                        onClick={() => handleUserClick(user._id)} // Attach the click event handler here
                    >
                        <div className="contact-avatar"></div> {/* Placeholder for the user avatar */}
                        <div className="contact-name">{user.username}</div> {/* Display the user's name */}
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Sidebar;
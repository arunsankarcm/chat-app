import React, { useEffect, useState } from 'react';
import './css/Sidebar.css'; // Make sure to create this CSS file

function Sidebar() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users/get-users');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Could not fetch users:", error);
            }
        };

        fetchUsers();
    }, []); // The empty array as the second argument ensures this effect only runs once

    return (
        <div className="sidebar">
            <div className="contacts">
                {users.map(user => (
                    <div key={user._id} className="contact-item"> {/* Assuming _id is the unique identifier from MongoDB */}
                        <div className="contact-avatar"></div>
                        <div className="contact-name">{user.username}</div> {/* Display the username */}
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Sidebar;
import React from 'react';
import './css/Sidebar.css'; // Make sure to create this CSS file

function Sidebar() {
    const contacts = ['Ali', 'Begum', 'Esma', 'Zeynep', 'genus_indigo', 'levi']; // Dummy data for the contacts

    return (
        <div className="sidebar">
            <div className="contacts">
                {contacts.map(contact => (
                    <div key={contact} className="contact-item">
                        <div className="contact-avatar"></div> {/* Placeholder for avatar */}
                        <div className="contact-name">{contact}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;

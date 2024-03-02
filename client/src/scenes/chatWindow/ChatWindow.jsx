import React, { useState } from 'react';
import { selectToken } from 'state/authSlice';
import { useSelector } from 'react-redux';
import Navbar from 'scenes/navBar/Index';
import Sidebar from 'scenes/sidebar/Sidebar'; 
import SendMessageForm from './SendMessageForm'; 

const ChatWindow = () => {
    const [selectedUser, setSelectedUser] = useState(null); 

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        <>
        <Navbar />
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar onUserSelect={handleUserSelect} />
            {selectedUser && (
                <SendMessageForm receiverId={selectedUser.id} />
            )}
        </div>
        </>
      
    );
}

export default ChatWindow;

import React, { useState } from 'react';
import Sidebar from 'scenes/sidebar';
import ChatWindow from './Messages';
import SendMessageForm from './SendMessageForm'; 

function ChatApp() {
    const [selectedUser, setSelectedUser] = useState(null); 

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar onUserSelect={handleUserSelect} />
            {selectedUser && (
                <ChatWindow selectedUser={selectedUser} />
            )}
            {selectedUser && (
                <SendMessageForm receiverId={selectedUser.id} />
            )}
        </div>
    );
}

export default ChatApp;

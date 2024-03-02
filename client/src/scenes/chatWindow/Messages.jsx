import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectToken } from 'state/authSlice';

const Messages = ({ selectedUser }) => {
    const [messages, setMessages] = useState([]);
    const token = useSelector(selectToken);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                if (!selectedUser) {
                    return; 
                }
    
                const response = await fetch(`http://localhost:3001/messages/${selectedUser.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch messages");
                }
                const data = await response.json();
                console.log("messages", data);
                setMessages(data);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
    
        fetchMessages();
    
    }, [selectedUser, token]); 
    

    return (
        <div style={{ flexGrow: 1, overflowY: "auto", padding: 16}}>
            <Typography variant="h6" gutterBottom>
                {/* Chat with {selectedUser.firstName} */}
            </Typography>
            <List>
                {messages.map(message => (
                    <ListItem key={message.id} style={{ marginBottom: 8, padding: '8px 16px', borderRadius: 16, backgroundColor: '#e0e0e0' }}>
                        <ListItemText primary={message.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Messages;


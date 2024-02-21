import React, { useEffect, useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { io } from 'socket.io-client';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const socket = io('http://localhost:3001');

  useEffect(() => {
    // Initialize socket connection
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    // Listen for incoming chat messages
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Emit the 'chat message' event with the message content
      socket.emit('chat message', {
        senderId: 'user123', // Example sender ID
        receiverId: 'user456', // Example receiver ID
        content: inputMessage.trim(),
      });
      setInputMessage('');
    }
  };

  return (
    <div>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message.content} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="Message"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <Button onClick={handleSendMessage}>Send</Button>
    </div>
  );
};

export default ChatComponent;

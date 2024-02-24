import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { fetchGetMessages } from 'state/messageSlice';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from 'scenes/sidebar';

const ChatWindow = ({ selectedUser }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);

  useEffect(() => {
    dispatch(fetchGetMessages(selectedUser.id));
  }, [dispatch, selectedUser.id])

return (
      <div sx={{ flexGrow: 1, overflowY: "auto", padding: 16}}>
          <Typography variant="h6" gutterBottom>
            Chat with {selectedUser.name}
          </Typography>
          <List>
            {messages.map(message => (
              <ListItem key={message.id} sx={{ marginBottom: 8, padding: '8px 16px', borderRadius: 16, backgroundColor: '#e0e0e0' }}>
                  <ListItemText primary={message.text} />
              </ListItem>
            ))}
          </List>
  </div>
)
}
export default ChatWindow;

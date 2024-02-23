import React, { useEffect, useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { io } from 'socket.io-client';
import Navbar from 'scenes/navBar/Index';
import Sidebar from './Sidebar';

const ChatComponent = () => {

return (
  <div>
      <Navbar />
      <Sidebar />
  </div>
)
}
export default ChatComponent;

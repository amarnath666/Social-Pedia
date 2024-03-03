import Navbar from 'scenes/navBar/Index';
import Sidebar from 'scenes/sidebar/Sidebar';
import MessageContainer from 'scenes/messages/MessageContainer';
import { Box } from '@mui/system';

const ChatApp = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          height: ['450px', '550px'],
          borderRadius: '16px', 
          overflow: 'hidden',
          backgroundColor: (theme) => theme.palette.grey[400],
          backdropFilter: 'blur(8px)',
          backgroundClip: 'padding-box',
          backgroundOpacity: 0,
        }}
      >
        <Sidebar  />
        <MessageContainer /> 
      </Box>
    </>
  );
};

export default ChatApp;

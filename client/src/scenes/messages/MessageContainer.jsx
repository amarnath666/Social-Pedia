import Navbar from 'scenes/navBar/Index';
import Sidebar from 'scenes/sidebar/Sidebar';
import Messages from 'scenes/messages/Messages'; // Updated import

const MessageContainer = () => {
  const noChatSelected = true;

  return (
    <>
   
      <div
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
       
        <Messages /> {/* Updated component */}
      </div>
    </>
  );
};

export default MessageContainer;

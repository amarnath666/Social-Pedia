import Message from './Message';
import { Box } from '@mui/material';

const Messages = () => {
  return (
    <div sx={{ px: 4, flex: 1, overflowY: 'auto' }}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;

import Conversation from './Conversation';
import { Box } from '@mui/material';

const Conversations = () => {
  return (
    <Box
      sx={{
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        width: "300px"
      }}
    >
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </Box>
  );
};

export default Conversations;

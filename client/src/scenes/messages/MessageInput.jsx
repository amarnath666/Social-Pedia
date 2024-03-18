import { TextField, IconButton } from '@mui/material';
import { BsSend } from 'react-icons/bs';
import { useState } from 'react';
import useSendMessage from 'scenes/hooks/useSendMessage';
import { Box } from '@mui/material';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form sx={{ px: 4, my: 3 }}>
      <Box sx={{ position: 'relative' }}>
        <TextField
          type="text"
          variant="outlined"
          fullWidth
          sx={{
            bgcolor: 'gray.700',
            borderRadius: '999px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '999px',
              '& fieldset': {
                borderColor: 'gray.600',
              },
              '&:hover fieldset': {
                borderColor: 'gray.400',
              },
            },
          }}
          placeholder="Send a message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}
        >
          <BsSend />
        </IconButton>
      </Box>
    </form>
  );
};

export default MessageInput;

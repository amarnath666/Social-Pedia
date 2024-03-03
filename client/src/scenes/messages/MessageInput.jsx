import { TextField, IconButton } from '@mui/material';
import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
  return (
    <form sx={{ px: 4, my: 3 }}>
      <div sx={{ position: 'relative' }}>
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
        />
        <IconButton
          type="submit"
          sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}
        >
          <BsSend />
        </IconButton>
      </div>
    </form>
  );
};

export default MessageInput;

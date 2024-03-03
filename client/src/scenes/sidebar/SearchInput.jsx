import { TextField, IconButton } from '@mui/material';
import { IoSearchSharp } from 'react-icons/io5';

const SearchInput = () => {
  return (
    <form
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <TextField
        type="text"
        placeholder="Search…"
        variant="outlined"
        sx={{
          borderRadius: '30px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '30px',
          },
        }}
      />
      <IconButton
        type="submit"
        aria-label="search"
        sx={{
          backgroundColor: '#039be5',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0288d1',
          },
        }}
      >
        <IoSearchSharp sx={{ width: 24, height: 24 }} />
      </IconButton>
    </form>
  );
};

export default SearchInput;

import { Box } from '@mui/system';
import SearchInput from './SearchInput';
import Conversations from './Conversations';

const Sidebar = () => {
  return (
    <Box
      sx={{
        flex: 'none',
        width: '320px', 
        borderRight: '1px solid #656565',
        padding: '20px 10px',
        backgroundColor: '#fff',
      }}
    >
      <SearchInput />
      <div
        sx={{
          height: 1,
          backgroundColor: '#d4d4d4',
          margin: '10px 0',
        }}
      />
      <Conversations />
    </Box>
  );
};

export default Sidebar;

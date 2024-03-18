import React from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

const Conversation = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          borderRadius: '16px',
          padding: 2,
          paddingTop: 1,
          cursor: 'pointer',
          
          '&:hover': {
            backgroundColor: 'primary.main',
          },
        }}
      >
        <Avatar
          sx={{
            width: 12 * 5,
            height: 12 * 5,
            borderRadius: '50%',
          }}
          src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
          alt="user avatar"
        />
        <Box sx={{ flex: 1 }}>
          <div sx={{ display: 'flex', gap: 3 }}>
            <p sx={{ fontWeight: 'bold', color: 'gray.200' }}>John Doe</p>
          </div>
        </Box>
      </Box>
      <Divider sx={{ margin: 0, padding: 0, height: 1 }} />
    </>
  );
};

export default Conversation;

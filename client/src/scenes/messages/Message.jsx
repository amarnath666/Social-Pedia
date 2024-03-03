import { Avatar } from '@mui/material';

const Message = () => {
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Avatar
          src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
          alt="user avatar"
          sx={{ width: 40, height: 40 }}
        />
        <div
          sx={{
            borderRadius: '10px',
            backgroundColor: '#2196f3',
            color: 'white',
            padding: '8px 12px',
            maxWidth: '70%',
            wordWrap: 'break-word',
            textAlign: 'left',
          }}
        >
          HI whats up
        </div>
      </div>
    </div>
  );
};

export default Message;

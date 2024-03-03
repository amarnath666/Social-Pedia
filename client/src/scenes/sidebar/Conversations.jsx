import Conversation from './Conversation';

const Conversations = () => {
  return (
    <div
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
    </div>
  );
};

export default Conversations;

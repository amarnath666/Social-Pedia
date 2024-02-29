import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSendMessage } from 'state/messageSlice';

const SendMessageForm = ({ receiverId }) => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSendMessage({ id: receiverId, message }));
        setMessage(""); // Clear the input field after sending the message
    }

    return (
        <form onSubmit={handleMessageSubmit}>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    );
}

export default SendMessageForm;

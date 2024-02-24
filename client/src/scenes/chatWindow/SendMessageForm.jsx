import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSendMessage } from './messageSlice';

const SendMessageForm = ({ receiverId }) => {
    const dispatch = useDispatch();
    const [message, setMessage] = state("");

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSendMessage({ receiverId, message }));
        setMessage(""); // Clear the input field after sending the message
    }

    return (
            <Form onSubmit={handleMessageSubmit}>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Send</button>
            </Form>
    );
}

export default SendMessageForm;
import React, { useState } from 'react';
import { selectToken } from 'state/authSlice';
import { useSelector } from 'react-redux';

const SendMessageForm = ({ receiverId }) => {
    const [message, setMessage] = useState("");
    const token = useSelector(selectToken);

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/messages/send/${receiverId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ message })
            });
            if (!response.ok) {
                throw new Error("Failed to send message");
            }
            console.log("sendMessages", response)
            setMessage(""); // Clear the input field after sending the message
        } catch (error) {
            console.error("Error sending message:", error);
        }
    }

    return (
        <form onSubmit={handleMessageSubmit}>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    );
}

export default SendMessageForm;

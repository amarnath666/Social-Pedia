import React, { useEffect } from "react";
import Navbar from "scenes/navBar/Index";
import { io } from "socket.io-client";

const Messages = () => {
    useEffect(() => {
        const socket = io("http://localhost:3001");
        // Handle socket events
        socket.on("connect", () => {
            console.log("Connected to server");
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <Navbar />
        </div>
    )
}

export default Messages;
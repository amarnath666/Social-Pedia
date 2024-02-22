// import { Server } from "socket.io";
// import http from "http";
// import express from express;

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: ["http://localhost:3000"],
//         methods: ["GET", "POST"],
//     },
// });

// // Export a function that takes the `io` instance as an argument
// export function initializeChat(io) {
//     // Socket.IO event handling
//     io.on("connection", (socket) => {
//         console.log("A user connected");

//         // Handle new chat message
//         socket.on("chat message", async (messageData) => {
//             const { senderId, receiverId, content } = messageData;

//             try {
//                 // Save the message to the database
//                 const chat = await Chat.findOneAndUpdate(
//                     { participants: { $all: [senderId, receiverId] } },
//                     { $push: { messages: { sender: senderId, content } } },
//                     { upsert: true, new: true }
//                 );

//                 // Broadcast the new message to all connected clients
//                 io.emit("chat message", chat);
//             } catch (error) {
//                 console.error("Error saving chat message:", error);
//             }
//         });

//         // Handle disconnection
//         socket.on("disconnect", () => {
//             console.log("A user disconnected");
//         });
//     });
// }

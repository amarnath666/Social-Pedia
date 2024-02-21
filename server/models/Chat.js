import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }],
    messages: [{
        sender:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: "true"
        },
        content: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }]
});

const Chat = mongoose.model("Chat", ChatSchema);
export default Chat;

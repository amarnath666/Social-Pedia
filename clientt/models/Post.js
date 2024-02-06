import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        // Likes for the post, stored as a Map with user IDs as keys and Boolean values
        likes: {
            type: Map,
            of: Boolean,
        },
        // Comments for the post, stored as an Array with default value as an empty array
        comments: {
            type: Array,
            default: [],
        }
},
// Add timestamps to track when the post was created and updated
{ timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
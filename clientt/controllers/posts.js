import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
    try{
        // Extract necessary information from the request body
        const { userId, description, picturePath } = req.body;
        
        // Find the user associated with the user
        const user = await User.findById(userId);

        // Create a new post object with user information
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {}, // Initialize likes as an empty object
            comments: [] // Initiatlize comments as an empty array
        })
        await newPost.save();

        // Retrieve all posts (including the newly created one) from the database
        const post = await Post.find();
        res.status(201).json(post);
    } catch (err) {
        res.status(409).json({ message: err.message})
    }
}

/* READ */
export const getFeedPosts = async (req, res) => {
    try {
        // Retrieve all posts from database
        const post = await Post.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getUserPosts = async (req, res) => {
    try {
        // Extract the userId from the request parameters
        const { userId } = req.params;

        // Retrieve posts associated with the specified userId from the database
        const post = await Post.find({ userId });
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

/* UPDATE */
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        // Extract the userId from the request body
        const { userId } = req.body;

        // Find the post with the specified id in the database
        const post = await Post.findById(id);

            // Check if the user has already liked the post
        const isLiked = post.likes.get(userId);

        // Toggle the like status
        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        // Update the post in the database with the modified likes
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true } // Return the updated post
        );

        res.status(200).json();
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
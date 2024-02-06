import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
    try {
        // Extract user ID from request parameters
        const { id } = req.params;
        // Find user in the database by ID
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        
        //Use Promise.all and map to fetch information about each friend by their ID
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        // Format friend data
        const formattedFriends = friends.map(
            ({_id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        )
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/* UPDATE */
export const addRemoveFriend = async (req, res) => {
    try {
        //Extract user and friend IDs from request parameters
        const { id, friendId } = req.params;
        
        //Retrieve user and friend from the database by their respective IDs
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        // Check if the friend is already in the user's friends list
        if (user.friends.includes(friendId)) {
            // If yes, remove the friend from user's friends and vice versa
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        } else {
            // If not, add the friend to user's friends and vice versa
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        // Save the updated user and friend objects back to the database
        await user.save();
        await friend.save();

        const formattedFriends = friends.map(
            ({_id, firstName, lastName, occupation, location, picturePath }) => {
                return { id, lastName, occupation, loca, picturePath }
            }
        );

        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


import User from "../models/User.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user.id;

        const filteredUsers = await User.find({ _id: {$ne: loggedInUser } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error(" ")
        res.status(error, "internal server error");
    }
}
import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */

// GET request to retrieve user information by ID
router.get("/:id", verifyToken, getUser);

// GET request to retrieve user's friends by ID
router.get("/id/friends", verifyToken, getUserFriends);

/* UPDATE */

// PATCH request to add or remove a friend for a user
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);
export default router;
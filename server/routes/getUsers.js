import express from "express";
import { getUsersForSidebar } from "../controllers/getUsers.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getUsersForSidebar);

export default router;
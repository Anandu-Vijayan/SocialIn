import express from "express";
import { deleteUser, followUser, getUser, UnFollowUser, updateUser,getAllUsers } from "../Controllers/UserController.js";



const router = express.Router();


router.get('/:id',getUser)
router.get('/:id',getAllUsers)
router.delete('/:id',deleteUser)

export default router;


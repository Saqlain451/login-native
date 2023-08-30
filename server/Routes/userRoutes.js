import express from "express";
import {addUser, validateUser} from "../Controller/userController.js";

const userRouter = new express.Router();

userRouter.post("/register", addUser)
userRouter.post("/login", validateUser)

export default userRouter;

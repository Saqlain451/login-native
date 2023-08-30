import express from "express";
import {addUser} from "../Controller/userController.js";
const userRouter = new express.Router();

userRouter.post("/register",addUser)


export default userRouter;

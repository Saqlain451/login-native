import express from "express";
import {addUser, validateUser} from "../Controller/userController.js";
import isAuth from "../middleware/auth.js";

const userRouter = new express.Router();

userRouter.post("/register", addUser)
userRouter.post("/login", validateUser)
userRouter.get("/home", isAuth, (req, res) => {
    const {name, email, pass, cPass} = req.existUser;
    const userData = {name, email};
    res.json({user: userData});
})

export default userRouter;

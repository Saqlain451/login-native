import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import user from "../Model/userModel.js";
dotenv.config();
const isAuth = async (req, res, next)=>{
    try{
        // console.log(req.headers.authorization);
        if (req.headers && req.headers.authorization){
           const token = req.headers.authorization.split(" ")[1];
           const decode = jwt.verify(token,process.env.SECRET_KEY);
           const existUser = await user.findOne({_id : decode._id})
            if (!existUser){
                return res.json({err : "Unauthorized Access"})
            }
            req.existUser = existUser;
            next()
        }
    }catch(error){
        console.error(error)
        res.json({err : "Unauthorized Access"})
    }
}

export default isAuth;

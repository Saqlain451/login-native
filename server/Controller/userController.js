import user from "../Model/userModel.js";
import bcrypt from 'bcryptjs';

const addUser = async (req, res) => {
    const {name, email, pass, cPass} = req.body

    if (!name || !email || !pass || !cPass) {
        return res.status(401).json({err: "All The field should be filled"})
    }
    try {
        const existUser = await user.findOne({email});
        if (existUser) {
            return res.status(401).json({err: "You are already registered"})
        } else if (pass !== cPass) {
            return res.status(401).json({err: "Password and Confirm Password should be same"})
        }
        const hashPass = await bcrypt.hash(pass, 12);
        const hashCPass = await bcrypt.hash(cPass, 12);
        const newUser = new user({...req.body, pass: hashPass, cPass: hashCPass})
        await newUser.save()
        res.status(201).json({msg: "Congrats! You are Registered on our Platform"})

    } catch (error) {
        console.error(error)
        res.status(401).json({err: error})
    }
}

const validateUser = async (req, res) => {
    const {email, pass} = req.body
    if (!email || !pass) {
        return res.status(401).json({err: "All the feild should be filled"})
    }
    try {
        const existUser = await user.findOne({email});
        const compPass = await bcrypt.compare(pass, existUser.pass);
        if (!existUser || !compPass) {
            return res.status(401).json({err: "Invalid Credential"})
        }
        await res.status(201).json({msg: "Log in successful"})
    } catch (error) {
        await res.status(401).json({err: error})
    }
}

export {addUser, validateUser}

import user from "../Model/userModel.js";

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

        const newUser = new user({...req.body})
        await newUser.save()
        res.status(201).json({msg: "Congrats! You are Registered on our Platform"})

    } catch (error) {
        console.error(error)
        res.status(401).json({err: error})
    }
}

export {addUser}
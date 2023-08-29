import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import createConnection from "./Db/Connection.js";
import user from "./Model/userModel.js";

const app = express();
dotenv.config();

app.use(express.json())
app.use(cors())

const port = process.env.PORT;

createConnection(process.env.MONGO_URI);

app.get("/", (req, res) => {
    res.json({msg: "app is running fine at home page"});
});

app.listen(port, () => {
    console.log("app is runnig at port 4000");
});

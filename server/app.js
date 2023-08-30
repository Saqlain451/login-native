import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import createConnection from "./Db/Connection.js";
import userRouter from "./Routes/userRoutes.js";

const app = express();
dotenv.config();

app.use(express.json())
app.use(cors()) 
app.use(userRouter)

const port = process.env.PORT;

createConnection(process.env.MONGO_URI);

app.listen(port, () => {
    console.log("app is running at port 4000");
});


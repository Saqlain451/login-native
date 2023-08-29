import mongoose from 'mongoose'
const createConnection =async (uri)=>{
    try{
        await mongoose.connect(uri);
        console.log("Mongodb Connected");
    }catch(error){
        console.error(error)
    }
}
export  default createConnection;

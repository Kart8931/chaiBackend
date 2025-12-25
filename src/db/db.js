import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";


const connectDB = async () => {
    try{
    const connectionInstance  = await mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected: ${connectionInstance.connection.host}`);
    }
    catch(err){
        console.error("Database connection error:", err);
        process.exit(1);
    }
}

export default connectDB;
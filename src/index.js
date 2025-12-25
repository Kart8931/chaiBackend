import dotenv from "dotenv";


import connectDB from "./db/db.js";
dotenv.config({path:"./.env"});



connectDB();















/*
import express from "express";
const app =express();
(async () =>{
    try {
      await  mongoose.connect(`${process.env.MongoDB_URI}/${
       DB_NAME}
        }`

        )
        app.on("error",(error)=>{
            console.log("error in db connection",error);
            throw error;
        })

        app.listen(process.env.PORT ,(req,res)=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}) () */

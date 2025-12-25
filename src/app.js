import express from  'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();

// middlewares (err,req,res,next)
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json({
    limit: '10kb'
}));
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

// performing crud opeartions on cookies 
app.use(cookieParser());

export {app}
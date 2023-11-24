import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('Connected to DB')
}).catch((error)=>{
    console.error(error)
})
const app = express();
app.listen(3000,()=>{
    console.log('Server is running at port 3000!!!')
})
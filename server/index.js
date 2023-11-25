import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './route/userRoute.js';
import authRouter from './route/authRouth.js';
dotenv.config();

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Connected to DB')
}).catch((error) => {
    console.error(error)
})
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('Server is running at port 3000!!!')
})

app.use('/api/v1', userRouter);
app.use('/api/v1/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
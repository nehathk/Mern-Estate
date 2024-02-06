import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'




mongoose.connect(process.env.MONGO).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err); 
});
const app= express();
app.listen(3000,()=>{
    console.log('server running on port 3000');
})
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.use('/api/user' ,userRouter);
app.use('/api/auth',authRouter);
app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500;
    const message= err.message ||`Internal server error`;
    return res.status(statusCode).json({
        succcess:false,
        statusCode,
        message


    });
});

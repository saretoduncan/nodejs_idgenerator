import express from "express";
import bodyParser from "body-parser"
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js'

const app = express();
dotenv.config();
app.use(bodyParser.json);
app.use('/api', userRouter)
app.listen(process.env.PORT, ()=> console.log(`server listening on port http://localhost:${process.env.PORT}`));

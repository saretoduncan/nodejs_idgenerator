import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./src/routers/userRouter.js";

const app = express();




dotenv.config();

app.listen(process.env.PORT, () =>
  console.log(`server listening on port http://localhost:${process.env.PORT}`),
);
app.use(bodyParser.json());
app.use("/api", userRouter);

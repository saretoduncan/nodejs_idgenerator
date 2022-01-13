import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./src/routers/userRouter.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
const app = express();

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "user id generator",
      version: "3.0.3",
      description: "get user id as a response by enterering a name as a param",

      contact: {
        name: "Duncan",

        email: "duncan.moiyo@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routers/*.js"],
};

const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

dotenv.config();

app.listen(process.env.PORT, () =>
  console.log(`server listening on port http://localhost:${process.env.PORT}`),
);
app.use(bodyParser.json());
app.use("/api", userRouter);

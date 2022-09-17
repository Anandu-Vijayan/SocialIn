import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from './Routes/AuthRoute.js'
import { errorHandler, notFound } from "./middilewares/errorMiddleware.js";
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import cors from "cors"
import UploadeRoute from "./Routes/UplodeRoute.js"



//Routes
const app = express();





//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(notFound)
// app.use(errorHandler)
app.use(cors())
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log(`listing portNumber ${process.env.PORT} And DB connected`)))
  .catch((error)=>console.log(error));



  //usage of routes
  app.use('/auth',AuthRoute) 
  app.use('/user',UserRoute) 
  app.use('/post',PostRoute)
  app.use('/upload',UploadeRoute)
   
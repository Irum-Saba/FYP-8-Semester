import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./Routes/AuthRoutes.js"
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoute.js"
import UploadRoute from "./Routes/UploadRoute.js"
import ChatRoute from "./Routes/ChatRoute.js"
//Routes

const app=express();
//serve images to pubic
app.use(express.static('public'))
app.use("/images",express.static("images"))


//Midlleware
app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))
app.use(cors())
dotenv.config()
mongoose.connect(
    process.env.MONGO_DB,
    {useNewUrlParser:true, useUnifiedTopology:true}
    )
.then(()=>app.listen(process.env.PORT, ()=> console.log(`Listening at ${process.env.PORT}`)))
.catch((error)=>console.log(error));


//usage of routes
app.use('/auth', AuthRoutes)
app.use('/user', UserRoute)
app.use('/post', PostRoute)
app.use('/upload', UploadRoute)
app.use("/chat", ChatRoute);
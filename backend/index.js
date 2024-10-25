import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

// const express=require("express");
// const dotenv=require("dotenv")
const app=express();
// const port=3000;
app.use(cors());

app.use(express.json());

dotenv.config();//we can run our server on port 4001(.env)
const PORT=process.env.PORT||4000;
const URI=process.env.MongoDBURI;

//connect to mongodb
try{
   mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   });
   console.log("connnected to mongoD")
}
catch(error){
   console.log("Error",error)
}

//defining route
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
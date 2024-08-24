const express = require("express")
const app=express()
const mongodb = require("./config/db")
const multer = require("multer")
const PORT = 4000;
const Routes=require("./routes/userroutes")
const userschema = require("./controlles/register")
const cors=require("cors")

mongodb()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors(
    {
        origin:["learning-dashboard-nine.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
))

//just connfirm

app.use("/",Routes)

// git remote add origin https://github.com/sathish-entri/Learning-Dashboard.git




app.listen(PORT,()=>{
    console.log("port is listening")
})
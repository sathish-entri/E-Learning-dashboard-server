const mongoose=require("mongoose")
const newcoursesschema = require("../models/newcoursesschema")


async function allcourses(req,res){
    console.log("hello")
    const courses= await newcoursesschema.find()
    console.log(courses)
    if(courses){
        res.status(200).send(courses)
    }else{
        res.status(200).send("ella")
        console.log("ella")
    }
    
}
module.exports=allcourses
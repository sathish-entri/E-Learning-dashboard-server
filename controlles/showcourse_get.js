const mongoose=require("mongoose")
const newcoursesschema = require("../models/newcoursesschema")

async function showcourseget(req,res){

    const course= await newcoursesschema.findById(req.params.id)
    // console.log(course)
    if(course){
        res.status(200).send(course)
    }
}

module.exports=showcourseget
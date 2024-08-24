// const express=require("express")
const mongoose=require("mongoose")
const classschema=require("../models/classschema")

async function classroom(req,res){
 const{classname,batch,subject,language,studentlist}=req.body
 console.log(req.body)
 const{id}=req.user
 if(!classname || !batch || !subject || !language || !studentlist){
    res.status(400).send("all field are manitory")
    console.log("all field manitory")
 }else{
    const classes =classschema.create({
        user:id,
        classname:classname,
        batch:batch,
        subject:subject,
        language:language,
       studentlist:studentlist
    })
    if(classes){
        res.status(200).send("class create successfully")
        console.log("create sucsessfully")
    }else{
        console.log("clASS CREATE FAILED")
    }

 }
}

module.exports=classroom
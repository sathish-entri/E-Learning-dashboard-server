const mongoose=require("mongoose")
const userschema=require("../models/userschema")


async function educatorlist(req,res){
    const{role}=req.body
    const edudetails= await userschema.find({role:role})
    if(edudetails){
        res.status(200).send(edudetails)
    }
    // console.log(req.body)
}
module.exports=educatorlist
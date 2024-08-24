const userschema =require("../models/userschema")

async function peoplelist(req,res){
    const peoplelist = await userschema.find({role:{$in:["leaner", "coordinator"]}})
    res.status(200).send(peoplelist)

}   
module.exports=peoplelist
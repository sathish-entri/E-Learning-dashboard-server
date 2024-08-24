const userschema= require("../models/userschema")

 function picture(req,res){
    console.log(req.body)
    console.log(req.file)
    // const emailverified = await userschema.findOne({email:email})
    // console.log(emailverified)
 }
module.exports=picture
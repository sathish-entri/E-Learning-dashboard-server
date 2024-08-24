const userschema=require("../models/userschema")

async function classstudent(req,res){
    if(req.body){
        console.log(req.body)
        const studentlist= await userschema.find({_id:{$in:req.body}})
        res.status(200).send(studentlist)
    }else{
        res.send("please fresh")
        console.log("fresh")
    }

}

module.exports=classstudent
const assignmentschema= require("../models/assignmentschema")

async function classwork(req,res){
const {id} =req.user
const classroom = await assignmentschema.find({studentlist:id})
if(classroom){
    res.status(200).send(classroom)
}else{
    res.status(400).send("no classes")
}
}

module.exports=classwork
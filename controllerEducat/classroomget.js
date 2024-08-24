const classschema=require("../models/classschema")

async function classroomget(req,res){
    if(req.params.id){
        const classroom = await classschema.findById(req.params.id)
        res.status(200).send(classroom)
     }else{
        res.send("no id")
     }

    }

 
module.exports=classroomget
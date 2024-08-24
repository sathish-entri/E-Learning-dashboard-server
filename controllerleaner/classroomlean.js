    const classschema = require("../models/classschema")

    async function classroom(req,res){
    const {id} =req.user
    const classroom = await classschema.find({studentlist:id})
    if(classroom){
        res.status(200).send(classroom)
    }else{
        res.status(400).send("no classes")
    }
    }

    module.exports=classroom
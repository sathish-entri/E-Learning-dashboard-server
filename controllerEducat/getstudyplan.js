const studyplanschema=require("../models/studyplanschema")

async function getstudyplan(req,res){
  const studyplan = await studyplanschema.find({classroom_id:req.params.id})
  if(studyplan){
    res.status(200).send(studyplan)
  }
}

module.exports=getstudyplan
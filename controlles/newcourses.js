const newcoursesschema=require("../models/newcoursesschema")

async function newcorses(req,res){
const{title,description,language,creater,duration,content,subject}=req.body
// console.log(file)
console.log(req.body)
const{id}=req.user
   if(!title || !description || !language || !creater || !duration || !content || !subject){
    res.status(400).send("all field are manitory")
   }else{
    const user =newcoursesschema.create({
        user:id,
        title:title,
        subject:subject,
        description:description,
        language:language,
        creater:creater,
        duration:duration,
        content:content
    })
    if(user){
        res.status(200).send("course add  sucessfully")
        console.log("submited success")
    }else{
        res.status(400)
       
    }
   }
}
module.exports=newcorses
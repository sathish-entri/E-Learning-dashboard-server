const mongoose=require("mongoose")

const newcoursesschema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
    },
    title:{
        type:String
    },
    subject:{
        type:String
    },
    description:String,
    language:String,
    creater:String,
    duration:String,
    content:String
})
module.exports=mongoose.model("courses",newcoursesschema)
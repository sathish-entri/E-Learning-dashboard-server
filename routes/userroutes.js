const express = require("express")
const Routes =express.Router()
const assignmentschema = require("../models/assignmentschema")
const multer = require("multer")
const register =require("../controlles/register")
const login =require("../controlles/login")
const home = require("../controlles/home")
const homeauth=require("../middlewares/auth")
const newcorses=require("../controlles/newcourses")
const newcorsesAuth=require("../middlewares/newcoursesAuth")
const showcorses=require("../controlles/showcourses")
const {showcourseupdate,showcourseedit}=require("../controlles/showcourses_update")
const showcourseget=require("../controlles/showcourse_get")
const allcourses=require("../controlles/allcourses")
const educatorlist=require("../controlles/educatorlist")
const leanerlist=require("../controlles/leanerlist")
const classroom = require("../controllerEducat/classroom")
const homeeducat=require("../controllerEducat/homeeducat")
const peoplelist=require("../controlles/peoplelist")
const classroomget=require("../controllerEducat/classroomget")
const classstudent=require("../controllerEducat/classstudent")
const studyplan=require("../controllerEducat/studyplan")
const getstudyplan=require("../controllerEducat/getstudyplan")
const getstudycourse=require("../controllerEducat/getstudycourse")
const postassignment=require("../controllerEducat/postassignment")
const getassignment=require("../controllerEducat/getassignment")
const classroomlean=require("../controllerleaner/classroomlean")
const classworklean=require("../controllerleaner/classworklean")
const uploadassignment=require("../controllerleaner/uploadassignment")
const getoneassignment=require("../controllerEducat/getoneassignment")
const marks= require("../controllerleaner/marks")

// Routes.get("/",(req,res)=>{
//     res.send("hello")
// })
// authandicate.............................................................................
    Routes.post("/register",register)
    Routes.post("/login",login)
    Routes.post("/home",homeauth,home)

// cordinator...............................................................................
    Routes.get("/Peoplelist",peoplelist)
    Routes.post("/educatorlist",educatorlist)
    Routes.post("/leanerlist",leanerlist)
    Routes.get("/allcourses",allcourses)
    Routes.post("/coordinator/newcorses",newcorsesAuth,newcorses)
    Routes.post("/showcorses",newcorsesAuth,showcorses)
    Routes.post("/showcourses/update/:id",newcorsesAuth,showcourseupdate)
    Routes.post("/showcourses/edit/:id",newcorsesAuth,showcourseedit)
    Routes.post("/showcourses/get/:id",newcorsesAuth,showcourseget)

 //educator routes start...........................................................................................................................

    Routes.post("/educator/classroom",newcorsesAuth,classroom)
    Routes.post('/educator/home',newcorsesAuth,homeeducat)
    Routes.post("/educator/classroom/classstudent",classstudent)
    Routes.get("/educator/classroom/get/:id",classroomget)
    Routes.post("/educator/classroom/studyplan",studyplan)
    Routes.get("/educator/classroom/studyplan/get/:id",getstudyplan)
    Routes.get("/educator/classroom/studyplan/getcourse/:id",getstudycourse)
    Routes.post("/educator/classroom/assignment/post",postassignment)
    Routes.get("/educator/classroom/assignment/get/:id",getassignment)
    Routes.get("/educator/classroom/assignment/getone/:id",getoneassignment)

//leaner routes start................................................................................................................................
    Routes.post("/leaner/classroom",newcorsesAuth,classroomlean)
    Routes.post("/leaner/classwork",newcorsesAuth,classworklean)
    Routes.post("/educator/classroom/assignment/mark/:id",marks)
    

    let Storage = multer.diskStorage({
        destination:(req,res,cb)=>{
            cb(null,"./uploads")
        },
        filename:(req,file,cb)=>{
            const uniqueName =`${Date.now()}-${file.originalname}`;
            cb(null,uniqueName)
        }
       })
    
       let upload =multer({storage :Storage})
    
    Routes.post("/leaner/assignment/upload",upload.single("image"),homeauth,uploadassignment)

module.exports=Routes
const express =require('express');
const cors =require ('cors');
const mongoose = require("mongoose");

const app=express()
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())

mongoose.connect("mongodb://localhost:27017/MyLoginRegisterDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},).then(()=>console.log("DB Connected"))

 .catch((err)=>{console.error("err");})

//Routes

//user schema
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
})
// model
const User =new mongoose.model("User",userSchema)

app.post('/adminlogin' ,(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
     if(password===user.password){
        res.send({message:"login Sucessfull",user:user})
     }else{
        res.send({message:"password didn't match"})
     }
        }else{
            res.send({message:"Admin not registered"})
        }
    })
})
app.post('/facultylogin' ,(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
     if(password===user.password){
        res.send({message:"login Sucessfull",user:user})
     }else{
        res.send({message:"password didn't match"})
     }
        }else{
            res.send({message:"Faculty not registered"})
        }
    })
})
app.post('/studentlogin' ,(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
     if(password===user.password){
        res.send({message:"login Sucessfull",user:user})
     }else{
        res.send({message:"password didn't match"})
     }
        }else{
            res.send({message:"Student not registered"})
        }
    })
})
app.post("/adminregister" ,(req,res)=>{
    const {name,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"admin Already registered"})
        }else{
            const user=new User({
                name,
                email,
                password,
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"Sucessfully Registered"})
                }
            })
        }
    })
})

app.post("/facultyregister" ,(req,res)=>{
    const {name,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"faculty Already registered"})
        }else{
            const user=new User({
                name,
                email,
                password,
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"Sucessfully Registered"})
                }
            })
        }
    })
})

app.post("/studentregister" ,(req,res)=>{
    const {name,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"Student Already registered"})
        }else{
            const user=new User({
                name,
                email,
                password,
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"Sucessfully Registered"})
                }
            })
        }
    })
})

app.listen(3008,()=>{
    console.log("Be started at port 3008")
})

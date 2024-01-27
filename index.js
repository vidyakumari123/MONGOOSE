const express=require("express")
const { dbConnect}= require("./db/dbConnect");
const { userModel } = require("./db/model/userModel");
const bcrypt=require("bcrypt")
const salt=10


const PORT=4000;
const hostName="127.0.0.4"

const app=express()

app.use(express.json())

app.post("/newuser", async (req,res)=>{
const data=req.body
//    const user=new userModel(data)
 const {password}=data
 const hashedPassword=await bcrypt.hash(password,salt)
 const user=new userModel({...data, password:hashedPassword })
//    const response=await user.save()
await user.save()
   res.status(201).send("data saved on db")
})


app.get("/getusers",async(req,res)=>{
    const response= await userModel.find()
    res.send(response)
})

app.delete("/deleteuser",async(req,res)=>{
    const data= req.body
    const response= await userModel.deleteOne(data)
    res.send(response)

})

app.patch("/updateuser",async(req,res)=>{
    const data =req.body
    const response=await userModel.updateOne(data,{
        $set:{age:29,address:"jspider"}
    })
    res.send(response)
})
app.listen(PORT,hostName,()=>{
    console.log(`server running in http://${hostName}:${PORT}`)
    dbConnect()
})
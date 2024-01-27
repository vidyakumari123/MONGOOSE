const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017/A1mongoose"

const dbConnect=async()=>{
    try{
        await mongoose.connect(url)
        console.log("database connected");
    }catch (error){
        console.log("some error happend while connecting to DB");
    }
}
module.exports={ dbConnect}
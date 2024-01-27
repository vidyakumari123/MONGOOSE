const mongoose =require ("mongoose")

const userSchema= new mongoose.Schema({
    name:{ type: String , requires:true},
    password:{type: String,required:true},
    age:{ type: Number},
    address:{ type :String}
})

const userModel= mongoose.model("user", userSchema)

module.exports={userModel}
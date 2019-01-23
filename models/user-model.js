const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    username:String,
    googleId:String,
    thumbnail:String
});

module.exports=mongoose.model("User",UserSchema);

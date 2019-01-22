const express=require("express");
const router=express();

const authCheck=(req,res,next)=>{
    if(!res.user){
        res.redirect("/auth/login")
    }else{
        next();
    }
}

router.get("/",authCheck,(req,res)=>{
    res.send("you are logged in, this is your profile-"+req.user.username)
})

module.exports=router;
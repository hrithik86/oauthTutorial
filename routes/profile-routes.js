const express=require("express");
const router=express();

const authCheck=(req,res,next)=>{
    if(!req.user){
        res.redirect("/auth/login")
    }else{
        next();
    }
}

router.get("/",authCheck,(req,res)=>{
    res.render("profile.ejs",{user:req.user});
})

module.exports=router;
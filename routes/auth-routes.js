const express=require("express");
const router=express();
const passport=require("passport");

//auth routes
router.get("/login",(req,res)=>{
    res.render("login");
});

//auth logout
router.get("/logout",(req,res)=>{
    res.send("logging out");
})

//auth with google
router.get("/google",passport.authenticate("google",{
    scope:["profile"]
}));

//callback route for google to redirect to
router.get("/google/redirect",passport.authenticate("google"),(req,res)=>{
    res.send("you reached the callback uri");
})

module.exports=router;
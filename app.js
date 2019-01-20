const express=require("express");
const app=express();
const authRoutes=require("./routes/auth-routes");

app.set("view engine","ejs");

app.use("/auth",authRoutes);

app.get("/",(req,res)=>{
    res.render("home");
});

app.listen(3000,()=>{
    console.log("server started on port 3000");
})
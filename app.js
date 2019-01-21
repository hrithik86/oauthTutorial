const express=require("express");
const app=express();
const authRoutes=require("./routes/auth-routes");
const passportSetup=require("./config/passport-setup");
const mongoose=require("mongoose");
const keys=require("./config/keys");

//set up view enine
app.set("view engine","ejs");

//connect to mongoose
mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log("connected to mongodb")
});


//setup routes
app.use("/auth",authRoutes);

//home route
app.get("/",(req,res)=>{
    res.render("home");
});

app.listen(3000,()=>{
    console.log("server started on port 3000");
})
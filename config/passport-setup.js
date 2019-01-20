const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth20");
const keys=require("./keys")

passport.use(new GoogleStrategy({
    //optoion for google strategy
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
}),()=>{
  //passport call back function   
})
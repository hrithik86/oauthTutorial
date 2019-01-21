const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth20");
const keys=require("./keys")


passport.use(new GoogleStrategy({
    //optoion for google strategy
    callbackURL:"/auth/google/redirect",
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{
  //passport call back function   
  console.log("passport cb function fired");
  console.log(profile);
})
)
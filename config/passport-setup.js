const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth20");
const keys=require("./keys");
const User=require("../models/user-model");

passport.serializeUser((user,done)=>{
  done(null,user.id);
});

passport.deserializeUser((id,done)=>{
  User.findById(id).then((user)=>{
    done(null,user);
  })
});

passport.use(new GoogleStrategy({
    //optoion for google strategy
    callbackURL:"/auth/google/redirect",
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{
  User.findOne({googleId: profile.id}).then((currentUser) => {
    if(currentUser){
        // already have this user
        console.log('user is: ', currentUser);
        done(null,currentUser);
        // do something
    } else {
        // if not, create user in our db
        User.create({googleId:profile.id,username:profile.displayName},(err,newUser)=>{
          if(err){
            console.log(err);
          }
          else{
            console.log("created new user", newUser);
            done(null,newUser);
          }
        })
    }
});
})
);
var express          = require("express");
var router           = express.Router(),
    passport         = require("passport"),
    middleWare       = require("../middleWare"),
    User             = require("../models/user"),
    Blog             = require("../models/blog");

//===================================
//AUTHENTICATE
//===================================
router.get("/",function(req,res){
  res.render("index");
});
router.get("/register",function(req,res){

  res.render("register");

});
// router.post("/register",function(req,res){
//   var newUser = new User({username: req.body.username});
//   User.register(newUser, req.body.password,function(err, newUser){
//     if (err) {
//       console.log(err);
//       req.flash("error", err.message);
//       return res.render("register");
//       // req.flash("error", err.message);
//
//     }
//     passport.authenticate("local")(req,res,function(){
//       req.flash("success", req.body.username);
//     res.redirect("/login");
//     });
//   });
// });
const { check, validationResult } = require('express-validator');

router.post('/register', [
  // email must be an email form
  check('email').isEmail(),

  // username must be at least 3 chars long
  // check('username').isLength({ min: 3 }),

  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash("error", "Invalid value username or password!");
    console.log(errors);
    return res.render("register");
  }else{
    var newUser = new User({username: req.body.username, email: req.body.email });
      User.register(newUser, req.body.password,function(err, newUser){
        if (err) {
          // req.flash("error", err.message);
          console.log(err);
          return res.render("register");
          // req.flash("error", err.message);
        }
        passport.authenticate("local")(req,res,function(){
          req.flash("success", req.body.username);
          res.redirect("/login");
        });
      });

  }

});


router.post("/blog", function(req,res){
  var name      =   req.body.name,
      email     =   req.body.email,
      subject   =   req.body.subject,
      message   =   req.body.message,
      number    =   req.body.number;
  var newMessage = { name:name, email:email, subject:subject, message:message, number:number};
  Blog.create(newMessage, function(err, newMess){
    if (err) {
      console.log(err);
    }
    else{
      req.flash("success", "Message was sent,hope that responce will be soon");
      console.log("Added newly");
      res.redirect("/");
    }
  });

});

router.get("/login",function(req,res){
  res.render("login");
});

router.post("/login", passport.authenticate("local",{
  successRedirect:"/",
  failureRedirect: "/login",
  badRequestMessage : 'Invalid username or password!',
  failureFlash: true
}),function(req,res){
  res.send("Login happens here!");
});
router.get("/logout",function(req,res){
  req.logout();
  req.flash("error","Logged you out!");
  res.redirect("/");
});

module.exports = router;

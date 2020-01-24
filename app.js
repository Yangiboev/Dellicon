var express          = require("express"),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    passport         = require("passport"),
    localStrategy    = require("passport-local"),
    flash            = require("connect-flash"),
    methodOverride   = require("method-override"),
    User             = require("./models/user"),
    app              = express();
//install flash-connect
var userRoutes       = require("./routes/user");


mongoose.connect("mongodb+srv://Yangiboev:ab2733314@dellicon-xnbol.mongodb.net/test?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
  console.log("something");
});
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use(flash());
app.use(require("express-session")({
  secret:"Once Again That is awesome",
  resave: false,
  saveUninitialized:false
}));
app.use(function( req, res, next){
  res.locals.error        = req.flash("error");
  res.locals.currentUser  = req.user;
  res.locals.success      = req.flash("success");
  next();
});
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(methodOverride("_method"));
app.use(express.json());
app.use(userRoutes);



app.listen(8000,function(){
  console.log("Server is runnning!");
});

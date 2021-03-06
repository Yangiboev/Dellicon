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
var url = process.env.DATABASEURL || "mongodb://localhost:27017/PizzaMania" ;

mongoose.connect( url , {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
  console.log("something");
});
// mongodb+srv://Yangiboev:19190013@dellicon-xnbol.mongodb.net/test?retryWrites=true&w=majority
// mongoose.connect("mongodb+srv://Yangiboev:19190013@dellicon-xnbol.mongodb.net/test?retryWrites=true&w=majority", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useFindAndModify: false
//   })
//   .then(() => console.log('DB Connected!'))
//   .catch(err => {
//   console.log("Error has occured-- " + err);
// });
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use(require("express-session")({
  secret:"Once Again That is awesome",
  resave: false,
  saveUninitialized:false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function( req, res, next){
  res.locals.currentUser  = req.user;
  res.locals.error        = req.flash("error");
  res.locals.success      = req.flash("success");
  next();
});
app.use(methodOverride("_method"));
app.use(express.json());
app.use(userRoutes);



app.listen(process.env.PORT || 8000,function(){
  console.log("Server is runnning!");
  // console.log(process.env.DATABASEURL);
});

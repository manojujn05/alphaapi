const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();

const request = require('request');
const path = require('path');
//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose
  .connect("mongodb+srv://manoj:Laxyo@123@cluster0.ulbwp.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

const User = require("./user");
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*", // <-- location of the react app were connecting to
    credentials: false,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------
app.use(express.static(path.join(__dirname, '/public')));
// Routes
app.get("/*", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
app.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

// Routes
app.post("/stock", (req, res, next) => {
  let stock = req.body.stock;
  console.log(req.body.stock);
  request(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock}&apikey=Z0BM2IYIBVNVQDBP`, function (error, response, body) {
    const data = JSON.parse(body);
    // console.log(data);
    res.send(data);
  });


});

//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(4000, () => {
  console.log("Server Has Started");
});

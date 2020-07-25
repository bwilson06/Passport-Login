var express = require('express');
var mongoose = require('mongoose');
var session = require("express-session");
var passport = require("passport");
var db = require('./models')

//port for environment
var PORT = process.env.PORT || 3001;

//initialize express server
var app = express();

//connecting to our mongo db
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/tweetlibs'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//Get the default connection
var db_stat = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db_stat.on('error', console.error.bind(console, 'MongoDB connection error:'));

//route folders - uncomment to use
// require('./routes/apiRoutes.js')(app);
// require('./routes/htmlRoutes.js')(app);

//parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//making public a static folder
app.use(express.static('public'));

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

app.use(passport.initialize());
app.use(passport.session());

app.post('/login', function(req, res){
    console.log(req.body)
    const user = { 
        email: req.body.email,
        password: req.body.password
    }
    db.Users.create(user)
    .then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
})
  

//starting server
app.listen(PORT, function() {
  console.log(`Express is running on port ${PORT}`)
})
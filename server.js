// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");
var cors = require('cors');
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);
//var passportSetup = require('./config/passport-route');

// Routes
//const routes = require("./controllers/router");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:3000'
// }));

// Express Validator
app.use(expressValidator());

// Use body parser with our app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

app.use(cookieParser());

// Deliver files to front end from the public directory
app.use(express.static("public"));

// Listen on port 
// ===================
app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
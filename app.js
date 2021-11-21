const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const cors = require('cors')
const app = express(); 
const conecction = require("./config/config");
 

const coreRouter = require('./router/core-router') 
 
app.use(session({
    secret: 'api_se',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use(cookieParser()); 

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var op = {
    origin: true,
    methods: ['POST', 'GET'],
    credentials: true,
    maxAge: 3600
}
app.use(logger('dev'));
app.use(cors(op)); 
app.use('/api/core', cors(op), coreRouter); 
// set port, listen for requests
// app.listen(3000, () => {
//   console.log("Server is running on port 3000.");
// });
module.exports = app;
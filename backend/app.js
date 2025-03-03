const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


var cors = require('cors');
const pool = require('./db/db');

require('dotenv').config();

// // db connect 
// const pool = require("./db/db");

//middleware
var app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT;

const server = () => {
  app.listen(PORT, () => {
    console.log("listening on port:", PORT);
  })
}

server();

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Handlebars = require('handlebars');
var hbs = require('express-handlebars');
var { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local'),Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2:27017/buslines');
//172.17.0.2
var db = mongoose.connection;

var indexRouter = require('./routes/index');
var linijeRouter = require('./routes/linije');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.engine({ defaultLayout: 'layout', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect-Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  
  if(req.url == '/'){
    res.locals.isHome = true;
  }
  next();

});


app.use('/', indexRouter);
app.use('/linije', linijeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

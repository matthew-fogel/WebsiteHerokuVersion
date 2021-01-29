process.env.NODE_ENV = 'production';

var createError = require('http-errors');
var express = require('express');
var axios = require('axios')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var compression = require('compression');
var helmet = require('helmet');

var app = express();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "style-src": ["'self'", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"],
      "script-src": ["'self'", "code.jquery.com", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"],
      "font-src": ["'self'", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"],
    },
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'images')));

app.use('/', indexRouter);

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

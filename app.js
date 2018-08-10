var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var engines = require('consolidate');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.engine('hbs', engines.handlebars);

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// guest
app.get('/', function(req, res, next) {
  res.render('guest/index', { title: 'Titip Beli' });
});

app.get('/browse', function(req, res, next) {
  res.render('guest/browse', { title: 'Titip Beli' });
});

app.get('/detail-request', function(req, res, next) {
  res.render('guest/detail-request', { title: 'Titip Beli' });
});

app.get('/search', function(req, res, next) {
  res.render('guest/search', { title: 'Titip Beli' });
});

// user
app.get('/user', function(req, res, next) {
  res.render('user/index', { title: 'Titip Beli' });
});

app.get('/user/browse', function(req, res, next) {
  res.render('user/browse', { title: 'Titip Beli' });
});

app.get('/user/dashboard', function(req, res, next) {
  res.render('user/dashboard', { title: 'Titip Beli' });
});

app.get('/user/detail-request', function(req, res, next) {
  res.render('user/detail-request', { title: 'Titip Beli' });
});

app.get('/user/inbox', function(req, res, next) {
  res.render('user/inbox', { title: 'Titip Beli' });
});

app.get('/user/post-req', function(req, res, next) {
  res.render('user/post-req', { title: 'Titip Beli' });
});

app.get('/user/post-trip', function(req, res, next) {
  res.render('user/post-trip', { title: 'Titip Beli' });
});

app.get('/user/profile', function(req, res, next) {
  res.render('user/profile', { title: 'Titip Beli' });
});

app.get('/user/purchase', function(req, res, next) {
  res.render('user/purchase', { title: 'Titip Beli' });
});

app.get('/user/search', function(req, res, next) {
  res.render('user/search', { title: 'Titip Beli' });
});

app.get('/user/setting', function(req, res, next) {
  res.render('user/setting', { title: 'Titip Beli' });
});

app.get('/user/trips', function(req, res, next) {
  res.render('user/trips', { title: 'Titip Beli' });
});

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

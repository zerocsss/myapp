var createError = require('http-errors');
var express = require('express');
var i18n = require('i18n');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

i18n.configure({
  locales:['en', 'zh-CN'],
  directory: __dirname + '/locales',
  defaultLocale: 'zh-CN'
});

var setLang = (req, res, next) => {
  // console.log('lllll', req)
  res.setLocale(req.language)
  next()
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//开启压缩
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(i18n.init);
app.use(setLang);

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

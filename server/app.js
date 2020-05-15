var cookieParser = require('cookie-parser');
var express = require('express');

var logger = require('morgan');
var path = require('path');


const app = express();

// 配置项
const config = require('./routes/config')

// 配置路由
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const articleRouter = require('./routes/article/index');

// 配置文件
app.use(config)

// 渲染模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 设置路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/article', articleRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page 渲染err 异常页面
  // res.status(err.status || 500);
  // res.render('error');

  // json 格式返回
  // res.status(500).json({
  //   message: err.message
  // })
});

module.exports = app;

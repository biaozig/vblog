const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
// const multer = require('multer');
const app = express();

const vertoken = require('./routes/login/vertoken')
const config = require('./routes/config'); // 配置项
const allRouter = require('./routes/index'); // 配置路由

// 配置
app.use(config);
// app.use(vertoken); // 验证token


// 配置静态资源+模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// 引入路由配置
app.use('/', allRouter);
// app.use(multer()); // 上传文件


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

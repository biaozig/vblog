const express = require('express');
const app = new express();


// 引入路由
const indexRouter = require('./home'); // 首页
const loginRouter = require('./login'); // 登录
const usersRouter = require('./users'); // 用户
const articleRouter = require('./article'); // 文章


app.use('/', indexRouter); 
app.use('/user', usersRouter);
app.use('/login', loginRouter);
app.use('/article', articleRouter);


module.exports = app;

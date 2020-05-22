const jwtToken = require('../../utils/jwtToken');
const expressJwt = require('express-jwt');
const express = require('express');
const app = new express();

app.use(function(req, res, next){
    var token = req.headers['authorization'];

    if(token === undefined){
        return next();
    }
    // 解构token
    jwtToken.decode(token, (err, ded) => {
        console.log(e)
        if(!err){
            req.data = data
        }
    });
    next();
})

//验证token是否过期并规定哪些路由不用验证
app.use(expressJwt({
    secret: jwtToken.secret // 密匙
}).unless({
    path: [
        '/login/in', 
        '/login/up',
        '/article/list',
        '/article/:id/info'
    ] // 无需验证token路由
}));

module.exports = app;
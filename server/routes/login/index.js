const express = require('express');
const router = express.Router();
const bcrypt = require('../../utils/bcrypt');
const Users = require('../../db/models/users');
const filterJson = require('../../utils/json');
// const jwtToken = require('../../utils/token');
const jwtToken = require('../../utils/jwtToken');

// 登录
router.post('/in', async function(req, res, next){
    let result = await Users.findOne({'where': { 'username': req.body['username'] }});
    
    // 验证是否存在账号
    if(!result || !result['username']){
        res.status(200).json({
            code: 500,
            message: '账号不存在！'
        })
        return
    }

    // 验证账户+密码
    if(req.body['username'] === result['username'] && bcrypt.compare(req.body['password'], result['password'])){
        
        res.status(200).json({
            code: 200,
            data: {
                token: jwtToken.create({
                    username: req.body['username'],
                }),
                info: filterJson(result.toJSON(), ['password'])
            },
            message: '登录成功！'
        })
    }else{
        res.status(200).json({
            code: 500,
            message: '密码错误！'
        })
    }

})

// 注册
router.post('/up', function(req, res, next){
    
    Users.findByPk({
        where: {
            username: req.body['username'],
            password: ''
        }
    }).then((res) => {
         
        console.log(res['username'], res['password'])
    })
})

module.exports = router;

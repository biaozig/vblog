const express = require('express');
const router = express.Router();
const Users = require('../../db/models/users')

// 登录
router.post('/in', async function(req, res, next){
    console.log(req.body, req.body['username'])
    let user = await Users.findOne({
            where: {
                // username: req.body['username'],
                username: 'admin'
            }
        })

    console.log(user)


})

// 注册
router.post('/up', function(req, res, next){
    
    Users.findByPk({
        where: {
            username: req.body['username'],
            password: ''
        }
    }).then((res) => {
        
        console.log(res)
    })

})

// 判断验证用户是否存在+验证密码是否正确
function checkUserOne(val){


}


// 密码加密
function bcryptPsw(val){
    // 加密
    const salt = bcrypt.genSaltSync(10);
    // 生成加密密码
    const psw = bcrypt.hashSync(val, salt);

    return psw;
}



module.exports = router;

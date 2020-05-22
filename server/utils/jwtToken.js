const jwt = require('jsonwebtoken')

// 1、用jsonwebtoken生成token  
//    jwt.sign(payload, secret, {expiresIn:60*60*24*7})
// 2、用express-jwt验证token是否过期或失效
// 3、用jsonwebtoken解析出token中的用户信息，比如用户id
module.exports = {
    secret: 'SCR_V_BLOG',
    create: function (obj, time) {
        // string加密数据; time过期时间,默认3天后过期，单位秒
        let exp = parseInt(time) || 7;
        let paramsObj = {
            data: obj,
            created: parseInt(Date.now()/1000)
        }
        return jwt.sign(paramsObj, this.secret, {expiresIn: exp})
    },
    decode: function (token) {
        try {
            let data = jwt.verify(token, this.secret)
            console.log('data-20:', data)
            return {
                token: true,
                data
            }
        } catch (e) {
            return {
                token: false,
                data: e
            }
        }
    }
}
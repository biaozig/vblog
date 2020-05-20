const bcrypt = require('bcryptjs');

// 加密
function BcryptPswd(val){
    // 加密
    const salt = bcrypt.genSaltSync(10);
    // 生成加密码吗
    return bcrypt.hashSync(val, salt);
}

// 比对 返回 true、false
function BcryptCompare(val, target){
    return  bcrypt.compareSync(val, target)
}

module.exports = {
    value: BcryptPswd, // 加密
    compare: BcryptCompare, // 比较
}
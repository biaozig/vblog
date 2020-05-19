const bcrypt = require('bcryptjs')
const Sequelize = require('sequelize')
const sequelize = require('../../db')
const { DataTypes } = Sequelize;

// 用户表
const Users = sequelize.define('users', {
    username: {
        type: DataTypes.STRING
    },
    // 密码
    password: {
        type: Sequelize.STRING,
        set(val) {
            // 加密
            const salt = bcrypt.genSaltSync(10);
            // 生成加密密码
            const psw = bcrypt.hashSync(val, salt);
            this.setDataValue("password", psw);
        }
    },
    isAuth: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    }
}, {
    primaryKey:true,
    freezeTableName:true, // 禁止以复数形式创建表
    timestamps:false, // 如果true 会验证是否包含有 `createdAt`,`updatedAt`字段
})


module.exports = Users;
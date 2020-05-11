const moment = require('moment');
const bcrypt = require('bcryptjs')
const {Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = require('..');


class User extends Model {};
// 添加人员 - 链接到数据表
const userCreate = sequelize.define('user', {
    id: {
        type: DataTypes.BIGINT(1),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    age: DataTypes.STRING(18), // 年龄
    username: DataTypes.STRING('小明'), // 名字
    birthday: DataTypes.STRING('2002-09-15'), // 出生日期
    education: DataTypes.STRING('大学本科'), // 学历
    major: DataTypes.STRING('计算机科学与技术'), // 专业
    seniority: DataTypes.STRING('3年'), // 工作经验
}, {
    freezeTableName: true, // 这个选项表示，数据库中的表明与程序中的保持一致，否则数据库中的表名会以复数的形式命名
})


// 查询人员信息
const userInfo = (userId) => {
    return new Promise((resolve, reject) => {
        sequelize.define('user', {
            id: {
                type: Sequelize.BIGINT(1),
                primaryKey: true,
                allowNull: false,
                unique: true,
                autoIncrement: true, // 自动添加
            },
            age: Sequelize.STRING(18), // 年龄
            username: Sequelize.STRING('小明'), // 名字
            birthday: Sequelize.STRING('2002-09-15'), // 出生日期
            education: Sequelize.STRING('大学本科'), // 学历
            major: Sequelize.STRING('计算机科学与技术'), // 专业
            seniority: Sequelize.STRING('3年'), // 工作经验
        })

        resolve('')
    })
}

// 删除人员
const userDelete = sequelize.define('user', {
    id: {
        type: Sequelize.BIGINT(1),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    age: Sequelize.STRING, // 年龄
    nickname: Sequelize.STRING, // 昵称
    // 邮箱
    email: { 
        type: Sequelize.STRING(128),
        unique: true
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
    // username: Sequelize.STRING('小明'), // 名字
    // birthday: Sequelize.STRING('2002-09-15'), // 出生日期
    // education: Sequelize.STRING('大学本科'), // 学历
    // major: Sequelize.STRING('计算机科学与技术'), // 专业
    // seniority: Sequelize.STRING('3年'), // 工作经验
})

// 修改人员信息
const userUpdate = sequelize.define('user', {
    id: {
        type: Sequelize.BIGINT(1),
        primaryKey: true, 
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    age: Sequelize.STRING(18), // 年龄
    username: Sequelize.STRING('小明'), // 名字
    birthday: Sequelize.STRING('2002-09-15'), // 出生日期
    education: Sequelize.STRING('大学本科'), // 学历
    major: Sequelize.STRING('计算机科学与技术'), // 专业
    seniority: Sequelize.STRING('3年'), // 工作经验
})

// 获取所有人员列表
const userList = sequelize.define('user', {
    id: {
        type: Sequelize.BIGINT(1),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    age: Sequelize.STRING(18), // 年龄
    username: Sequelize.STRING('小明'), // 名字
    birthday: Sequelize.STRING('2002-09-15'), // 出生日期
    education: Sequelize.STRING('大学本科'), // 学历
    major: Sequelize.STRING('计算机科学与技术'), // 专业
    seniority: Sequelize.STRING('3年'), // 工作经验
})

// 导出用户操作
module.exports = User => ({
    get: userInfo,
    add: userCreate,
    del: userDelete,
    edit: userUpdate,
    list: userList
})
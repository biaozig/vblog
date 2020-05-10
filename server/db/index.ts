const Sequelize = require('sequelize');
const sqlConfig = require('./config')


// 创建orm 模型
const sequelize = new Sequelize(sqlConfig.database, sqlConfig.username, sqlConfig.password, {
    host: sqlConfig.host,
    dialect: 'mysql', // 数据库名
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;
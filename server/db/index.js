const { Sequelize } = require('sequelize');
const sqlConfig = require('./config')

// 创建orm 模型
const db = new Sequelize(sqlConfig.database, sqlConfig.username, sqlConfig.password, {
    host: sqlConfig.host,
    dialect: 'mysql', // 数据库名
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

module.exports = db;

// module.exports = async () => {
//     return new Promise((resolve, reject) => {
//         // 验证数据库是否已连接
//         db.authenticate().then(() => {
//             console.log("连接建立成功");
//             resolve();
//         }).catch(err => {
//             reject();
//             throw new Error(`无法连接数据库:${err.message}`);
//         });
//     })
// };

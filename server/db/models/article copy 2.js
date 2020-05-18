const Sequelize = require('sequelize');
const sequelize = require('../../db');


// 声明表模型
class Article extends Sequelize.Model {}
// Sequelize.Model.init(attributes, options)：
Article.init({
    title: {
        type: Sequelize.STRING
    },
    desc: {
        type: Sequelize.STRING
    },
    zan: {
        type: Sequelize.STRING
    },
    like: {
        type: Sequelize.STRING
    },
    share: {
        type: Sequelize.STRING
    },
    recommend: {
        type: Sequelize.STRING
    },
}, {
    sequelize,
    modelName: 'article',
    freezeTableName:true, // 禁止以复数形式创建表
    timestamps:false, // 如果true 会验证是否包含有 `createdAt`,`updatedAt`字段
})

// 建表 - 文章
// const Article = sequelize.define('article', {
//     title: {
//         type: Sequelize.STRING
//     },
//     desc: {
//         type: Sequelize.STRING
//     },
//     zan: {
//         type: Sequelize.STRING
//     },
//     like: {
//         type: Sequelize.STRING
//     },
//     share: {
//         type: Sequelize.STRING
//     },
//     recommend: {
//         type: Sequelize.STRING
//     }
// }, {
//     primaryKey:true,
//     freezeTableName:true, // 禁止以复数形式创建表
//     timestamps:false
// })


/**
 * @bulkCreate(records: Array, options: Object) 增
 * @
 * @update() 改
 * @findAll('table', options) 查所有
 * @findOne() 查
 * 
 * 
 * 
 * **/


// 导出表
module.exports = Article;

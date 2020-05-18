const Sequelize = require('sequelize');
const sequelize = require('../../db');
const DataTypes = Sequelize.DataTypes;

// 文章api 
const article = sequelize.define('article', {
    title: {
        type: DataTypes.STRING
    },
    desc: {
        type: DataTypes.STRING
    },
    zan: {
        type: DataTypes.STRING
    },
    like: {
        type: DataTypes.STRING
    },
    share: {
        type: DataTypes.STRING
    },
    recommend: {
        type: DataTypes.STRING
    }
}, {
    primaryKey:true,
    freezeTableName:true, // 禁止以复数形式创建表
    timestamps:false, // 如果true 会验证是否包含有 `createdAt`,`updatedAt`字段
})

article.associate = function(models) {
    // associations can be defined here.
}

// 查询所有 articles
// article.findAll().then(articles => {
//     console.log("All articles:", JSON.stringify(articles, null, 4));
// });

// 声明表模型
// class Article extends Sequelize.Model {}
// // Sequelize.Model.init(attributes, options)：
// Article.init({
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
//     },
// }, {
//     sequelize,
//     modelName: 'article',
//     freezeTableName:true, // 禁止以复数形式创建表
//     timestamps:false, // 如果true 会验证是否包含有 `createdAt`,`updatedAt`字段
// })

module.exports = article;
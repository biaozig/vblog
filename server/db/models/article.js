const Sequelize = require('sequelize');
var sequelize = require('../index');

// 建表 - 文章
const Article = sequelize.define('article', {
    Id:{type:Sequelize.INTEGER},
    name:{type:Sequelize.STRING},
    number:{type:Sequelize.STRING},
    mobile:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING},
}, {
    freezeTableName:true,
    timestamps:false
})


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

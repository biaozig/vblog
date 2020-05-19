### https://itbilu.com/nodejs/npm/sequelize-docs-v5.html
### 官网文档地址 https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
### sequelize 简单使用说明：
    1.安装依赖 yarn add sequlize mysql2 --save
    2.创建sequlize：
        ## @database：数据库名 @username：数据库账号 @password：数据库密码
        const sequelize = new Sequelize('database', 'username', 'password', {
            host: sqlConfig.host, // 主机
            port: sqlConfig.port, // 端口 默认3306
            dialect: 'mysql', // 数据库类型
            pool: {
                max: 10,
                min: 0,
                idle: 10000
            }
        })

    3.创建表
        const User = sequelize.define('user', {
            firstName: {
                type: Sequelize.STRING,
            }
        }, {
            freezeTableName:true, // 禁止以复数形式创建表
            
        })


### 模型与数据库同步
    如果你想 Sequelize 通过定义的模型自动创建表（或修改已存在的表），可以使用sync方法，如下所示：

    // 注意: `force: true` 选项会在表存在时首先删除表
    User.sync({ force: true }).then(() => {
        // 现在 `users` 表会与模型定义一致
        return User.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    });


### 一次同步所有模型
    可以使用sequelize.sync()方法来同步所有模型，而不是调用每个模型的sync()方法。


### 生产注意事项
    在生产环境中，你应该考虑使用“Migration”来替代调用sync()。了解更多，请参考迁移(Migrations)章节。


#### 以下是一些简单的查询：

    // 查询单条 user
    User.findOne().then(users => {
        console.log("All users:", JSON.stringify(users, null, 4));
    });

    // 查询所有 users
    User.findAll().then(users => {
        console.log("All users:", JSON.stringify(users, null, 4));
    });

    // 创建一个新 user
    User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
        console.log("Jane's auto-generated ID:", jane.id);
    });

    // 批量添加 bulkCreate
    User.bulkCreate([
        { firstName: "Jane", lastName: "Doe" },
        { firstName: "Jane", lastName: "Doe" }
    ]).then((art => {
        console.log(art)
    }))

    // 删除每个名为 "Jane" 的记录
    User.destroy({
        where: {
            firstName: "Jane"
        }
    }).then(() => {
        console.log("Done");
    });

    // 修改每个`lastName`为`null`的记录修改为"Doe"
    User.update({ lastName: "Doe" }, {
        where: {
            lastName: null
        }
    }).then(() => {
        console.log("Done");
    });


### 数据检索/查找器(Finder)
Finder方法用于从数据库查询数据。它们不会返回普通对象，而是返回模型实例。因为finder方法返回模型实例，所以你可以按照实例文档的所述在查询结果上调用任何模型实例方法。

在本章节，将介绍一些查找器方法可以执行的操作：

    1. find - 搜索数据库中一个特定元素
        // 根据已知ID查询
        Project.findByPk(123).then(project => {
            // project 会是 Project 的实例，而且为表中 id 为 123 的存储内容
            // 如果未定义此类条目，则将为 null
        })

        // 根据属性查询
        Project.findOne({ where: {title: 'aProject'} }).then(project => {
            // project 会是所匹配到的第一条`title`为'aProject'的 Project || null
        })


        Project.findOne({
            where: {title: 'aProject'},
            attributes: ['id', ['name', 'title']]
        }).then(project => {
            // project 会是所匹配到的第一条`title`为'aProject'的 Project || null
            // project.get('title') 将包含该项目的名称
        })
        
    2. findOrCreate - 搜索一个特定元素不存在时则新建
        findOrCreate方法可用于检查数据库中是否已存在某个元素。如果已存在，则返回相应的实例。 如果该元素不存在，则将创建它。
        假设我们有一个有User模型的空数据库，其有一个username和一个job属性。
        对于创建的情况，可以在where选项后面添加defaults。


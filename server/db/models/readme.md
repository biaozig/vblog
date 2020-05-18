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
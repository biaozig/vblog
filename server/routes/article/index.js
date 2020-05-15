const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const dbArticle = require('../../db/models/article')

const app = new express();

// 解析 application/json 
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));


// 文章列表
router.get('/list', async function(req, res, next){
    res.json({
        data: [
            {
                title: '实战：Vue刷新当前页面',
                desc: '最近些日子项目中突然碰到了一个需求，再完成编辑操作之后需要进行页面刷新，通过实验有如下几种姿势可以解决需求中的问题，下面进行简单总结如下。',
                image: 'https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                zan: '0',
                like: '0',
                share: '0',
                recommend: '0',
            }, {
                title: '实战：Vue刷新当前页面',
                desc: '最近些日子项目中突然碰到了一个需求，再完成编辑操作之后需要进行页面刷新，通过实验有如下几种姿势可以解决需求中的问题，下面进行简单总结如下。',
                image: 'https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                zan: '0',
                like: '0',
                share: '0',
                recommend: '0',
            }, {
                title: '实战：Vue刷新当前页面',
                desc: '最近些日子项目中突然碰到了一个需求，再完成编辑操作之后需要进行页面刷新，通过实验有如下几种姿势可以解决需求中的问题，下面进行简单总结如下。',
                image: 'https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                zan: '0',
                like: '0',
                share: '0',
                recommend: '0',
            }, {
                title: '实战：Vue刷新当前页面',
                desc: '最近些日子项目中突然碰到了一个需求，再完成编辑操作之后需要进行页面刷新，通过实验有如下几种姿势可以解决需求中的问题，下面进行简单总结如下。',
                image: 'https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                zan: '0',
                like: '0',
                share: '0',
                recommend: '0',
            }, {
                title: '实战：Vue刷新当前页面',
                desc: '最近些日子项目中突然碰到了一个需求，再完成编辑操作之后需要进行页面刷新，通过实验有如下几种姿势可以解决需求中的问题，下面进行简单总结如下。',
                image: 'https://upload-images.jianshu.io/upload_images/13331500-5a1f36d61cefe074.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                zan: '0',
                like: '0',
                share: '0',
                recommend: '0',
            }
        ]
    })
})

// 添加文章
router.post('/create', async function(req, res, next){
    dbArticle.bulkCreate([
        {
            mail:'183..@163.com',
            name:'张三',
            password:'123',
            mobile: '18516323721',
        },
        {mail:'183..@163.com',name:'张三',password:'123',authority:'1'}
    ])
    // dbArticle.bulkCreate().then((art) => {
    //     console.log(art)
    // })
    // dbArticle.findAll().then((art) => {
    //     console.log(art)
    // })

    res.json({
        title: '测试文章标题1',
        content: '水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水',
        date: '2020-05-15 15:53:00'
    }) 
    // let errText = {};
    // if(!req.params.title){
    //     errText['title'] = 'title 不能为空';
    // }

    // if(!req.params.content){
    //     errText['content'] = 'content 不能为空';
    // }

    // // 插入数据库表


    // if(Object.keys(errText).length){
    //     res.json({
    //         code: 500,
    //         message: Object.values(errText).join(',')
    //     })

    //     return
    // }

    // res.json({
    //     code: 200,
    //     message: '添加成功！'
    // })
})

router.post('/create', async function(req, res, next){

    res.json({
        title: '测试文章标题1',
        content: '水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水',
        date: '2020-05-15 15:53:00'
    }) 
})

module.exports = router;
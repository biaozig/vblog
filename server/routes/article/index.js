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
    let pageNo = req.query.pageNo || 1;
    let pageSize = req.query.pageNo || 20;

    let resArticle = await dbArticle.findAll({
        limit: pageSize,
        offset: (pageNo - 1) * pageSize,
    });

    res.status(200).json({
        code: 200,
        data: resArticle,
        message: '文章列表查询成功！'
    })
})

// 查询文章详情
router.get('/info', async function(req, res, next){
    console.log(req.query.id)
    dbArticle.findByPk(req.query.id).then(jane => {
        console.log("Jane's auto-generated ID:", jane.id);

        res.status(200).json({
            code: 200,
            message: '查询成功.',
            data: jane
        })
    }).catch(err => {
        res.json({
            code: 500,
            message: '无效的`id`!'
        })
    });
})

// 添加文章
router.post('/create', async function(req, res, next){
    
    dbArticle.create({ 
        title: req.body['title'],
        image: req.body['image'],
        resume:  req.body['resume'],
        content:  req.body['desc'],
        like: 0,
        share: 0,
        collect: 0
    }).then(jane => {
        console.log("Jane's auto-generated ID:", jane.id);

        res.status(200).json({
            code: 200,
            message: '添加成功.'
        })
    }).catch(err => {
        res.json({
            code: 500,
            message: JSON.stringify(err)
        })
    });


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

module.exports = router;
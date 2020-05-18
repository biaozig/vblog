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
    let resArticle = await dbArticle.findAll();

    console.log("All articles:", JSON.stringify(resArticle, null, 4));

    res.status(200).json({
        code: 200,
        data: resArticle
    })
})

// 添加文章
router.post('/create', async function(req, res, next){
    
    dbArticle.create({ 
        title: req.body['title'],
        image: req.body['image'],
        desc:  req.body['desc'],
        like: 0,
        share: 0,
        recommend: 0
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
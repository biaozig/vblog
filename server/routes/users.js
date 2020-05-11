const express = require('express');
const router = express.Router();
const dbUser = require('../db/models/user')

// 增
router.post('/create', async function(req, res, next) {
  console.log(req.params)
  let { userId } = req.params;

  // 查询数据库
  let info = await dbUser.get(userId);
  res.send({
    code: 200,
    data: info,
    message: '获取数据成功.'
  });
});

// 删
router.get('/:userId/destroy', async function(req, res, next) {
  models.User.destroy({
    where: {
      id: req.params.userId,
    }
  }).then(() => {
    res.redirect('/');
  })
});

// 改
router.get('/:userId/update', async function(req, res, next) {
  console.log(req.params)
  let { userId } = req.params;

  // 查询数据库
  let info = await dbUser.get(userId);
  res.send({
    code: 200,
    data: info,
    message: '获取数据成功.'
  });
});

// 查
router.get('/:userId', async function(req, res, next) {
  // 查询数据库
  models.User.findOne({
    where: { id: req.params.userId }
  }).then((data) => {
    res.json({data})
  })
});

// 所有
router.get('/', async function(req, res, next) {
  console.log(req.params)
  let { userId } = req.params;

  // 查询数据库
  let info = await dbUser.get(userId);
  res.send({
    code: 200,
    data: info,
    message: '获取数据成功.'
  });
});

module.exports = router;

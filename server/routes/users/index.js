const bcrypt = require('bcryptjs')
const express = require('express');
const router = express.Router();
const Users = require('../../db/models/users')

// 查询所有用户
router.post('/list', function(req, res, next){
    const params = req.body
    // Users.findByPk({
    //     where: {}
    // }).then((res) => {
        
    //     console.log(res)
    // })

})

// 创建用户
router.post('/create', function(req, res, next){
    const params = req.body
    // Users.findByPk({
    //     where: {}
    // }).then((res) => {
        
    //     console.log(res)
    // })

})

// 查询用户信息
router.post('/info/:id', function(req, res, next){
    const params = req.body
    // Users.findByPk({
    //     where: {}
    // }).then((res) => {
        
    //     console.log(res)
    // })

})

// 查询用户信息
router.post('/info/:id', function(req, res, next){
    const params = req.body
    // Users.findByPk({
    //     where: {}
    // }).then((res) => {
        
    //     console.log(res)
    // })

})

module.exports = router;

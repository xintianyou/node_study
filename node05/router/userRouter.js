const express = require('express');
const router = express.Router();
const User = require('../db/model/userModel');

//用户基本信息注册
router.post('/reg', (req, res) => {
  let { userName, password, phone, age, sex } = req.body
  if (!userName || !password || !phone) {
    return res.send({status: -1, msg: '参数错误'})
  }
  User.find({ userName: userName }).then((data) => {
    data.forEach((item, index) => {
      if (data.length != 0 && item.userName == userName) {
        return res.send({
          status: -1,
          msg: '用户名已存在'
        })
      } else {
        User.insertMany({
          userName: userName,
          password: password,
          phone: phone,
          age: age,
          sex: sex
        }).then(() => {
          return res.send({
            status: 200,
            msg: '注册成功'
          })
        }).catch(() => {
          return res.send({
            status: -1,
            msg: '注册失败'
          })
        })
      }
    })
  })
})

//用户登录
router.post('/login', (req, res) => {
  let { userName, password } = req.body
  if (!userName || !password) {
    return res.send({status: -1, msg: '用户名和密码不能为空'})
  }
  User.find({
    userName: userName
  }).then((data) => {
    console.log(data)
    if (data.length != 0) {
      res.send({
        status: 200,
        msg: '登录成功'
      })
    } else {
      res.send({
        status: -1,
        msg: '用户名不存在'
      })
    }
  }).catch(() => {
    res.send({
      status: -1,
      msg: '登录失败'
    })
  })
})

module.exports = router
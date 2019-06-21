const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

/**
 * post请求
 * 要使用第三方插件body-parser来解析req参数
 */

// //表单提交方式
// express.use(bodyParser.urlencoded({ extended: false }));
// //json提交方式
// express.use(bodyParser.json());

router.post('/add', (req, res) => {
  console.log(req.body)
  res.send('add user')
})

router.get('/del', (req, res) => {
  console.log(req.query.id)
  res.send('del user')
})

module.exports = router;
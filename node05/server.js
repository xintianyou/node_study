const express = require('express');
const app = express();
const db = require('./db/connect')
const userRouter = require('./router/userRouter');
//post请求解析body中间件 body-parser
const bodyParser = require('body-parser');

//使用中间件
//表单提交方式
app.use(bodyParser.urlencoded({ extended: false }));
//json提交方式
app.use(bodyParser.json());

//中间件
app.use('/user',userRouter)

app.listen(8080, () => {
  console.log('server running')
})
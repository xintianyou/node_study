var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/**
 * 路由
 */

let userRouter = require('./router/userRouter')
let goodRouter = require('./router/goodRouter')

app.use('/user',userRouter)
app.use('/good', goodRouter)

/**
 * get请求
 * 直接可以拿到req.query参数
 */

var obj = {
   code: 200,
   msg: 'ok',
   data: [
     {
       'name': '张三',
       'age': '12'
     },
     {
       'name': '李四',
       'age': '20'
     }
   ]
}
app.get('/users/login', (req, res) => {
   console.log(req.query)
   let { name, age } = req.query;
   if (!name || !age) {
     res.send({ code: -1, msg: '缺少参数' })
   }
   if (name !== 'tj' && age !== '20') {
     res.send({code: -2,msg: '参数错误'})
   } else {
     res.send({code: 200,msg: 'ok'})
   }
   // res.send(obj);
})
 
app.get('/users/user', (req, res) => {
   res.send(obj);
})

/**
 * post请求
 * 要使用第三方插件body-parser来解析req参数
 */

//表单提交方式
app.use(bodyParser.urlencoded({ extended: false }));
//json提交方式
app.use(bodyParser.json());
 
app.post('/users/register', (req, res) => {
   console.log(req.body)
   res.send({msg: 'ok',code: 200})
})
 
app.listen(8080, () => {
  console.log('server running at localhost:8080')
})
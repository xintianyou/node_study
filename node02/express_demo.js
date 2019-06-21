var express = require('express');
var app = express();
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


 
var server = app.listen(8080, function () {
 
  // var host = server.address().address
  // var port = server.address().port
 
  // console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
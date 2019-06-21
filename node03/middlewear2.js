/**
 * 局部中间件
 */

const express = require('express')
const app = express()


app.get('/test1', (req, res, next) => { 
  let { token } = req.query;
  if (token) {
    next()
  } else {
    res.send('缺少token')
  }
}, (req, res) => {
  res.send('test1')
})

//局部中间件，哪个接口需要，就在哪个接口写，
//app.get(pathName,fun,fun,callback())
//可以写多个中间件

app.listen(8080, () => {
  console.log('running')
})
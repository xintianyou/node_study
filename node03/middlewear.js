/**
 * 
 * 全局中间件
 */

const express = require('express')
const app = express()


app.use('/', (req, res, next) => {
  console.log('中间件')
  if (req.query.token) {
    next()
  } else {
    res.send('缺少token')
  }
})

app.get('/test1', (req, res) => {
  res.send('test1')
})

app.get('/test2', (req, res) => {
  res.send('test2')
})

app.listen(8080, () => {
  console.log('running')
})
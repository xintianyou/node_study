/**
 * 
 * 静态资源目录
 */

const express = require('express')
const path = require('path')
const app = express()

console.log('绝对路径',__dirname)
app.use(express.static(path.join(__dirname,'./public')))


app.listen(8080, () => {
  console.log('running')
})
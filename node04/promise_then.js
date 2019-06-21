/**
 * promise异步处理
 */

const fs = require('fs');

function isExist() {
  return new Promise((resolve,reject) => {
    fs.stat('./hehe.js',(err, stat) => {
      if (err) {
        reject('文件不存在')
      } else {
        resolve('文件存在')
      }
    })
  })
}

function delFile() {
  return new Promise((resolve, reject) => {
    fs.unlink('./hehe.js', (err) => {
      if (err) {
        reject('删除失败')
      } else {
        resolve('删除成功')
      }
    })
  })
}

isExist()
.then(() => {
  return delFile()
})
.then(() => {
  console.log('删除文件成功')
})
.catch((err) => {
  console.log('error:'+err)
})
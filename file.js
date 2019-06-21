var fs = require('fs');
var util = require('util');
//异步读取
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");

// 异步打开文件
// console.log("准备打开文件！");
// fs.open('input.txt', 'r+', function(err, fd) {
   // if (err) {
       // return console.error(err);
   // }
  // console.log("文件打开成功！");     
// });

// console.log('------分割线------')
//console.log("准备检测文件信息！");
// fs.stat('input.txt', function (err, stats) {
    // console.log(stats);         //true
// })

// console.log("准备写入文件");
// fs.appendFile('input.txt', '\n我是通过fs.writeFile写入文件的内容',  function(err) {
   // if (err) {
       // return console.error(err);
   // }
   // console.log("数据写入成功！");
   // console.log("--------我是分割线-------------")
   // console.log("读取写入的数据！");
   // fs.readFile('input.txt', function (err, data) {
      // if (err) {
         // return console.error(err);
      // }
      // console.log("异步读取文件数据:\n " + data.toString());
   // });
// });

// console.log("创建目录 /nodejs-demo/test/");
// fs.mkdir("/nodejs-demo/test/",function(err){
   // if (err) {
       // return console.error(err);
   // }
   // console.log("目录创建成功。");
// });


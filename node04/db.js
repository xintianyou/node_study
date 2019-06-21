const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bill_product', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('ok')
});

//创建一个和集合相关联的schema对象 类似于表头

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pwd: { type: Number, required: true },
  age: Number,
  sex: { type: Number, default: 0 }
});

//将schema对象转化为数据模型

var User = mongoose.model('customer', userSchema);  //该数据对象和集合关联  mongoose.model('集合名', Schema对象)

//操作数据库

/**
 *插入数据
 */

User.insertMany({ name: '赵六', pwd: 211456212, age: 50 })
.then((data) => {
  console.log(data)
  console.log('插入成功')
})
.catch((err) => {
  console.log(err)
  console.log('插入失败')
})

/**
 * 查询数据
 */
// User.find({age:20})
// .then((data) => {
//   console.log(data)
//   console.log('查询成功')
// })
// .catch((err) => {
//   console.log(err)
//   console.log('查询失败')
// })

/**
 * 删除数据
 */
// User.remove()
// .then((data) => {
//   console.log(data)
//   console.log('删除成功')
// })
// .catch((err) => {
//   console.log(err)
//   console.log('删除失败')
// })
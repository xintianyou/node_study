//创建一个和集合相关联的schema对象  (定义所需要的字段)
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: Number, required: true },
  age: Number,
  sex: { type: Number, default: 0 },
});

//将schema对象转化为数据模型

var User = mongoose.model('users', userSchema);  //该数据对象和集合关联  mongoose.model('集合名', Schema对象)

module.exports = User
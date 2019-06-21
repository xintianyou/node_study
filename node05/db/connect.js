/**
 * 连接数据库
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/customer', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('ok')
});
"use strict";
const nodemailer = require("nodemailer");
//创建发送邮件的对象
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: '2505621608@qq.com', // generated ethereal user
    pass: 'exzlyhkjlusoecdb' // generated ethereal password
  }
});

// 邮件信息
let msg = {
  from: '"Fred Foo 👻" <2505621608@qq.com>', // sender address
  to: "2505621608@qq.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "没你牛皮", // plain text body
  // html: "<b>Hello world?</b>" // html body
}

//发送信息
transporter.sendMail(msg, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log('发送成功')
  }
});

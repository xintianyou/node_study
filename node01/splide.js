const http = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

let url = 'https://www.qunar.com/';
http.get(url, res => {

  const { statusCode } = res;
  if (statusCode !== 200) {
    console.log('请求状态错误')
    return
  }

  let = rowData= ''
  res.on('data', chunk => {
    rowData += chunk.toString('utf8');
  })
  res.on('end', () => {
    console.log('数据传输完毕')
    let $ = cheerio.load(rowData);
    $('img').each((index, el) => {
      console.log($(el).attr('src'))
      // let path = $(el).attr('src')
      // fs.appendFile('./imgPath.txt',path)
    })
  })

}).on('error', (err) => {
  console.log('请求错误')
})
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

// 1. http.STATUS_CODES
// http.STATUS_CODES是一个对象，属性名都是状态码，属性值则是该状态吗的简短解释
// http.STATUS_CODES(301);

// 2.基本用法
// 2.1 处理GET请求
// http模块主要用于搭建HTTP服务。使用Node搭建HTTP服务器非常简单
// ceateServer方法，创建一个服务器实例
// ceateServer方法接受一个函数作为参数，该函数的request参数是一个对象，表示客户端的HTTP请求；response参数也是一个对象，表示服务端的HTTP回应。response.writeHead方法用来写入HTTP回应的头信息；response.end方法用来写入HTTP回应的具体内容，以及回应完毕关闭本次对话。最后listen(9001)表示启动服务器实例，监听本季的9001端口。
// http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World');
//     response.end();
// }).listen(9001, '127.0.0.1');

// console.log('server running on port 9001');

// 另一种写法：
// function onRequet(request, response){
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World');
//     response.end();
// }

// http.createServer(onRequet).listen(9001, '127.0.0.1');
// console.log('server running on port 9001');

// 上面的例子是收到请求后生成网页，也可以事前写好网页，存在文件中，然后利用fs模块读取网页文件，将其返回。
// http.createServer((request, response) => {
//     fs.readFile('./index.html', (err, data) => {
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.end(data);
//     })
// }).listen(9001, '127.0.0.1');

// console.log('server running on port 9001');

// 下面的修改则是根据不同的网址的请求，显示不同的内容
// http.createServer((req, res) => {
//     const pathname = url.parse(req.url).pathname;
//     console.log(pathname);
//     // 主页
//     if(req.url == '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('Welcome to the homepage!');
//     }
//     // About页面
//     else if(req.url == '/about'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('Welcome to the about page!');
//     }
//     // 404错误
//     else{
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('404 error! File not found');
//     }
// }).listen(9001, '127.0.0.1');

// console.log('server running on port 9001');

// 2.2 request对象
// 有以下属性：
// url：发出请求的网址
// method：HTTP请求的方法
// headers：HTTP请求的所有的HTTP头信息

// 3.发出请求
// 3.1 get()
// 用于发出get请求

// 3.2 request()
// 用于发出HTTP请求
// var postData = querystring.stringify({
//     'msg' : 'Hello World!'
//   });
  
//   var options = {
//     hostname: 'www.google.com',
//     port: 80,
//     path: '/upload',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Content-Length': postData.length
//     }
//   };
  
//   var req = http.request(options, function(res) {
//     console.log('STATUS: ' + res.statusCode);
//     console.log('HEADERS: ' + JSON.stringify(res.headers));
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//       console.log('BODY: ' + chunk);
//     });
//   });
  
//   req.on('error', function(e) {
//     console.log('problem with request: ' + e.message);
//   });
  
//   // write data to request body
//   req.write(postData);
//   req.end();

// 4. Server()
// 用于新建一个服务器实例
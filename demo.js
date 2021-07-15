// 一、全局对象
// 1、global
// var x = 1;
// console.log(global.x);  //undefined
// 2、process
// console.log(process);
// 3、console

// 二、全局函数
// 1、setTimeout()
// 2、clearTimeout()
// 3、setInterval()
// 4、clearInterval()
// 5、require()
// 6、Buffer()

// 三、全局变量
// 1、__filename：指向当前运行的脚本文件名
// 2、__dirname：指向当前运行的脚本所在的目录

// 四、错误捕获
// 1、try...catch 不理想
// 2、回调函数
// const fs = require('fs');

// fs.readFile('./foo.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })
// 3、EventEmitter接口的error事件
// const EventEmitter = require('events').EventEmitter;
// const emitter = new EventEmitter();

// emitter.on('error', err => {
//     console.error(`出错：${err.message}`);
// })
// emitter.emit('error', new Error('something bad happened'));
// 4、uncaughtException事件
const logger = require('tracer').console();
process.on('uncaughtException', err => {
    console.error('Error caught in uncaughtException event:', err);
})
try{
    setTimeout(() => {
        throw new Error('error');
    }, 1);
}catch(err){
    console.log(err);
}


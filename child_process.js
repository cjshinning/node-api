// child_process模块用于新建子进程

// 1、exec()
// 用于执行bash命名，它的参数是一个命令字符串
// exec方法最多接受两个参数，第一个参数是所要执行的shell命令，第二个参数是回调函数，该函数接受第三个参数，分别是发生的错误、标准输出的显示结果、标准错误的显示结果
// const exec = require('child_process').exec;

// const ls = exec('ls -l', function(error, stdout, stderr){
//     if(error){
//         console.log(error.stack);
//         console('Error code: ' + error.code);
//     }
//     console.log('Child Process STDOUT: ' + stdout);
// })

// 由于标准输出和标准错误都是流对象（stream），可以监听data事件，因此上面的代码也可以改成下面这样
// const exec = require('child_process').exec;
// const child = exec('ls -l');

// child.stdout.on('data', function(data){
//     console.log('stdout: ' + data);
// })
// child.stderr.on('data', function(data){
//     console.log('stderr: ' + data);
// })
// child.on('close', function(code){
//     console.log('closing code: ' + code);
// })

// const exec = require('child_process').exec;
// exec('node -v', (error, stdout, stderr) => {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if(error !== null){
//         console.log('exec error: ' + error);
//     }
// })
// stdout: v12.5.0
// stderr:

// const exec = require('child_process').exec;
// const path = ';user input';
// exec('ls -l ' + path, (err, data) => {
//     console.log(data);
// })

// 2、execSync()
// execSync是exec的同步执行版本；它接受两个参数，第一个参数是所要执行的命令，第二个参数用来配置执行环境。
// var execSync = require("child_process").execSync;

// var SEPARATOR = process.platform === 'win32' ? ';' : ':';
// var env = Object.assign({}, process.env);

// env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + env.PATH;

// function myExecSync(cmd) {
//   var output = execSync(cmd, {
//     cwd: process.cwd(),
//     env: env
//   });

//   console.log(output);
// }

// myExecSync('eslint .');

// 3、execFile()
// execFile方法直接执行特定的程序，参数作为数组传入，不会被bash解释，因此具有较高的安全性
// const child_process = require('child_process');

// let path = '.';
// child_process.execFile('/bin/ls', ['-l', path], (err, result) => {
//     console.log(result);
// })

// 4、spawn()
// spawn方法创建一个子进程来执行特定命令，用法与execFile方法蕾丝，但是没有回调函数，只能通过监听事件，来获取运行结果。它属于异步执行，适用于子进程长时间运行的情况。
// const child_process = require('child_process');

// let path = '.';
// const ls = child_process.spawn('/bin/ls', ['-l', path]);
// ls.stdout.on('data', data => {
//     console.log('stdout: ' + data);
// })
// ls.stderr.on('data', data => {
//     console.log('stderr: ' + data);
// })
// ls.on('close', code => {
//     console.log('child process exited with code ' + code);
// })
// spawn方法接受两个参数，第一个是可执行文件，第二个是参数数组

// 5、fork()
// fork方法直接创建一个子进程，执行Node脚本，fork('./child.js')相当于spawn('node', ['./child.js'])。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。
const child_process = require('child_process');
const n = child_process.fork('./child.js');
n.on('message', m => {
    console.log('PARENT got message: ', m);
})
n.send({hello: 'world'});


// 6、send()
// 使用child_process.fork()生成新的进程之后，就可以用child.send(message, [sendHandle])向新进程发送消息。新进程中通过监听message事件，来获取消息。

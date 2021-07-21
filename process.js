
// process对象是Node的一个全局对象，提供当前Node进程的信息，它可以在脚本的任意位置使用，不必通过require命令加载。该对象部署了EventEmitter接口。

// 1.属性
// process对象提供一系列的属性，用于返回系统信息。
// process.argv：返回一个数组，成员是当前进程的所有命令行参数。
// process.env：返回一个对象，成员当前shell的环境变量
// process.installPrefix：返回一个字符串，表示Node安装路径的前缀
// process.pid：返回一个数字，表示当前进程的进程号
// process.title：返回一个字符串，默认值为node，可以自定义该值
// process.version：返回一个字符串，表示当前使用的Node版本

// process.argv返回一个数组，由命令行执行脚本时的各个参数组成。
// 第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
// console.log(process.argv);
// ['/Users/jiechen/.nvm/versions/node/v12.5.0/bin/node',
// '/Users/jiechen/project/node-api/process.js',
// 'a',
// 'b',
// 'c']

// let myArgs = process.argv.slice(2);
// console.log(myArgs);
// ['a', 'b', 'c'];

// console.log(process.env);

// 2. 方法
// process.chdir()：切换工作目录到指定目录。
// process.cwd()：返回运行当前脚本的工作目录的路径。
// process.exit()：退出当前进程。
// process.getgid()：返回当前进程的组id
// process.getuid()：返回当前进程的用户ID
// process.nextTick()：指定回调函数在当前执行栈的尾部，下一次Event Loop之前执行。
// process.on()：监听事件。
// process.setgid()：指定当前进程的组，可以使用数字ID，也可以使用字符串ID
// process.setuid()：指定当前进程的用户，可以使用数字ID，也可以使用字符串ID

process.on('uncaughtException', function(err){
    console.error('got an error: %s', err.message);
    process.exit(1);
  });
  
  setTimeout(function(){
    throw new Error('fail');
  }, 100);
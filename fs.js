const fs = require('fs');
const path = require('path');

// 1.readFile(), readFileSync()
// readFile用于异步读取数据
// 接受的第一个参数是文件路径，第二个参数是一个表示配置的对象，也可以是一个表示文本文件编码的字符串。
// 第二个参数不指定编码返回一个Buffer实例，否则返回一个字符串
// fs.readFile('./images/tip16.png', (err, buffer) => {
//     if(err) throw err;
//     // process(buffer);
//     console.log(buffer);
// })

// 2.writeFile(),writeFileSync()
// writeFile用于异步写入文件
// 第一个参数是写入的文件名，第二个参数是写入的字符串，第三个参数是回调函数
// 回调函数前还可以再加一个参数，表示写入字符串的编码（默认是utf8）
// fs.writeFile('message.txt', 'Hello Node.js', 'utf8', (err) => {
//     if(err) throw err;
//     console.log('It\'s saved!');
// })
// writeFileSync用于同步写入文件
// fs.writeFileSync(fileName, str, 'utf8');

// 3.exists
// fs.exists('./demo1.js', (exists) => {
//     console.log(exists ? "it's there" : "no file");
// })

// 4. mkdir(), writeFile(), readFile()
// mkdir用于新建目录
// mkdir接受三个参数，第一个目录名，第二个权限值，第三个是回调函数
// fs.mkdir('./helloDir', 0777, err => {
//     if(err) throw err;
// })

// writeFile用于写入文件
// fs.writeFile('./helloDir/message.txt', 'Hello Node', (err) => {
//     if(err) throw err;
//     console.log('文件写入成功');
// })

// readFile用于读取文件内容
// 第一个参数是文件名，第二个参数是文件编码，第三个参数是回调函数
// fs.readFile('./helloDir/message.txt', 'UTF-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })
// 如果没有指定文件编码，返回的是缓存二进制数据，这时需要调用buffer对象的toString方法，将其转为字符串
// fs.readFile('./helloDir/message.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// })

// 5. mkdirSync(), writeFileSync(), readFileSync()
// 这三个方法是建立目录，写入文件，读取文件的同步版本
// fs.mkdirSync('./helloDirSync', 0777);
// fs.writeFileSync('./helloDirSync/message.txt', 'Hello Node Sync');
// const data = fs.readFileSync('./helloDirSync/message.txt', 'UTF-8');
// console.log('file created with contents: ');
// console.log(data);

// 6. readdir(), readdirSync()
// readdir方法用于读取目录，返回一个所包含的文件和子目录的数组
// fs.readdir(process.cwd(), (err, files) => {
//     if(err) throw err;

//     let count = files.length;
//     let results = {};
//     files.forEach(filename => {
//         fs.readFile(filename, data => {
//             results[filename] = data;
//             count--;
//             if(count <= 0){
//                 // 对所有文件进行处理
//                 console.log(results);
//             }
//         })
//     })
// })

// readdirSync方法是readdir方法的同步版本
// const files = fs.readdirSync(process.cwd());
// files.forEach(filename => {
//     const fullname = path.join(process.cwd(), filename);
//     const stats = fs.statSync(fullname);
//     if(stats.isDirectory()){
//         filename += '/';
//     }
//     process.stdout.write(fullname + '\t' +
//         stats.size + '\t' +
//         stats.mtime + '\n'
//     )
// })

// 7. stat()
// stat方法的参数是一个文件或目录，它产生一个对象，该对象包含了该文件或目录的具体信息，我们往往通过该方法判断正在处理的是一个文件，还是一个目录
// fs.readdir('./demo/', (err, files) => {
//     if(err) throw err;

//     files.forEach((file) => {
//         fs.stat('./demo/' + file, (err, stats) => {
//             if(err) throw err;

//             if(stats.isFile()){
//                 console.log('%s is file', file);
//             }else if(stats.isDirectory()){
//                 console.log('%s is directory', file);
//             }
//             console.log('stats: %s', JSON.stringify(stats));
//         })
//     })
// })

// 8. watchfile(), unwatchfile()
// watchfile方法监听一个文件，如果该文件发生变化，就会自动触发回调函数
// fs.watchFile('./testFile.txt', (curr, prev) => {
//     console.log('the current mtime is: ' + curr.mtime);
//     console.log('this previous mtime was: ' + prev.mtime);
// })

// fs.writeFile('./testFile.txt', 'changed', err => {
//     if(err) throw err;
//     console.log('file write complete');
// })

// 9. createReadStream()
// createReadStream方法往往用于打开大型的文本文件，创建一个读取操作的数据流
// 所谓大型文件，指的是文本文件的体积很大，读取操作的缓存装不下，只能分城几次发送，每次发送会触发一个data事件，发送结束后会触发end事件
function readLines(input, func){
    let remaining = '';

    input.on('data', data => {
        remaining += data;
        let index = remaining.indexOf('\n');
        let last = 0;
        while(index > -1){
            let line = remaining.substr(last, index);
            last = index + 1;
            func(line);
            index = remaining.indexOf('\n', last);
        }
        remaining = remaining.substring(last);
    })

    input.on('end', () => {
        if(remaining.length > 0){
            func(remaining);
        }
    })
}

function func(data){
    console.log(`Line: ${data}`);
}

let input = fs.createReadStream('./jquery-3.6.0.js');

readLines(input, func);
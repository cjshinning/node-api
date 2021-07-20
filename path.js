const path = require('path');

// 1. path.join()
// 用于连接路径。该方法主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是“/”，windows系统是“\”
// console.log(path.join('mydir', 'foo'));
// mydir/foo

// 2. path.resolve()
// 用于将相对路径转为绝对路径
// console.log(path.resolve('foo/bar', '/tmp/file/', '...', 'a/../subfile'));
// /tmp/file/.../subfile
// console.log(path.resolve('/foo/bar', './baz'));
// /foo/bar/baz
// console.log(path.resolve('/foo/bar', '/tmp/file/'));
// /tmp/file
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// /Users/jiechen/project/node-api/wwwroot/static_files/gif/image.gif

// 3. accessSync()
// 用于读取一个路径

// 4. path.relative
// 接受两个参数，这两个参数都应该是绝对路径。该方法返回第二个路径相对于第一个路径的那个相对路径
// console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
// ../../impl/bbb

// 5. path.parse()
// 返回路径各部分的信息
const myFilePath = '/someDir/someFile.json';
console.log(path.parse(myFilePath).base);
// someFile.json
console.log(path.parse(myFilePath).name);
// someFile
console.log(path.parse(myFilePath).ext);
// .json
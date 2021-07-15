// 1、概述
// Buffer对象是Node处理二进制数据的一个接口。它是Node原生提供的全局对象，可以直接使用，不需要require('buffer')
// Javascript比较擅长处理字符串，对于处理二进制数据（比如TCP数据流），就不太擅长。Buffer对象就是为了解决这个问题而设计的。它是一个构造函数，生成的实例代表了v8引擎分配的一段内存，是一个类似数组的对象，成员都为0到255的整数值，即一个8位的字节

// let bytes = new Buffer(256);

// for(let i=0;i<bytes.length;i++){
//     bytes[i] = i;
// }

// const end = bytes.slice(240, 256);
// console.log(end[0]);    //240
// end[0] = 0;
// console.log(end[0]);    //0

// const bytes = new Buffer(8);
// console.log(bytes);

// for(let i=0;i<bytes.length;i++){
//     bytes[i] = i;
// }

// const more = new Buffer(4);
// bytes.copy(more, 0, 4, 8);
// console.log(more[0]);   //4

// 2、Buffer构造函数
// 参数是整数，指定分配多少个字节内存
// const hello = new Buffer(5);
// console.log(hello);
{/* <Buffer 00 00 00 00 00> */}

// 参数是数组，数组成员必须是整数值
// const hello = new Buffer([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
// console.log(hello.toString());  //Hello

// 参数是字符串
// const hello = new Buffer('Hello');
// console.log(hello.length);  //5
// console.log(hello.toString());  //Hello

// 参数是字符串（不省略编码）
// const hello = new Buffer('Hello', 'utf8');
// console.log(hello.toString());  //Hello

// 参数是另一个Buffer实例，等同于拷贝后者
// const hello1 = new Buffer('Hello');
// const hello2 = new Buffer(hello1);
// console.log(hello2.toString()); //Hello

// const fs = require('fs');
// const buffer = new Buffer(1024);

// const readSize = fs.readSync(fs.openSync('/dev/tty', 'r'), buffer, 0, bufferSize);
// const chunk = buffer.toString('utf8', 0, readSize);

// console.log('INPUT: ' + chunk);

// 3、类的方法
// Buffer.isEncoding() 
// 方法返回一个布尔值，表示Buffer实例是否为指定编码
// console.log(Buffer.isEncoding('utf8'));
// true

// Buffer.isBuffer()
// 接受一个对象作为参数，返回一个布尔值
// console.log(Buffer.isBuffer(Date));
// false

// Buffer.byteLength()
// 返回字符串实际占据的字节长度，默认编码方式为utf8
// console.log(Buffer.byteLength('Hello', 'utf8'));
// 5

// Buffer.concat()
// 将一组Buffer对象合并为一个Buffer对象
// const i1 = new Buffer('Hello');
// const i2 = new Buffer(' ');
// const i3 = new Buffer('World');
// console.log(Buffer.concat([i1, i2, i3]).toString());

// Buffer.concat()还可以接受第二个参数，指定合并后Buffer对象的总长度
// const i1 = new Buffer('Hello');
// const i2 = new Buffer(' ');
// const i3 = new Buffer('World');
// console.log(Buffer.concat([i1, i2, i3], 10).toString());

// 4、实例方法
// const buf = new Buffer(1234);
// console.log(buf.length);    //1234

// buf.write('some string', 0, 'ascii');
// console.log(buf.length);    //1234

// 5、实例的方法
// write()
// write方法可以向指定的Buffer对象写入数据。它的第一个参数是缩写入的内容，第二个参数是所写入的起始位置，第三个参数是编码方式，默认为utf8
// const buf = new Buffer(5);
// buf.write('He');
// buf.write('l', 2);
// buf.write('lo', 3);
// console.log(buf.toString());

// slice()
// 返回一个按照指定位置、从原对象切割出来的Buffer实例，它的两个参数分别切割的起始位置和终止位置
// const buf = new Buffer('just some data');
// const chunk = buf.slice(5,9);
// console.log(chunk.toString()); 
// some

// toString()
// 将Buffer实例，按照指定编码（默认为utf8）转为字符串
// const hello = new Buffer('Hello');
// console.log(hello);
// console.log(hello.toString());
{/* <Buffer 48 65 6c 6c 6f> */}
// Hello

// const buf = new Buffer('just some data');
// console.log(buf.toString('ascii', 5, 9));
// some

// toJSON()
// toJSON方法将Buffer实例转为JSON对象。如果JSON.stringify方法调用Buffer实例，默认会先调用toJSON方法
const buf = new Buffer('test');
const json = JSON.stringify(buf);
console.log(json);
// {"type":"Buffer","data":[116,101,115,116]}

const copy = new Buffer(JSON.parse(json));
console.log(copy);
{/* <Buffer 74 65 73 74> */}

// 参考：https://javascript.ruanyifeng.com/nodejs/buffer.html
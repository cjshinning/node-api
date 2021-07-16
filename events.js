// Event Emitter 是一个接口，可以在任何对象上部署。

// events模块的EventEmiter是一个构造函数，可以用来生成事件发生器的实例emitter。
// Event Emitter 接口可以部署在任意对象上，使得这些对象也能订阅和发布消息
// const {EventEmitter} = require('events');

// function Dog(name){
//     this.name = name;
// }

// Dog.prototype.__proto__ = EventEmitter.prototype;

// const simon = new Dog('simon');

// simon.on('bark', function() {
//     console.log(`${this.name} barked`);
// })

// setInterval(() => {
//     simon.emit('bark');
// }, 500)

// Node 内置模块util的inherits方法，提供了另一种继承Event Emitter接口的方法

// const Radio = require('./radio');

// const station = {
//     freq: '80.16',
//     name: 'Rock N Roll Radio'
// }

// const radio = new Radio(station);

// radio.on('open', station => {
//     console.log(`"%s" FM %s 打开${station.name} ${station.freq}`);
//     console.log('♬ ♫♬');
// })

// radio.on('close', station => {
//     console.log(`"%s" FM %s 关闭${station.name} ${station.freq}`);
// })


// 二、实例方法
// 1、emit()
// emit方法，用来触发事件。它的第一个参数是事件名称，其余参数都会依次传入回调函数。
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// const connection = function(id){
//     console.log(`connection ${id}`);
// }

// myEmitter.on('connection', connection);
// myEmitter.emit('connection', 6);
// connection 6

// 2、once()
// 方法类似于on方法，但是回调函数只触发一次
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter;

// myEmitter.once('message', (msg) => {
//     console.log(`message: ${msg}`);
// })

// myEmitter.emit('message', 'this is the first message');
// myEmitter.emit('message', 'this is the second message');
// myEmitter.emit('message', 'welcome to nodejs');
// message: this is the first message

// 3、removeListener()
// 用于移除回调函数。它接受两个参数，第一个事件名称，第二个是回调函数名称。这就是说，不能用于移除匿名函数
// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// emitter.on('message', console.log);

// setInterval(() => {
//     emitter.emit('message', 'foo bar');
// }, 300);

// setTimeout(() => {
//     emitter.removeListener('message', console.log);
// }, 1000)

// 模拟once
// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// function onlyOnce(){
//     console.log('You will never see this again');
//     emitter.removeListener('firstConnection', onlyOnce);
// }

// emitter.on('firstConnection', onlyOnce);
// setInterval(() => {
//     emitter.emit('firstConnection');
// }, 300);

// 4、setMaxListeners()
// Node默认允许同一事件最多可以指定10个回调函数
// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// emitter.setMaxListeners(20);

// emitter.on('someEvent', function(){
//     console.log('event 1');
// })
// emitter.on('someEvent', function(){
//     console.log('event 2');
// })
// emitter.on('someEvent', function(){
//     console.log('event 3');
// })
// emitter.on('someEvent', function(){
//     console.log('event 4');
// })
// emitter.on('someEvent', function(){
//     console.log('event 5');
// })
// emitter.on('someEvent', function(){
//     console.log('event 6');
// })
// emitter.on('someEvent', function(){
//     console.log('event 7');
// })
// emitter.on('someEvent', function(){
//     console.log('event 8');
// })
// emitter.on('someEvent', function(){
//     console.log('event 9');
// })
// emitter.on('someEvent', function(){
//     console.log('event 10');
// })
// emitter.on('someEvent', function(){
//     console.log('event 11');
// })
// emitter.on('someEvent', function(){
//     console.log('event 12');
// })
// emitter.emit('someEvent');

// 5、removeAllListeners()
// 该方法用于移除某个事件的所有回调函数。
// 如果不带参数表示移除所有事件的回调函数。
// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// function firstConnection(){
//     console.log('this is the first connection');
// }
// function firstConnection2(){
//     console.log('this is the first connection2');
// }
// function secondConnection(){
//     console.log('this is the second connection');
// }

// emitter.on('firstConnection', firstConnection);
// emitter.on('firstConnection', firstConnection2);
// emitter.on('secondConnection', secondConnection);

// // emitter.removeAllListeners('firstConnection');
// emitter.removeAllListeners();

// setTimeout(() => {
//     emitter.emit('firstConnection');
//     emitter.emit('secondConnection');
// }, 1000);

// 6、listeners()
// 接受一个事件名称作为参数，返回该事件所有回调函数组成的数组。
// const EventEmitter = require('events');
// const ee = new EventEmitter;

// function onlyOnce(){
//     console.log(ee.listeners('firstConnection'));
//     ee.removeListener('firstConnection', onlyOnce);
//     console.log(ee.listeners('firstConnection'));
// }

// ee.on('firstConnection', onlyOnce);
// ee.emit('firstConnection');
// ee.emit('firstConnection');
// [ [Function: onlyOnce] ]
// []

// 三、错误捕获
// 事件处理过程中抛出的错误，可以使用try...catch捕获
const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on('beep', () => {
    console.log('beep');
})

emitter.on('beep', () => {
    throw Error('oops!');
})

emitter.on('beep', () => {
    console.log('beep again');
})

console.log('before emit');

try{
    emitter.emit('beep');
}catch(err){
    console.error('caught while emitting: ', err.message);
}

console.log('after emit');
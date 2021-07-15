// 1、assert()
// 格式
// assert(value, message)
// 接受两个参数，当第一个参数对应的布尔值为true时，不会有任何提示，返回undefined。当一个参数对应的布尔值为false时，会抛出一个错误，该错误的提示信息就是第二个参数设定的字符串
// const assert = require('assert');

// function add(a, b){
//     return a + b;
// }

// var expected = add(1, 2);
// // assert(expected === 3, '预期1加2等于3');    
// //没有任何输出
// assert(expected === 4, '预期1加2等于3');
// // AssertionError [ERR_ASSERTION]: 预期1加2等于3

// 2、assert.ok()
// const assert = require('assert');

// function add(a, b){
//     return a + b;
// }

// var expected = add(1, 2);
// assert.ok(expected === 4, '预期1加2等于3');

// 3、assert.equal()
// equal接受三个参数，第一哥参数是实际值，第二个时预期值，第三个时错误的提示信息
// const assert = require('assert');

// function add(a, b){
//     return a + b;
// }

// var expected = add(1, 2);
// assert.equal(expected, 3, '预期1加2等于3');

// 4、assert.notEqual()
// const assert = require('assert');

// function add(a, b){
//     return a + b;
// }

// var expected = add(1, 2);
// assert.notEqual(expected, 4, '预期1加2不等于4');

// 5、assert.deepEqual()
// const assert = require('assert');

// const list1 = [1,2,3,4,5];
// const list2 = [1,2,3,4,5];

// assert.deepEqual(list1, list2, '预期两个数组应该有相同的属性');

// const person1 = { name: 'jenny', age: 18 };
// const person2 = { name: 'jenny', age: 18 };

// assert.deepEqual(person1, person2, '预期两个对象应该有相同的属性');

// 6、assert.notDeepEqual();
// const assert = require('assert');

// const list1 = [1,2, ,3,4,5];
// const list2 = [1,2,3,4,5];

// assert.notDeepEqual(list1, list2, '预期两个数组不相等');

// const person1 = { name: 'jenny', age: 18 };
// const person2 = { name: 'mike', age: 20 };

// assert.notDeepEqual(person1, person2, '预期两个对象不相等');

// 7、assert.strictEqual()
// const assert = require('assert');

// assert.strictEqual(1, '1', '预期严格相等');

// 8、assert.notDeepStrictEqual()
// const assert = require('assert');

// assert.notDeepStrictEqual(1, true, '预期严格不相等');

// 9、assert.throws()
// const assert = require('assert');

// assert.throws(
//     function(){
//         throw new Error('Wrong value');
//     },
//     Error,
//     '不符合预期的错误类型1'
// )

// assert.throws(
//     function(){
//         throw new Error('Wrong value');
//     },
//     /value/,
//     '不符合预期的错误类型2'
// )

// assert.throws(
//     function(){
//         throw new Error('Wrong value');
//     },
//     function(err){
//         if((err instanceof Error) && /value/.test(err)){
//             return true;
//         }
//     },
//     '不符合预期的错误类型3'
// )

// 10、assert.doesNotThrow()
// const assert = require('assert');

// assert.doesNotThrow(
//     function(){
//         console.log('Nothing to see here');
//     },
//     '预期不抛出错误'
// )

// 11、assert.ifError(value)
// const assert = require('assert');

// function sayHello(name, callback){
//     let error = false;
//     let str = 'Hello ' + name;
//     callback(error, str);
// }

// sayHello('World', function(err, value){
//     assert.ifError(err);
// })

// 12、assert.fail()
const assert = require('assert');

// assert.fail(21, 42, 'Test failed', '###');
assert.fail(21, 21, 'Test failed', '###');
// AssertionError [ERR_ASSERTION]: Test failed
// assert.fail(21, 42, undefined, '###');
// AssertionError [ERR_ASSERTION]: 21 ### 42

// 参考：https://javascript.ruanyifeng.com/nodejs/assert.html
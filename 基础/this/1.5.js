// 绑定this call
var obj = {};

var f = function () {
    return this;
};

var a = f() === globalThis // true
var b = f.call(obj) === obj // true

var obj2 = {};
// const a = obj.hasOwnProperty('toString') // false

// // 覆盖掉继承的 hasOwnProperty 方法
// obj.hasOwnProperty = function () {
//     return true;
// };
// obj.hasOwnProperty('toString') // true

const b = Object.prototype.hasOwnProperty.call(obj2, 'toString') // false

// 避免数组处理方法中的 this
// var o = {
//     v: 'hello',
//     p: ['a1', 'a2'],
//     f: function f() {
//         this.p.forEach(function (item) {
//             console.log(this + ' ' + item);
//         });
//     }
// }

// o.f()

// // 避免回调函数中的 this 
// var o = new Object();
// o.f = function () {
//     console.log(this === o);
// }

// // jQuery 的写法
// $('#button').on('click', o.f);


Function.prototype.bind = function (context) {
    var self = this; // 保存原函数
    return function () { // 返回一个新的函数
        return self.apply(context, arguments);
        // 执行新的函数的时候，会把之前传入的 context // 当作新函数体内的 this
    }
};
var obj = {
    name: 'sven'
};
var func = function () {
    console.log(this.name);
}.bind(obj);
func();
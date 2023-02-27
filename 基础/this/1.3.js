// 使用场合
// 构造函数
var Obj = function (p) {
    this.p = p;
};

var o = new Obj('Hello World!');
o.p   // Hello World!
// 对象方法
var obj = {
    foo: function () {
        console.log(this);
    }
};

obj.foo() // obj


var a = {
    p: 'Hello',
    b: {
        m: function () {
            console.log(this.p);
        }
    }
};

a.b.m() //undefined




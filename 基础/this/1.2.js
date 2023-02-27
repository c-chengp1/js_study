// 它的设计目的就是在函数体内部，指代函数当前的运行环境
var f = function () {
    console.log(this.x);
}

var x = 1;
var obj = {
    f: f,
    x: 2,
};

// 单独执行
f() // 1

// obj 环境执行
obj.f() // 2
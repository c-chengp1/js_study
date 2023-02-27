// this bind函数
var d = new Date();
var print = d.getTime.bind(d);
let b = print()
console.log(b)

var counter = {
    count: 0,
    inc: function () {
        this.count++;
    }
};

var obj = {
    count: 100
};
var func = counter.inc.bind(obj);
func();
obj.count // 101

// bind 参数
var add = function (x, y) {
    return x * this.m + y * this.n;
}

var obj = {
    m: 2,
    n: 2
};

var newAdd = add.bind(obj, 5);
newAdd(5) // 20


var obj = {
    name: '张三',
    times: [1, 2, 3],
    print: function () {
        this.times.forEach(function (n) {
            console.log(this.name);
        }.bind(this));
    }
};

obj.print()

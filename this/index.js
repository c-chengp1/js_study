// this的设计目的就是在函数体内部，指代函数当前的运行环境

// 指向调用对象
const personA = {
    name: "张三",
    describe: f,
};
const personB = {
    name: "李四",
    describe: f,
    action: {
        eat: function () {
            console.log(this.name);
        },
    },
};
function f() {
    return "姓名：" + this.name;
}
personA.describe(); //张三
personB.describe(); // 李四
personB.action.eat(); // undefined 作为普通函数
// ----------------------------------------------------------------

// 普通函数使用
const name = "cp";
function far() {
    return "姓名：" + this.name;
}
far(); //  cp
// ----------------------------------------------------------------

// 构造函数
let Person = function (p) {
    this.p = p;
};
let personC = new Person("Hello World!");
personC.p; // Hello World!
// ----------------------------------------------------------------

// 绑定this call
let obj1 = {};

let fn = function () {
    return this;
};
// 普通函数指向global对象
let a = fn() === globalThis; // true
// this指向obj1
let b = fn.call(obj1) === obj1; // true

var obj2 = {};
let c = Object.prototype.hasOwnProperty.call(obj2, "toString"); // false
// ----------------------------------------------------------------

// 绑定 this apply
let arr = Array.apply(null, ["a", , "b"]);
console.log(arr);

//apply参数
const arr2 = Array.prototype.slice.apply({ 0: 1, 1: 2, length: 2 }, [1]); // [1]
console.log(arr2);
// ----------------------------------------------------------------

// this bind函数

let date = new Date();
let getTime = date.getTime.bind(d);
let print = getTime();
console.log(print);

// 更改this对象
let counter = {
    count: 0,
    inc: function () {
        this.count++;
    },
};
let counter2 = {
    count: 100,
};

let func = counter.inc.bind(counter2);
func();
counter2.count; // 101

// bind 参数
const add = function (x, y) {
    return x * this.m + y * this.n;
};

let point = {
    m: 2,
    n: 2,
};
let newAdd = add.bind(obj, 5);
newAdd(5); // 20

// 通过bind绑定数组处理方法中的 this
const p = {
    name: "张三",
    times: [1, 2, 3],
    print: function () {
        this.times.forEach(
            function (n) {
                console.log(this.name);
            }.bind(this)
        );
    },
};
p.print();

// this的设计目的就是在函数体内部，指代函数当前的运行环境

// 指向调用对象
const personA = {
    name: "张三",
    describe: foo,
};
const personB = {
    name: "李四",
    describe: foo,
};
function foo() {
    return "姓名：" + this.name;
}
personA.describe(); //张三
personB.describe(); // 李四

let bar = personB.describe;
bar(); // 作为普通函数调用 this指向gloabl

// ----------------------------------------------------------------

// 普通函数使用
const name = "cp";
function far() {
    return "姓名：" + this.name;
}
far(); //  cp
// ----------------------------------------------------------------

// 构造函数
const Person = function (p) {
    this.name = name;
};
const personC = new Person("chengp");
personC.p; // chengp!
// ----------------------------------------------------------------

// 绑定this call
let obj1 = {};
function fn() {
    return this;
}
// 普通函数指向global对象
let isGlobal = fn() === globalThis; // true
// this指向obj1
let isObj1 = fn.call(obj1) === obj1; // true

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
    increment: function () {
        this.count++;
    },
};
let counter2 = {
    count: 100,
};

let func = counter.increment.bind(counter2);
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
const person = {
    name: "张三",
    times: [1, 2, 3],
    sayName: function () {
        this.times.forEach(
            function (n) {
                console.log(this.name);
            }.bind(this)
        );
    },
};
person.sayName();
// ----------------------------------------------------------------
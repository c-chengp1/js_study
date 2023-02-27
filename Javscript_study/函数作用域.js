// var a = 2;
// (function foo() {
//     console.log(a);
// })();

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// function c() {
//     var a = 3
//     b = 2
// }
// console.log(a)
function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function () {
    return this.name;
};
function Bar(name, label) {
    Foo.call(this, name); this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);
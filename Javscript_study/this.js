// function foo(num) {
//     console.log("foo: " + num);
//     // 记录 foo 被调用的次数
//     this.count++;
// }
// foo.count = 0;
// var i;
// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//     }
// }


// function foo(num) {
//     console.log("foo: " + num);
//     // 记录 foo 被调用的次数
//     foo.count++;
// }
// foo.count = 0
// var i;
// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//     }
// }

// var a = 2;
// function foo() {
//     console.log(this.a);
// }


// // foo(); // 2
// "use non-strict"
// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2,
//     foo: foo
// };
// var bar = obj.foo; // 函数别名!
// var a = "oops, global"; // a 是全局对象的属性 
// bar(); // "oops, global"

function foo(el) {
    console.log(el, this.id);
}
var obj = {
    id: "awesome"
};
// 调用 foo(..) 时把 this 绑定到 obj 
[1, 2, 3].forEach(foo, obj);
// 1 awesome 2 awesome 3 awesome
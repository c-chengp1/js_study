// foo();
// function foo() {
//     console.log(a); // undefined 
//     var a = 2;
// }

// foo(); // 不是 ReferenceError, 而是 TypeError!
// var foo = function bar() { // ...
// };

foo(); // "b"
var a = true;
if (a) {
    function foo() { console.log("a"); }
}
else {
    function foo() { console.log("b"); }
}
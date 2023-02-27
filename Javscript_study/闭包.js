// function createCounter() {
//     let counter = 0
//     const myFunction = function () {
//         counter = counter + 1
//         return counter
//     }
//     return myFunction
// }
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// console.log('example increment', c1, c2, c3)
// counter = undefined + 1
// console.log(counter)

// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }


// 返回一个函数组成的数组，它们的返回值是0～9
function constfuncs() {
    var funcs = [];
    for (var i = 0; i < 10; i++) {
        funcs[i] = function () {
            return i;
        };
    }
    return funcs;
}

var funcs = constfuncs();
console.log(funcs[5]())
// 返回值是什么?                          // => 1: 而没有重置d

var a = ['a', 'b', 'c'];

a.unshift('x','y'); // 4

console.log(a)
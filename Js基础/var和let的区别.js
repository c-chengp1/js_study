/**
 *var关键字变量的声明被提升
 */
console.log(b);
if (true) {
  var b;
}
/**
 * JavaScript引擎在扫描代码发现变量声明时，要么将它们提升至作用域顶部（遇到var声明），
 * 要么将声明放到TDZ中（遇到let和const声明)。
 * 访问TDZ中的量会触发运行时错误。
 * 只有执行过变量声明语句后，变量才会从TDZ中移出，然后方可正常访问。
 */
// console.log(a);
// let a = 2;

/**
 * 重复声明
 */
// var c;
// let c;
// console.log(c);

/**
 * 循环
 */
let func = [];
// for (var index = 0; index < 10; index++) {
//   console.log(index);
//   func.push(
//     (() => {
//       return function () {
//         console.log(value);
//       };
//     })(index)
//   );
// }
// console.log(11, index);

for (let index = 0; index < 10; index++) {
  func.push(() => {
    console.log(index);
  });
}

func.forEach((func) => {
  func();
});

var a = 1;

window.a === a;

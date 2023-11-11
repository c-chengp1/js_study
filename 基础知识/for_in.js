Object.prototype.objCustom = function () {};

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
obj.foo = "hello";

let bar = Symbol();
obj[bar] = 4;

/**
 * Returns the names of the enumerable string properties and methods of an object.
 */
Object.keys(obj); //[ 'a', 'b', 'c', 'foo' ]
/**
 * 迭代可枚举string属性
 */
for (let i in obj) {
  console.log(i); // logs "a", "b", "c", "foo", "objCustom"
}
/**
 * 迭代自身属性
 */
for (let i in obj) {
  if (obj.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}
// TypeError: obj is not iterable
// for (const iterator of obj) {
//   console.log(iterator);
// }

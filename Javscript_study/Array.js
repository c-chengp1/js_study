const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let aEntries = numbers.entries();
// console.log(aEntries)
// for (const n of aEntries) {
//   console.log(n);
// }
const aKeys = numbers.keys(); // 得到数组索引的迭代器 
console.log(aKeys.next()); // {value: 0, done: false } 
console.log(aKeys.next()); // {value: 1, done: false }

// for (const n of num) {
//   console.log(n % 2 === 0 ? 'even' : 'odd');
// }
let numbers4 = Array.of(1, 2, 3, 4, 5, 6);
numbers4.fill(2, 1);
console.log(numbers4)

let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3);
console.log((copyArray))
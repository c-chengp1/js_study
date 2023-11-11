// console.log("1")
// setTimeout(() => {
//     console.log(2)
// }, 1000)

// console.log("bye")

// (async () => {
//     const p4 = Promise.reject("err")
//     try {
//         const res = await p4
//         console.log(res)
//     } catch (error) {
//         console.log(111, error)
//     }
// })()

// async function async1() {
//     console.log("async1 start")                     z
//     await async2()
//     console.log("async1 end")
//     await async3()
//     console.log("async1 end and 2")
// }

// async function async2() {
//     console.log("async2")
// }

// async function async3() {
//     console.log("async3")
// }

// console.log('script start')
// async1()
// console.log("script end")

/**
 * 'script start'
 * "async1 start"
 * "async2"
 * "script end"
 * "async1 end"
 * "async3"
 * "async1 end and 2"
 */

const arr = [1, 2, 3, 4];

for (const key in arr) {
  console.log(key);
}

for (const iterator of arr) {
  console.log(iterator);
}

const { cpus } = require("os");
const numWorkers = cpus().length;

const [, , ...args] = process.argv;
console.log(args[0]); // "--watch"
let a = Boolean(1);
console.log(typeof a);

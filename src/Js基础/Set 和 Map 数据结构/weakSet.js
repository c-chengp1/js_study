// WeakSet


// const a = [[1, 2], [3, 4]];
// const ws = new WeakSet(a);



const ws = new WeakSet();
const obj = {};
const foo = {};

ws.add(globalThis)
ws.add(obj);
console.log(ws.has(globalThis))
console.log(ws.has(obj))
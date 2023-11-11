// const m = new Map();
// const o = { p: 'Hello World' };
// m.set(o, 'content')
// m.get(o)
// m.has(o)
// m.delete(o)
// m.has(o)


// const map = new Map([
//     ['name', '张三'],
//     ['title', 'Author']
// ]);

// map.size // 2
// map.has('name') // true
// map.get('name') // "张三"
// map.has('title') // true
// map.get('title') // "Author"


// const items = [
//     ['name', '张三'],
//     ['title', 'Author']
// ];

// const map = new Map();


// items.forEach(
//     ([key, value]) => {
//         // console.log(key, value);
//         map.set(key, value)
//     }
// );


const map = new Map();
const weakMap = new WeakMap();

(() => {
    const foo = { foo: 1 };
    const bar = { bar: 2 };
    map.set(foo, 1);
    weakmap.set(bar, 2);
})(2222)

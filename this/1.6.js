// 绑定this apply
let a = Array.apply(null, ['a', , 'b'])

console.log(a)

const b = Array.prototype.slice.apply({ 0: 1, 1: 2, length: 2 }, [1]) // [1]

console.log(b)

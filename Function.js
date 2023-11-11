// "use strict";
// 函数声明函数提升
console.log(sub.length);
sub(1, 2);

//函数表达式
// console.log(add);

/**
 * 函数表达式
 * @param {*} a
 * @param {*} b
 */
let add = function (a, b) {
  console.log(a + b);
};
/**
 * 函数提升
 * 函数声明
 * @param {参数一} a
 * @param {参数二} b
 */
function sub(a, b) {
  return a - b;
}

// 函数参数
let reflect = function () {
  console.log(arguments[0]);
};

reflect("hi");
/**
 * 不定参数
 * @param {*} object
 * @param  {...any} rest
 * @returns
 */
function pick(object, ...rest) {
  let result = Object.create(null);
  for (let i = 0; i < rest.length; i++) {
    const element = rest[i];
    result[element] = object[element];
  }
  return result;
}

let book = {
  title: "understanding es6",
  author: "Nicholas",
  year: 2016,
};

let bookdata = pick(book, "author", "year");
/**
 * 函数调用
 */
function Person(name) {
  if (typeof new.target !== "undefined") {
    this.name = name;
  } else {
    throw new Error("错误");
  }
}

let p1 = new Person("cp");

// let p2 = Person.call(p1, "cp1");

/**
 * 块级函数声明
 */

if (true) {
  console.log(typeof doSomething);
  function doSomething() {
    console.log(11);
  }
  doSomething();
}
// console.log(typeof doSomething);

/**
 * 箭头函数
 */

let p = ((name) => ({ getName: () => name }))("cp");
// console.log(p.getName());

/**
 * call
 */
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  Product.apply(this, [name, price]);
  // Product.bind(this, name, price)();
  this.category = "food";
}

const food = new Food("cheese", 5);

// console.log(food);

// function bindThis(f, oTarget) {
//   return function () {
//     return f.call(oTarget, ...arguments);
//   };
// }

// function bindThis(f, oTarget) {
//   return f.bind(oTarget);
// }

// function bindThis(f, oTarget) {
//   return function () {
//     return f.apply(oTarget, arguments);
//   };
// }

function bindThis(f, oTarget) {
  return function () {
    oTarget.f = f;
    return oTarget.f(...arguments);
  };
}

let result = bindThis(
  function ab(a, b) {
    return this.test + a + b;
  },
  { test: 2 }
)(2, 3);

// console.log(result);



let arr5 = _createArray(5);

// console.log(arr5);

// let a = Array("1");
// let b = new Array("1");
// console.log(a, b);



console.log(_flatten([1, 2, [1, 2, [1, 2, [1, 2]]]]));

let a = [].concat(1, 2, 3, [4, 5, [6, 7, [8, 9]]]);
console.log(a);

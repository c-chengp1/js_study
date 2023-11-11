let obj = {
  a: 1,
  b: 2,
};

// 动态赋值
obj.c = 3;

// 获取所有属性名
let keys = Object.keys(obj);
keys;
// 判断是是否有该属性
console.log("a" in obj);
console.log("toString" in obj);

//判断自身是否有该属性
let isOwn = obj.hasOwnProperty("a");
isOwn;

// for in 判断
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(element);
  }
}

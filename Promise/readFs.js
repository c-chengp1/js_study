const fs = require("fs");

// Promise functionality
let p = new Promise((resolve, reject) => {
  // 这里要写成绝对路径，相对路径在执行时可能会报错
  fs.readFile("./a.html", (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});

p.then(
  (val) => {
    console.log(val.toString());
  },
  (err) => {
    console.log(err);
  }
);

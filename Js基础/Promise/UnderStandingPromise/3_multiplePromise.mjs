/**
 * Promise.all
 */
let promise1 = Promise.resolve(42);

let promise2 = Promise.reject(43);

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(44);
  }, 100);
});

let promise4 = Promise.all([promise1, promise2, promise3]);

promise4.then(
  (value) => {
    console.log(value);
  },
  (value) => {
    console.log(11, value);
  }
);

let promise5 = Promise.all([promise1, promise2, promise3]);

promise5.then(
  (value) => {
    console.log(value);
  },
  (value) => {
    console.log(11, value);
  }
);
// import { readFile } from "node:fs/promises";

// function readFiles(filenames) {
//   return Promise.all(filenames.map((filename) => readFile(filename, "utf8")));
// }

// readFiles(["file1.json", "file2.json"]).then((fileContents) => {
//   const data = fileContents.map((fileContent) => JSON.parse(fileContent));
//   console.log(data);
// });

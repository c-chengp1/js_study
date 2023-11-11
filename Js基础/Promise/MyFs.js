function miniReadFile(path) {
  return new Promise((resolve, reject) => {
    require("fs").readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

miniReadFile("./this.js").then(
  (val) => {
    console.log(val.toString());
  },
  (err) => {
    console.log(err);
  }
);

const util = require("util");
const fs = require("fs");
let miniReadFile2 = util.promisify(fs.readFile);

miniReadFile2("../this.js").then(
  (val) => {
    console.log(val.toString());
  },
  (err) => {
    console.log(err);
  }
);

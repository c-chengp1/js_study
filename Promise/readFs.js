const fs = require("fs")


// c

// Promise
let p = new Promise((resolve, reject) => {
    fs.readFile("../this.js", (err, data) => {
        if (err) reject(err)
        resolve(data);
    })
})


p.then(
    (val) => {
        console.log(val.toString())
    },
    (err) => {
        console.log(err)
    }
)
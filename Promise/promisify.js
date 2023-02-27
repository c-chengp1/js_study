const util = require('util')
const fs = require('fs')
let miniReadFile = util.promisify(fs.readFile)

miniReadFile("../this.js").then(
    (val) => {
        console.log(val.toString())
    },
    (err) => {
        console.log(err)
    }
)
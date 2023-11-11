const util = require('util')
const fs = require('fs')

let mini = util.promisify(fs.readFile)
mini('./resource/content.text').then(
  value=>{
    console.log(value.toString())
  }
)
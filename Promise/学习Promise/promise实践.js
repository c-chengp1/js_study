const fs = require('fs')
// fs.readFile('./resource/content.text',(err,data)=>{
//   if(err) throw err;
//   console.log(data.toString());
// })
let p = new Promise((resolve,reject)=>{
  fs.readFile('./resource/content.text',(err,data)=>{
    if(err)reject(err);
    resolve(data)
  })
})
console.log(p)
p.then(
  value=>{
    console.log(value.toString());
  },reason=>{
    throw err
  }
)
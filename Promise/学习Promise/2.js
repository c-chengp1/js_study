function miniReadFile(path){
  return new Promise((resolve,reject)=>{
    require('fs').readFile(path,(err,data)=>{
      if(err)reject(err)
      resolve(data)
    })
  })
}
miniReadFile('./resource/content.text').then(
  value=>{
    console.log(value.toString())
  },reason=>{
    console.log(reason)
  }
)
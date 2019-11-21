const fs = require('fs');

const result = fs.readFile('./06_fs.js',(err,data)=>{
  if(err){
    console.log(err)
  }else{
    console.log(data.toString())
  }
})

// 因为是异步，所以这里同步是获取不到的，返回undefined
console.log(result)
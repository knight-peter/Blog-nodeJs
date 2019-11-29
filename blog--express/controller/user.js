const {exec,} = require('../db/mysql')
const {genPassword} = require('../utils/cryp')

const loginCheck = (username,password) =>{
  // 先使用假数据
  return new Promise((resolve,reject)=>{
    if(username === 'zhangsan' && password === '123'){
      resolve({
        username:'zhangsan',
        password:'123'
      })
    }
    reject(false)
  })
  
}

module.exports = {
  loginCheck
}
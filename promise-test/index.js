const fs = require('fs')
const path = require('path')



//  callback方式 获取一个文件内容
/* function getFileContent(fileName, callback) {
  const fullFileName = path.resolve(__dirname, 'files', fileName)

  fs.readFile(fullFileName, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    callback(JSON.parse(data.toString()))
  })
} */


// 测试
/* getFileContent('a.json',aData => {
  console.log('a data:',aData)
  getFileContent(aData.next,bData => {
    console.log('b data:',bData)
    getFileContent(bData.next,cData => {
      console.log('c data:',cData)
    })
  })
}) */

// async/await
function getFileContent(fileName) {
  return new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(JSON.parse(data.toString()))
    })
  })
}

(async function () {
  const aData = await getFileContent('a.json');
  console.log('a data:', aData)
  const bData = await getFileContent(aData.next);
  console.log('b data:', bData)
  const cData = await getFileContent(bData.next);
  console.log('c data:', cData)
}())
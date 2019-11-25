// process.env.NODE_ENV
const querystring = require('querystring')
const handleBlogRouter = require("./src/router/blog")
const handleUserRouter = require("./src/router/user")

// 用于处理 post data
const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    // 返回正确值
    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData)
      )
    })
  })
}

const serverHandle = async (req, res) => {

  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json')
  // 获取path
  const url = req.url
  req.path = url.split('?')[0]

  // 解析 query
  req.query = querystring.parse(url.split('?')[1])

  // 处理post data
  const postData = await getPostData(req)
  req.body = postData

  // 处理blog路由
  // const blogData = handleBlogRouter(req,res)
  // if(blogData){
  //   res.end(
  //     JSON.stringify(blogData)
  //   )
  //   return
  // }
  const blogData = await handleBlogRouter(req, res)
  if (blogData) {
    res.end(
      JSON.stringify(blogData)
    )
    return
  }



  // 处理 user 路由
  const userData = handleUserRouter(req, res)
  if (userData) {
    res.end(
      JSON.stringify(userData)
    )
    return
  }

  //  未命中路由，返回404
  res.writeHead(404, {
    "content-type": "text/plain"
  })
  res.write("404 Not Found\n")
  res.end()

}

module.exports = serverHandle
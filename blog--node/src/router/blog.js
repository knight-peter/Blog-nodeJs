const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require('../controller/blog')
const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')

const handleBlogRouter = async(req, res) => {
  const method = req.method //GET POST
  const {
    id
  } = req.query

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const {
      author = '', keyword = ''
    } = req.query || {};
    // 使用getList获取数据
    const listData = await getList(author, keyword)
    // 使用SuccessModel，返回正确格式
    return new SuccessModel(listData)
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {

    const data = await getDetail(id)
    return new SuccessModel(data)
  }

  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    // 登录名（作者）暂时用假数据,待开发登录后再改成真实数据
    const author = 'zhangsan'
    req.body.author = author
    const data = await newBlog(req.body)
    return new SuccessModel(data)
  }

  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/updata') {
    const result = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新博客失败')
    }
  }

  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const result = delBlog(id)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('删除博客失败')
    }
  }

}

module.exports = handleBlogRouter
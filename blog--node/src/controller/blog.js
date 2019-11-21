const getList = (author,keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id:1,
      title:'标题A',
      content:'内容A',
      createTime: 1574301858673,
      author:'zhangsan'
    },
    {
      id:2,
      title:'标题B',
      content:'内容B',
      createTime: 1574301916633,
      author:'zhangsan'
    },
  ]
}

const getDetail = (id) =>{
  return {
    id:1,
      title:'标题A',
      content:'内容A',
      createTime: 1574301858673,
      author:'zhangsan'
  }
}

const newBlog = (blogData = {})=>{
  // blogData 是一个博客对象，包含 title content 属性
  console.log('newBlog blogData...',blogData)
  return {
    id:3 // 表示新建博客，插入到数据表里面的 id
  }
}

// id就是要更新博客的id
// blogData是一个博客对象，包含title,content属性
const updateBlog = (id,blogData={})=>{
  console.log('update blogData...',id,blogData)
  return true
}

const delBlog = (id)=>{
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
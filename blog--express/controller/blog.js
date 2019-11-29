// mysql
const xss = require('xss')
const {
  exec
} = require('../db/mysql.js');

const getList = (author, keyword) => {
  // 拼接sql语句
  // 1=1 是一个正确的条件，用来占一个位置，再没有其他条件的时候不导致报错
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  // 返回的是promise
  return exec(sql)
}

const getDetail = async (id) => {
  const sql = `select * from blogs where id='${id}'`
  const result = await exec(sql)
  // 返回对象
  return result[0]
}

const newBlog = async (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content 属性
  const {
    title,
    content,
    author
  } = blogData;
  const createtime = Date.now()
  const sql = `insert into blogs (title, content, createtime, author) values ('${title}', '${content}', '${createtime}', '${author}')`;
  const {insertId:id} = await exec(sql)
  return {
    id // 表示新建博客，插入到数据表里面的 id
  }
}

// id就是要更新博客的id
// blogData是一个博客对象，包含title,content属性
const updateBlog = async (id, blogData = {}) => {
  const {title,content} = blogData
  const sql = `
    update blogs set title='${title}', content='${content} where id=${id}'
  `
  return await exec(sql)
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
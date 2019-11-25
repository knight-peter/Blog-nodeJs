const mysql = require('my-sql')

// 创建链接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xuqi2006',
  port: '3306',
  database: 'myblog'
})

// 开始连接
con.connect()

// 执行 sql 语句
// const sql = 'select * from users;'
const sql = `update users set realname='李四2' where username='lisi';`
con.query(sql,(err,result)=>{
  if(err){
    console.error('err:',err)
    return
  }
  console.log('result:',result)
})

/* 
insertId 插入id
changedRows 改变的行
*/

// 关闭连接
con.end()
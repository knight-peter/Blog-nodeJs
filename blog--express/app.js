var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

// 引用路由
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog')
const userRouter = require('./routes/user')
// 客户端访问形成实例
var app = express();

// view engine setup
// 视图引擎
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// 自动生成日志
app.use(logger('dev'));
// post请求传回的数据，处理成json格式放到req.body上
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 解析cookie
app.use(cookieParser());
// 处理静态文件
// app.use(express.static(path.join(__dirname, 'public')));

// const redisClient = require('./db/redis')
// const sessionStore = new RedisStore({
//   client: redisClient
// })
app.use(session({
  secret:'WJiol#23123',
  cookie:{
    path:'/', // 默认配置
    httpOnly:true, // 默认配置
    maxAge: 24*60*60*1000
  }
}))

// 注册路由，定义父级path
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));//错误提示
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

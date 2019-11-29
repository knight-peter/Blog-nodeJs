- bin
> 起服务
- public
> 静态文件
- routes
> 路由
- views
> html模板
- app.js
> 处理返回值  
  
### bin/www
> 这里是createServe的逻辑，用来起服务，跟业务代码无关。设置端口，createServe，listen。

### app.js
> 系统基本设置及配置

### routers
> 子路由
> 使用`controller`获取数据
> 处理成正确返回的格式或者错误返回的格式
> 使用res.json()方法转换成json格式
> 逻辑层，管理路由，处理路由的信息，返回正确格式的数据。数据是什么样子它不管。

### controller
> 使用`db/mysql.js`,获得从数据库返回的数据
> 只关心数据，根据参数返回数据

### db/mysql.js
> 使用`config/db.js`,传入数据库配置
> 链接mysql数据库，使用sql语句获取数据

### config/db.js
> mysql数据库配置

### 路由和api
前端后端、不同端(子系统)之间对接的一个术语

url(路由) `/api/blog/list` get，输出，输入

路由：
API 的一部分
后端系统内部的一个定义

- app.use用来注册中间件，先收集起来
- 遇到http请求，根据path和method判断触发哪些
- 实现next机制，即上一个通过next触发下一个
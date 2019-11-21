### bin/www.js
> 这里是createServe的逻辑，用来起服务，跟业务代码无关。设置端口，createServe，listen。

### app.js
> 系统基本设置及配置

### src/router
> 逻辑层，管理路由，处理路由的信息，返回正确格式的数据。数据是什么样子它不管。

### src/controller
> 只关心数据，根据参数返回数据

### 路由和api
前端后端、不同端(子系统)之间对接的一个术语

url(路由) `/api/blog/list` get，输出，输入

路由：
API 的一部分
后端系统内部的一个定义
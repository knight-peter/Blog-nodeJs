var express = require('express');
var router = express.Router();
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

/* GET home page. */
router.get('/list', async (req, res, next) => {
  const {
    author = '', keyword = ''
  } = req.query || {};
  // 使用getList获取数据
  const listData = await getList(author, keyword)
  // 使用SuccessModel，返回正确格式
  res.json(new SuccessModel(listData))
});

router.get('/detail', function (req, res, next) {
  res.json({
    errno: 0,
    data: 'ok'
  })
});

module.exports = router;
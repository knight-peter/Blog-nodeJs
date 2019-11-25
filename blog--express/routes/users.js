var express = require('express');
var router = express.Router();

/* GET users listing. */
// 定义子级path
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

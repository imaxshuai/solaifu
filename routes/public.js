const router = require('koa-router')();
const user = require('../controllers/user');

//城市选择
router.get('/login', user.loginUser);

module.exports = router;

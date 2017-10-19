const router = require('koa-router')();
const user = require('../controllers/user');

router.prefix('/api/users');

router.get('/', user.getUser);

//用户注册
router.post('/register', user.registerUser);
//用户登录
router.post('/login', user.loginUser);

module.exports = router;

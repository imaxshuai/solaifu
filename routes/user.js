const router = require('koa-router')();
const user = require('../controllers/user');

router.prefix('/api/users');

router.get('/', user.getUser);

router.post('/register', user.registerUser);

module.exports = router;

const router = require('koa-router')()

router.prefix('/api/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/', function (ctx, next) {
  console.log(ctx.request.body);
  ctx.body = {
    success: true,
    info: '用户数据获取成功!'
  }
})

module.exports = router;

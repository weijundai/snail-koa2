
const router = require('@koa/router')()
const helloWorld = (ctx,next) => {
    ctx.body = 'Hello World!'
  }
  
  router.get('/', helloWorld)

  router.get('/user',(ctx)=>{
    ctx.body='获取用户数据成功'
  })
  

  module.exports =router
const Koa = require('koa')
const logger = require('koa-logger')
const router = require('./router/route')

const app = new Koa()

// middlewares

app.use(logger())

app.use(router.routes())
.use(router.m)

app.listen(3000,()=>{
  console.log('The server is running on http://localhost:3000')
})

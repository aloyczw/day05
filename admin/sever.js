const express=require('express')
const app=express()
const db=require('./db/schema')//建立数据库链接ok
const userRouter=require('./router/adminuser')
app.use('/admin/user',userRouter)//一定是路由名拼接接口名
app.listen(3000,()=>{
    console.log('server')
})
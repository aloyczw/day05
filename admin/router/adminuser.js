const express=require('express')
const router=express.Router()
const model=require('../db/model/user')
const Mail=require('../utils/mail')
let codes=[]//保存产生的验证码
// 验证邮箱
router.get('/checkmial',(req,res)=>{
    let {us}=req.query
    model.find({us})
    .then((data)=>{
        if(data.length){
            res.send({err:0,msg:'邮箱可用'})
        }else{
            res.send({err:-1,msg:'邮箱已占用'})
        }
    })
    .catch((err)=>{
        console.log(err,'no ok')
    })
})
// 发送验证码
router.get('/sendMail',(req,res)=>{
    let {mail}=req.query
    let code=parseInt(Math.random()*10000)//随即验证码
    let obj={}
    obj[mail]=code
    codes.push(obj)
    console.log(codes)
    Mail.send(mail,code)
    .then(()=>{
        res.send({err:0,msg:'发送成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'发送失败'})
    })
})
//注册接口
router.get('/reg',(req,res)=>{
    let {us,ps}=req.query
    model.insertMany({us,ps})
    .then((data)=>{
        console.log(data,'链接成功')
    })
    .catch((err)=>{
        console.log(err,'连接失败')
    })
})
//登录接口
router.get('/login',(req,res)=>{
    let {us,ps}=req.query
    model.findOne({us,ps})
    .then((data)=>{
       if(data){
           res.send({err:0,msg:'登陆成功'})
       }else{
           res.send({err:-2,msg:'账号或密码不正确'})
       }
    })
    .catch((err)=>{
        res.send({err:-1,msg:'该账号不存在'})
    })
})
module.exports=router
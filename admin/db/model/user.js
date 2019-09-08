//和用户表集合 相关的Schema 对象和数据类型
const mongoose=require('mongoose')
const userSchema= mongoose.Schema({
    us:{type:String,required:true},
    ps:{type:String,required:true},
    age:{type:Number,default:0}
})
//ps us 是必填项  required:ture
// age  是选填项 当你没有给出数据是  那么默认是0
const model=mongoose.model('users',userSchema)//有第三个参数  代表的是users是否带S
//一参是表名  二参是字段名 也就是表头
module.exports=model//抛出模块

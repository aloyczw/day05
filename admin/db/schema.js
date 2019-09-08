// 创建schema对象  
// 数据库中没有表头  你可以把他当做表头
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1913',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', (err)=>{
  console.log('db err')
});
db.once('open', function() {
  console.log('db ok')
});
// var userSchema=mongoose.Schema({
//   name:String,
//   pass:String,
//   age:Number,
// });
// var User=mongoose.model('user',userSchema);
// 查找
// User.find()
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log('出错啦',err)
// })
// 增加
// User.insertMany({name:'wangyi',pass:'hehe',age:18})
//  .then((data)=>{
//    console.log(data)
//  })
//  .catch((err)=>{
//    console.log('出错了',err)
//  })
//   移除
// User.remove({age:{$gte:17}})
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log('出错了',err)
// })
// 更新
// User.updateOne({age:18},{$set:{name:'czw'}})
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log('出错啦',err)
// })
function fun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(1)
            reject('执行失败')
        },2000)
    })
}
function fn2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(2)
        },1000)
    })
}
fun1()
.then(()=>{
    console.log('fun1成功执行')
    return fun2()
})
.then(()=>{
    console.log('fun2成功执行')
})
.catch(()=>{
    console.log('有错误  请修改')
})
//多个异步操作按照顺序执行->嵌套->回调地狱->promise
//  基本使用  
//  在一个函数内部返回一个promise
//  在promise 对象的内部也有回调 resolve reject
//  在promise 对象有三种状态 等待 pending 成功resolve   then来处理 失败 reject catch来处理 
//  resolve 的数据then 可以接受
//  reject 的数据catch 可以接受
//  链式调用 fn fn1 fn2 fn3 fn4 fn5
//  fn()
//  .then(()=>{
//   return fn1()
//  })
//  .then(()=>{
//   return fn2()
//  })
//  .then(()=>{
//   return fn3()
//  })
//  .then(()=>{
//   return fn4()
//  })
//  .then(()=>{
//   return fn5()
//  })
//  .catch(()=>{   
//  })
//  链式调用中任何一个出现错误(reject() throw) 终止执行 由 catch 捕获错误

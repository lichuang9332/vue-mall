import axios from 'axios';

// export function request(config, success, failure){
//     //1.创建axios实例
//     const instance = axios.create({
//       baseURL:'http://127.0.0.1',
//       timeout:5000,

//     })
//     //发送真正的网络请求
//     instance(config).then(res=>{
//       success(res);
//     }).catch(err=>{
//       failure(err);
//     })
// }

// export function request(config){
//     //1.创建axios实例
//     const instance = axios.create({
//       baseURL:'http://127.0.0.1',
//       timeout:5000,

//     })
//     //发送真正的网络请求
//     instance(config.baseConfig).then(res=>{
//       config.success(res);
//     }).catch(err=>{
//       config.failure(err);
//     })
// }

//比较理想的解决方式 promise
// export function request(config){
//   return new Promise((resolve,reject)=>{
//     //1.创建axios实例
//     const instance = axios.create({
//       baseURL:'http://127.0.0.1',
//       timeout:5000,

//     })
//     //发送真正的网络请求
//     instance(config)
//     .then(res=>{
//       resolve(res);
//     }).catch(err=>{
//       reject(err);
//     })
//   })

// }

export function request(config){
    //1.创建axios实例
    const instance = axios.create({
      baseURL:'http://127.0.0.1',
      timeout:5000,

    })
    //2.axios拦截器
    instance.interceptors.request.use(config=>{
      //假如一些信息不符合要求
      //转圈圈的效果
      //登录token的判断
      console.log(config);
      //处理返回他
      return config;
    },err=>{
      console.log(err)
    });
    instance.interceptors.response.use(res=>{
      //结果
      console.log(res);
      //处理返回他
      return res.data;
    },err=>{
      console.log(err)
    });

    //3.发送真正的网络请求 本身就是一个promise
    return instance(config)

}

//导入常量
import {ADD_COUNTER,ADD_TO_CART} from './mutations-types.js'
export default {
      addCart(context,payload){
        //数组常用的函数：push pop shift unshift sort reverse map filter reduce join
        //find()
        //返回一个promise
        return new Promise((resolve,reject)=>{
          let old = null;
          for(let item of context.state.cartList){
            if(item.id == payload.id){
              old = item;
            }
          }
          if(old){
            //old.count +=1;
            context.commit('addCounter',old);
            resolve('数量+1');
          }else{
            payload.count =1;
            //context.state.cartList.push(payload);
            context.commit('addToCart',payload);
            resolve('商品+1');
          }
        })
      }
  }

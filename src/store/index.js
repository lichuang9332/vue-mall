//导入  vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

//1.Vuex是个插件，需要use
Vue.use(Vuex);

//2.创建Store 对象
const store = new Vuex.Store({
  state:{
    cartList:[

    ]
  },
  mutations:{
    addCart(state,payload){
      //数组常用的函数：push pop shift unshift sort reverse map filter reduce join
      //find()
      let old = null;
      for(let item of state.cartList){
        if(item.id == payload.id){
          old = item;
        }
      }
      if(old){
        old.count +=1;
      }else{
        payload.count =1;
        state.cartList.push(payload);
      }

    }

  }
})

//导出，挂载到Vue实例上面
export default store;

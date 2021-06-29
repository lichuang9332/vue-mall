//导入  vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//1.Vuex是个插件，需要use
Vue.use(Vuex);

//2.创建Store 对象
const store = new Vuex.Store({
  state:{
    cartList:[

    ]
  },
  //mutations唯一的目的就是修改state的状态
  //mutations中的方法最好是每个方法完成比较单一的事件
  mutations,
  getters,
  actions
})

//导出，挂载到Vue实例上面
export default store;

import Vue from 'vue'
import App from './App'
import router from './router'
//完整引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI);

//通过new 一个vue()实例，实现事件总线$bus
Vue.prototype.$bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

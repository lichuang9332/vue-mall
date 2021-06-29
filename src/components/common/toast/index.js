import Toast from './Toast.vue';
const obj = {}

obj.install = function(Vue){
  //Document.body.appendChild(Toast.$el)   //有问题加载不到
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast);
  //2.new的方式根据组件构造器，可以创建一个组件
  const toast = new toastContrustor();
  //3.将组件对象，手动挂载到某一个元素上面
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
  console.log('toast的install')
}
export default obj;

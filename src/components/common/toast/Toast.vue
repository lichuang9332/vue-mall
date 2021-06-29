<template>
  <div class="toast" v-show="isShow">
    <div class="toast-content">{{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    //封装成插件，不再需要这些属性
    // props:{
    //   msg:{
    //     type:String,
    //     default:''
    //   },
    //   isShow:{
    //     type:Boolean,
    //     default:false
    //   }
    // },
    data(){
      return {
        msg:'',
        isShow: false
      }
    },
    methods:{
      show(msg, duration=2000){
        //duration = duration || 2000;
        this.isShow = true;
        this.msg = msg;
        setTimeout(()=>{
            this.isShow = false;
            this.msg = '';
        },duration)
      }
    },
    computed:{

    },
    filters:{

    },
    components:{

    }

  }
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 8px 10px;
  background-color: rgba(75,75,75,0.3);
  z-index: 999;
  border-radius: 2px;
  color: #FFFFFF;
}
</style>

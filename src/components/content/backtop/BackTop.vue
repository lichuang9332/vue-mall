<template>
  <!-- 可以在外面监听组件 .native -->
  <div class="back-top">
      <img src="~assets/img/top03.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
    data(){
      return {
        message:''
      }
    },
    methods:{
      // //子组件往父组件发射事件
      // backClick(){
      //   this.$emit('backClickEmit')
      // }
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
.back-top{
position: fixed;
right: 10px;
bottom: 60px;
z-index: 999;
}
.back-top img{
  width: 44px;
  height: 44px;
  z-index: 99;
  border-radius: 22px;
  width: 44px;
  background-color: rgba(0,0,0,0.2);
}

</style>

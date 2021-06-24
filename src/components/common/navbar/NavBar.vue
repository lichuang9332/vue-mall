<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data(){
      return {
        message:''
      }
    },
    methods:{

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
.nav-bar{
  height: 44px;
  line-height: 44px;
  display: flex;
}
.nav-bar .left,.nav-bar .right{
  width: 60px;
  /* background: #ff5777; */
}
.nav-bar .center{
  flex: 1;
  text-align: center;
  /* background: #ff5777; */
}
</style>

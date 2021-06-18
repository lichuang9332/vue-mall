<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue"
  import {getHomeMenuData} from "network/home"

  export default {
    name: 'Home',
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
      NavBar
    },
    //生命周期函数
    created(){
      getHomeMenuData().then(res=>{
        console.log(res);
      })
    }

  }
</script>

<style>
.home-nav{
  background: #ff5777;
  color: #F0F0F0;
}
</style>

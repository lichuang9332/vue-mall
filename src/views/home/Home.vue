<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <el-carousel height="250px">
      <el-carousel-item v-for="item in banners" :key="item.url">
        <a :href="item.url">
          <img class="carousel-image" :src="item.url"/>
        </a>
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐分类展示组件 -->
    <home-recommend :recommends="recommends"></home-recommend>
    <!-- 本周流行组件 -->
    <feature></feature>
    <tab-control :titles = "['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue"
  import HomeRecommend from './child/HomeRecommend.vue'
  import Feature from './child/Feature.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  //import {getHomeMenuData} from "network/home"
  export default {
    name: 'Home',
    data(){
      return {
        message:'',
        recommends: [
          {link:'',image:require('assets/img/03.jpg'),title:'6.18钜惠'},
          {link:'',image:require('assets/img/04.jpg'),title:'好物推荐'},
          {link:'',image:require('assets/img/05.jpg'),title:'好物特卖'},
          {link:'',image:require('assets/img/06.jpg'),title:'超级抢购'}
        ],
        banners: [
                { url: require("assets/img/01.jpg") },
                { url: require("assets/img/02.jpg") },
                { url: require("assets/img/03.jpg") },
                { url: require("assets/img/04.jpg") }
              ]
      }
    },
    methods:{

    },
    computed:{

    },
    filters:{

    },
    components:{
      NavBar,
      HomeRecommend,
      Feature,
      TabControl
    },
    //生命周期函数
    created(){
      // getHomeMenuData().then(res=>{
      //   //console.log(res);
      //   this.banners = res.data.banner;
      //   this.recommends = res.data.recommend;
      // })
    }

  }
</script>

<style>
  #Home{
   padding-top: 44px;
  }
.home-nav{
  background: #ff5777;
  color: #F0F0F0;
  font-weight: 600;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}

.carousel-image{
  display: inline-block;
  width: 100%;
  max-width: 100%;
  height: 250px;
}

</style>

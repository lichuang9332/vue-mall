<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 这一块加多一个tab-control -->
    <tab-control class="tab-control-show"
    :titles = "['流行','新款','精选']"
    ref="tabControl1"
    v-show="isTabFixed"
    @tabClickPa="tabClickPa"></tab-control>
    <!-- 这一块都在滚动组件里面 -->
    <scroll class="content" ref="scroll"
    :probeType="3"
    :pullUpLoad = "true"
    @scrollEmit="scrollEmit"
    @pullingUpEmit="pullingUpEmit">
      <!-- 轮播图 -->
      <el-carousel height="250px">
        <el-carousel-item v-for="item in banners" :key="item.url">
          <a :href="item.url">
            <img class="carousel-image" :src="item.url" @load="imageLoad"/>
          </a>
        </el-carousel-item>
      </el-carousel>
      <!-- 推荐分类展示组件 -->
      <home-recommend :recommends="recommends"></home-recommend>
      <!-- 本周流行组件 -->
      <feature></feature>
      <tab-control
      :titles = "['流行','新款','精选']"
      ref="tabControl2"
      @tabClickPa="tabClickPa"></tab-control>
      <!-- 商品列表 搞个计算属性-->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue"
  import HomeRecommend from './child/HomeRecommend.vue'
  import Feature from './child/Feature.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  //导如商品列表组件
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import BackTop from 'components/content/backtop/BackTop.vue'
  //导入混入
  import {itemListener} from 'common/mixin.js'

  //import {getHomeMenuData,getHomeGoods} from "network/home"
  import {debounce} from 'common/utils'
  export default {
    name: 'Home',
    mixins:[itemListener],  //混入mixin
    data(){
      return {
        tabOffsetTop: 0,  //tabcontrol
        isTabFixed: false,    //是否显示顶部tabcontrol
        isImageLoad: false,    //是否允许图片加载
        isShowBackTop: false,   //是否显示回到顶部
        saveY: 0, //保存离开的时候滚动到的位置
        message:'',
        currentType: 'pop',
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
              ],
        goods:{
          'pop':{page:1,list:[
            {id:1,img:require("assets/img/01.jpg"),collect:'11',price:100.00,title:'商品11描述商品不错哦哈哈描述商品不错哦哈哈'},
            {id:2,img:require("assets/img/02.jpg"),collect:'22',price:200.00,title:'商品12描述商品不错哦哈哈描述商品不错哦哈哈'},
            {id:3,img:require("assets/img/03.jpg"),collect:'23',price:300.00,title:'商品13描述商品不错哦哈哈描述商品不错哦哈哈'},
            {id:4,img:require("assets/img/04.jpg"),collect:'24',price:400.00,title:'商品14描述商品不错哦哈哈描述商品不错哦哈哈'},
            {id:5,img:require("assets/img/05.jpg"),collect:'25',price:500.00,title:'商品15描述商品不错哦哈哈描述商品不错哦哈哈'},
            {id:6,img:require("assets/img/01.jpg"),collect:'11',price:100.00,title:'商品11描述商品不错哦哈哈描述商品不错哦哈哈'},
            {id:7,img:require("assets/img/02.jpg"),collect:'22',price:200.00,title:'商品12描述商品不错哦哈哈描述商品不错哦哈哈'},
            {id:8,img:require("assets/img/03.jpg"),collect:'23',price:300.00,title:'商品13描述商品不错哦哈哈描述商品不错哦哈哈'},
            {id:9,img:require("assets/img/04.jpg"),collect:'24',price:400.00,title:'商品14描述商品不错哦哈哈描述商品不错哦哈哈'},
            {id:10,img:require("assets/img/05.jpg"),collect:'25',price:500.00,title:'商品15描述商品不错哦哈哈描述商品不错哦哈哈'},
          ],pagesize:10},
          'new':{page:1,list:[
              {id:1,img:require("assets/img/06.jpg"),collect:'111',price:100.00,title:'商品21描述商品不错哦哈哈描述商品不错哦哈哈'},
              {id:2,img:require("assets/img/07.jpg"),collect:'222',price:200.00,title:'商品22描述商品不错哦哈哈描述商品不错哦哈哈'},
              {id:3,img:require("assets/img/03.jpg"),collect:'223',price:300.00,title:'商品23描述商品不错哦哈哈描述商品不错哦哈哈'},
              {id:4,img:require("assets/img/06.jpg"),collect:'224',price:400.00,title:'商品24描述商品不错哦哈哈描述商品不错哦哈哈'},
              {id:5,img:require("assets/img/07.jpg"),collect:'225',price:500.00,title:'商品25描述商品不错哦哈哈描述商品不错哦哈哈'},
            ],pagesize:10},
          'sell':{page:1,list:[
             {id:1,img:require("assets/img/07.jpg"),collect:'331',price:100.00,title:'商品31描述商品不错哦哈哈描述商品不错哦哈哈'},
             {id:2,img:require("assets/img/06.jpg"),collect:'332',price:200.00,title:'商品32描述商品不错哦哈哈描述商品不错哦哈哈'},
             {id:3,img:require("assets/img/05.jpg"),collect:'323',price:300.00,title:'商品33描述商品不错哦哈哈描述商品不错哦哈哈'},
             {id:4,img:require("assets/img/07.jpg"),collect:'324',price:400.00,title:'商品34描述商品不错哦哈哈描述商品不错哦哈哈'},
             {id:5,img:require("assets/img/06.jpg"),collect:'325',price:500.00,title:'商品35描述商品不错哦哈哈描述商品不错哦哈哈'},
           ],pagesize:10},
        }
      }
    },
    methods:{
      //1.事件监听相关的方法
      tabClickPa(index){
        // console.log(index);
        switch (index){
          case 0:
            this.currentType = 'pop'
          break;
          case 1:
            this.currentType = 'new'
          break;
          case 2:
            this.currentType = 'sell'
          break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick(){
        //通过ref拿到组件和组件的属性
          this.$refs.scroll.scroll.scrollTo(0,0,500)
      },

      //监听子组件发射的事件(决定是否显示回到顶部)
      scrollEmit(position){
        // console.log(position)
        if((-position.y)>1000){
          this.isShowBackTop = true
        }else{
          this.isShowBackTop = false
        }
        //判断tabControl是否吸顶(实现方式有点问题)
        console.log(-position.y);
        console.log(this.tabOffsetTop);
        this.isTabFixed = (-position.y) > this.tabOffsetTop


      },
      pullingUpEmit(){
        // console.log('上拉加载更多')
        // console.log(this.currentType);
        //请求数据，增加页码

        //清除
        this.$refs.scroll.scroll.finishPullUp()
        //刷新scroll
        this.$refs.scroll.scroll.refresh();

      },
      //图片加载完成,阻止多次调用
      imageLoad(){
        if(!this.isImageLoad){
          this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        }
        this.isImageLoad = true
      },

      //2.网络请求相关


      //3.防抖动函数(抽到utils里面)
      // debounce(func,delay){
      //   let timer = null;
      //   return function(...args){
      //     if (timer) clearTimeout(timer)
      //     timer = setTimeout(()=>{
      //       func.apply(this,args)
      //     },delay);
      //   }
      // }

    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list;
      }

    },
    filters:{

    },
    components:{
      NavBar,
      HomeRecommend,
      Feature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    //生命周期函数
    created(){
      // getHomeMenuData().then(res=>{
      //   //console.log(res);
      //   this.banners = res.data.banner;
      //   this.recommends = res.data.recommend;
      // })
      //请求商品数据
      // const type = 'pop';
      // getHomeGoods(type, 1, 10).then(res=>{
      //   //console.log(res)
      //   this.goods[type].list.push(...res.data.list); //数组的解构
      //   this.goods[type].page +=1;
      // })

    },
    mounted(){
      // //监听图片加载完成
      // const refresh = debounce(this.$refs.scroll.scroll.refresh(),200);
      // this.imgLoadListener = ()=>{
      //   //应用防抖动函数
      //   refresh();

      // };
      // this.$bus.$on('imgLoadComplete', this.imgLoadListener)

      // const tabControl = this.$refs.tabControl.$el.offsetTop;
      // console.log(tabControl);

    },
    destroyed(){
      console.log('首页销毁');
      //离开的时候注销掉首页图片的加载事件
      this.$bus.$off('imgLoadComplete', this.imgLoadListener);
       console.log('销毁imgLoad');
    },
    //进入
    activated(){
      console.log('activated');
      this.$refs.scroll.scroll.scrollTo(0, this.saveY,0);
      //回来的时候要刷一次scroll
      this.$refs.scroll.scroll.refresh();
    },
    //离开
    deactivated(){
      console.log('deactivated');
      this.saveY = this.$refs.scroll.scroll.y;
    }

  }
</script>

<!-- 当前样式作用域 -->
<style scoped>
  #Home{
/*    padding-top: 44px;
    padding-bottom: 59px;
    height: 100vh; */
  }
.home-nav{
  background: #ff5777;
  color: #F0F0F0;
  font-weight: 600;
  /* 在原生浏览器的时候,不跟随浏览器滚动 */
/*  position: fixed;
  left: 0;
  right: 0;
  top: 0; */
  z-index: 999;
}

.carousel-image{
  display: inline-block;
  width: 100%;
  max-width: 100%;
  height: 250px;
}
/* 粘性属性,达到条件后粘住，兼容性不好 */
/* .tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
} */
.tab-control-show{
  position: relative;
  z-index: 9;
}
.content{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}

</style>
<!-- 不加scoped的作用域 可以覆盖点elementUI的样式-->
<style>
  .el-carousel__button{
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
</style>

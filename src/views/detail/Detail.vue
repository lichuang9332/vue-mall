<template>
  <div class="detail">
    <!-- 导航栏 -->
      <DetailNavBar
      class="detail-nav-bar"
      ref='DetailNavBar'
      @backClickEmit="backClickEmit"></DetailNavBar>
      <div v-for="item in $store.state.cartList">{{item}}</div>
      <Scroll class="content"
      :probeType="3"
      @scrollEmit="scrollEmit"
      ref="scrolldetail">
          <!-- 轮播图 -->
          <el-carousel height="250px">
            <el-carousel-item v-for="item in detail.banners" :key="item.url">
              <a :href="item.url">
                <img class="carousel-image" :src="item.url" @load="imageLoad"/>
              </a>
            </el-carousel-item>
          </el-carousel>

          <div class="params">
            <h1>参数</h1>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
            </ul>
          </div>
          <div class="title">
            <h1>评论</h1>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
            </ul>
          </div>
          <div class="comment">
            <h1>推荐</h1>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
            </ul>
          </div>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          详情页=>{{id}}<br/>
          <h1>推荐商品</h1>
          <GoodsList :goods="showGoods"></GoodsList>
      </Scroll>
      <detail-bottom-bar @addToCartEmit="addToCartEmit" ></detail-bottom-bar>
      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from './child/DetailNavBar'
  import Scroll from 'components/common/scroll/Scroll'
  //推荐商品
  import GoodsList from 'components/content/goods/GoodsList'
  import DetailBottomBar from './child/DetailBottomBar'
  import BackTop from 'components/content/backtop/BackTop.vue'

  import {formatDate} from 'common/utils'
  import {getDetail,Goods} from 'network/detail'
  export default {
    name: 'Detail',
    data(){
      return {
        message: '',
        id: null,
        detail: null,
        goods:null,
        showGoods:[
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
          ],
          themeTopY:[0,250,650,1045],
          isShowBackTop: false,   //是否显示回到顶部
      }
    },
    methods:{
      //收到的滚动事件
      scrollEmit(position){
        // console.log(position)
        //判断tabControl是否吸顶(实现方式有点问题)
        //console.log(position.y);

          // console.log(position)
          if((-position.y)>1000){
            this.isShowBackTop = true
          }else{
            this.isShowBackTop = false
          }

        //监听滚动位置
        if(-position.y < this.themeTopY[1]){
          this.$refs.DetailNavBar.currentIndex =0;
        }else if(-position.y < this.themeTopY[2]){
          this.$refs.DetailNavBar.currentIndex =1;
        }else if(-position.y < this.themeTopY[3]){
          this.$refs.DetailNavBar.currentIndex =2;
        }else{
          this.$refs.DetailNavBar.currentIndex =3;
        }

      },
      //回到顶部
      backClick(){
        //通过ref拿到组件和组件的属性
          this.$refs.scrolldetail.scroll.scrollTo(0,0,500)
      },

      imageLoad(){

      },
      backClickEmit(index){
        this.$refs.scrolldetail.scroll.scrollTo(0,-this.themeTopY[index])
      },
      //接受加入购物车子组件发射的事件
      addToCartEmit(){
        // console.log('----');
        const product = {};
        //正常业务逻辑是传递ID到后端存储即可，现在是模拟的
        let indexL = this.showGoods.find((item)=>{
          //返回 true的同时得到item
          return this.id == item.id
        })
        
        console.log(indexL);
        product.img = this.showGoods[0].img;
        product.title= this.showGoods[0].title;
        product.collect = this.showGoods[0].collect;
        product.price =this.showGoods[0].price;
        product.id = this.showGoods[0].id;
        //2.添加到购物车
        //store必须通过mutations才做state
        this.$store.commit('addCart', product);

      }
    },
    computed:{

    },
    filters:{
      //过滤器 使用的时候  |showDate
      showDate(value){
        const date = new Date(value*1000)

        return formatDate(date,'yyy-MM-dd hh:ii:ss');
      }

    },
    components:{
      DetailNavBar,
      Scroll,
      GoodsList,
      DetailBottomBar,
      BackTop
    },
    created(){
        this.id = this.$route.params.id;
        // getDetail(this.id).then(res=>{
        //   console.log(res);
        // })
        //this.goods = new Goods(res.itemInfo,res.columns,res.services);

        //先模拟数据
        this.detail = {
          banners:[
              { url: require("assets/img/01.jpg") },
              { url: require("assets/img/02.jpg") },
          ],
          shopInfo: '<p>123</p>',
          skuInfo :[

          ],

        }
    },
    activated() {
      console.log('详情页activated')
    },
    deactivated() {
      console.log('详情页deactivated')
    },
    destroyed() {
      console.log('销毁详情页')
    }

  }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav-bar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }

</style>

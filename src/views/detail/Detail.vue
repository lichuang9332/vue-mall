<template>
  <div class="detail">
    <!-- 导航栏 -->
      <DetailNavBar class="detail-nav-bar"></DetailNavBar>
      <Scroll class="content">
          <!-- 轮播图 -->
          <el-carousel height="250px">
            <el-carousel-item v-for="item in detail.banners" :key="item.url">
              <a :href="item.url">
                <img class="carousel-image" :src="item.url" @load="imageLoad"/>
              </a>
            </el-carousel-item>
          </el-carousel>
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
          详情页=>{{id}}<br/>详情页=>{{id}}<br/>
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
          详情页=>{{id}}<br/>详情页=>{{id}}<br/>
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
          详情页=>{{id}}<br/>详情页=>{{id}}<br/>
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
      </Scroll>

  </div>
</template>

<script>
  import DetailNavBar from './child/DetailNavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail,Goods} from 'network/detail'
  export default {
    name: 'Detail',
    data(){
      return {
        message: '',
        id: null,
        detail: null,
        goods:null
      }
    },
    methods:{
      imageLoad(){

      }
    },
    computed:{

    },
    filters:{

    },
    components:{
      DetailNavBar,
      Scroll
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
    height: calc(100% - 44px);
    overflow: hidden;
  }

</style>

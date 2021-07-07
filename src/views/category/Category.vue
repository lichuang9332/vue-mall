<template>
  <div class="category">
    <div class="category-viewport">
      <div class="category-tab">
        <ul style="transform: translateY(0px);" id="category2">
          <li class="" m_index="1" m_cid="WQR2006" id="category6" commonused="false">
            <a class="J_ping" report-eventparam="2006_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10002.9999" href="javascript:void(0);">热门推荐</a>
          </li>
          <li m_index="2" m_cid="WQ1980" id="category7" commonused="true" class="">
            <a class="J_ping" report-eventparam="1980_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10003.9999" href="javascript:void(0);">手机数码</a>
          </li>
          <li m_index="3" m_cid="WQ1968" id="category8" commonused="true" class="">
            <a class="J_ping" report-eventparam="2001_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10039.9999" href="javascript:void(0);">拍卖</a>
          </li>
          <li m_index="24" m_cid="WQ1977" id="category29" commonused="false" class="">
            <a class="J_ping" report-eventparam="1977_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10024.9999" href="javascript:void(0);">箱包手袋</a>
          </li>
          <li m_index="25" m_cid="WQ1979" id="category30" commonused="false" class="">
            <a class="J_ping" report-eventparam="1979_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10025.9999" href="javascript:void(0);">钟表珠宝</a>
          </li>
          <li m_index="26" m_cid="WQ1998" id="category31" commonused="false" class="">
            <a class="J_ping" report-eventparam="1998_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10030.9999" href="javascript:void(0);">农资绿植</a>
          </li>
          <li m_index="27" m_cid="WQ1995" id="category32" commonused="false" class="">
            <a class="J_ping" report-eventparam="1995_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10031.9999" href="javascript:void(0);">生活旅行</a>
          </li>
          <li m_index="28" m_cid="WQ1970" id="category33" commonused="false" class="">
            <a class="J_ping" report-eventparam="1970_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10032.9999" href="javascript:void(0);">奢侈品</a>
          </li>
          <li m_index="29" m_cid="WQ1988" id="category34" commonused="true" class="">
            <a class="J_ping" report-eventparam="1988_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10006.9999" href="javascript:void(0);">计生情趣</a>
          </li>
          <li m_index="30" m_cid="WQ1997" id="category35" commonused="false" class="">
            <a class="J_ping" report-eventparam="1997_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10034.9999" href="javascript:void(0);">艺术邮币</a>
          </li>
          <li m_index="31" m_cid="WQ1999" id="category36" commonused="false" class="">
            <a class="J_ping" report-eventparam="1999_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10036.9999" href="javascript:void(0);">特产馆</a>
          </li>
          <li m_index="32" m_cid="WQ2000" id="category37" commonused="false" class="">
            <a class="J_ping" report-eventparam="2000_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10037.9999" href="javascript:void(0);">京东金融</a>
          </li>
          <li m_index="33" m_cid="WQ1969" id="category38" commonused="false" class="">
            <a class="J_ping" report-eventparam="1969_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10038.9999" href="javascript:void(0);">国际名牌</a>
          </li>
          <li m_index="34" m_cid="WQ2008" id="category39" commonused="false" class="">
            <a class="J_ping" report-eventparam="2008_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10040.9999" href="javascript:void(0);">房产</a>
          </li>
          <li m_index="35" m_cid="WQ2102" id="category40" commonused="false" class="">
            <a class="J_ping" report-eventparam="2102_home" report-eventid="MCategory_1st" report-eventlevel="2"
              ptag="138624.10041.9999" href="javascript:void(0);">工业品</a>
          </li>
        </ul>
      </div>
      <div class="category-content">
        右边
      </div>

    </div>
  </div>
</template>

<script>
  // import BetterScroll from 'better-scroll'

  export default {
    name: 'Category',
    data() {
      return {
        message: '',
        bs: null,
        rootList: [

        ]
      }
    },
    methods: {

    },
    computed: {

    },
    filters: {

    },
    components: {

    },
    //生命周期函数(ceated()不能拿到元素)
    mounted() {
      // this.bs = new BetterScroll(document.querySelector('.wrapper'),{
      //   //0和1-不侦测实时位置 2-在手指滚动的过程中侦测，离开后不侦测3-只要滚动都侦测
      //   probeType:3,
      //   //下拉加载更多
      //   pullUpLoad:true,
      //   movable: true,
      //   zoom: true
      // })
      // // this.bs.on('scroll',(position)=>{
      // //         console.log(position);
      // // });
      // this.bs.on('pullingUp',(position)=>{
      //         console.log('上拉加载更多');
      //         //发送网络请求，请求多页数据

      //         //数据请求完成，将数据展示出来后

      //         setTimeout(()=>{
      //           this.bs.finishPullUp()
      //         },2000);
      // });

    }

  }
</script>

<style scoped>
  /* 父类必须设置高度才有效 */
  /* .wrapper{
  height: 150px;
  background-color: red;
  overflow: hidden;
  overflow-y: scroll;
} */
  .category {}

  .category-viewport {
    height: auto;
    min-height: 100%;
  }

  .category-tab {
    border: 1px solid red;
    float: left;
    width: 86px;
    background-color: #f8f8f8;
    min-width: 76px;
    height: auto;
    overflow-y: auto;
    min-height: 100%;
  }

  .category-content {
    border: 1px solid red;
    margin-left: 86px;
    background-color: #fff;
    height: auto;
    min-height: 100%;
    width: calc(100% - 88px);
    font-size: 12px;
    color: #252525;
  }
</style>

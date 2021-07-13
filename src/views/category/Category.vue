<template>
  <div class="category">
    <!-- 放入搜索导航栏 -->
    <NavBar class="category-search">
      <div slot="center" class="header-search-input">
        <input value="" maxlength="20" name="keyword" id="msKeyWord" type="text" cleardefault="no" autocomplete="off"
          placeholder="行车记录仪" class="hilight2">
        <!-- <input name="catelogyList" type="text" value="" style="display:none;"> -->
        <div class="head-input-icon J_ping" id="msSearchTab" report-eventid="MSearch_SearchTab" style="display:none;">
        </div>
      </div>
    </NavBar>
    <div class="category-viewport">
      <div class="category-tab-container">
        <scroll class="content-list" :probeType="3" @scrollEmit="scrollEmit" ref="scrolltab">
          <div class="category-tab">
            <ul style="transform: translateY(0px);" id="category2">
              <li v-for="(item,index) in rootList" @click="clickTabLi(index)" :class="{current: index==currentIndex}"
                m_index="index" id="">
                {{item.name}}
              </li>
            </ul>
          </div>

        </scroll>
      </div>
      <div class="category-content">
        <scroll class="content-con" :probeType="3" @scrollEmit="scrollEmitCon" ref="scrollcon">
        <div id="branchScroll" style="overflow: hidden;  width: 100%;" class="jd-category-content-wrapper">
          <div id="branchList" style="transform: translateY(0px);">
            <div class="jd-category-div cur"><a
                href="https://wqs.jd.com/wxsq_project/portal/top-list/hot.html?ptag=137886.4.1" class="rank-box J_ping"
                report-eventid="MFilter_RankingList" report-eventparam="2006_64754_home" report-eventlevel="2">
                <i class="rank-icon"></i><span>排行榜</span><i class="right-arrow"></i></a>
              <h4>热门分类</h4>
              <ul class="jd-category-style-1">
                <li><a class="J_ping" report-eventparam="81593_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1450"
                    href="//wqsou.jd.com/search/searchn?key=%E7%A9%BA%E8%B0%83&amp;as=0&amp;PTAG=138624.10002.140197&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg"
                      id="Imglazyload1470"><span>空调</span></a></li>
                <li><a class="J_ping" report-eventparam="81592_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1451"
                    href="//so.m.jd.com/ware/search.action?keyword=%E5%86%B0%E7%AE%B1&amp;searchFrom=search&amp;sf=11&amp;as=0&amp;PTAG=138624.10002.140195&amp;projectId=1715"><img
                      src="//img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg"
                      id="Imglazyload1471"><span>冰箱</span></a></li>
                <li><a class="J_ping" report-eventparam="81462_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1452"
                    href="//so.m.jd.com/ware/search.action?keyword=%E7%94%B5%E8%84%91&amp;searchFrom=category&amp;sf=11&amp;as=0&amp;PTAG=138624.10002.140186&amp;projectId=1715"><img
                      src="//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png"
                      id="Imglazyload1472"><span>电脑</span></a></li>
                <li><a class="J_ping" report-eventparam="65103_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1453"
                    href="//so.m.jd.com/products/9987-653-655.html?PTAG=138624.10002.130001&amp;searchFrom=category"><img
                      src="//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png"
                      id="Imglazyload1473"><span>手机</span></a></li>
                <li><a class="J_ping" report-eventparam="79887_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1454"
                    href="//wqsou.jd.com/search/searchn?key=%E5%85%A8%E9%9D%A2%E5%B1%8F%E6%89%8B%E6%9C%BA&amp;as=0&amp;PTAG=138624.10002.130170&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg"
                      id="Imglazyload1474"><span>全面屏手机</span></a></li>
                <li><a class="J_ping" report-eventparam="81459_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1455"
                    href="//so.m.jd.com/ware/search.action?keyword=%E4%BF%9D%E5%81%A5%E5%93%81&amp;searchFrom=home&amp;sf=11&amp;as=0&amp;PTAG=138624.10002.140183&amp;projectId=1715"><img
                      src="//img30.360buyimg.com/focus/s140x140_jfs/t1/134182/23/366/16758/5eccb3caE2b8d0c6d/7ab40f9d9441a2a5.jpg"
                      id="Imglazyload1475"><span>保健品</span></a></li>
                <li><a class="J_ping" report-eventparam="79888_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1456"
                    href="//wqsou.jd.com/search/searchn?key=%E6%B8%B8%E6%88%8F%E6%89%8B%E6%9C%BA&amp;as=0&amp;PTAG=138624.10002.130171&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg"
                      id="Imglazyload1476"><span>游戏手机</span></a></li>
                <li><a class="J_ping" report-eventparam="81460_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1457"
                    href="//so.m.jd.com/ware/search.action?keyword=%E5%8F%A3%E7%BD%A9&amp;searchFrom=home&amp;sf=11&amp;as=0v&amp;PTAG=138624.10002.140184&amp;projectId=1715"><img
                      src="//img14.360buyimg.com/focus/s140x140_jfs/t1/114862/21/8081/13361/5ecb398fEc7c98869/4b4101d0acbf4ced.jpg"
                      id="Imglazyload1477"><span>口罩</span></a></li>
                <li><a class="J_ping" report-eventparam="81468_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1458"
                    href="//so.m.jd.com/ware/search.action?keyword=%E9%A9%B1%E8%9A%8A%E7%94%A8%E5%93%81&amp;searchFrom=home&amp;sf=11&amp;as=0&amp;PTAG=138624.10002.140192&amp;projectId=1715"><img
                      src="//img13.360buyimg.com/focus/s140x140_jfs/t1/136893/38/305/31308/5ecb84dcE410bc59a/36568e70a84f8807.jpg"
                      id="Imglazyload1478"><span>驱蚊用品</span></a></li>
                <li><a class="J_ping" report-eventparam="81467_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1459"
                    href="//wqsou.jd.com/search/searchn?key=%E7%94%B5%E7%A3%81%E7%82%89&amp;as=0&amp;PTAG=138624.10002.140191&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img13.360buyimg.com/focus/s140x140_jfs/t1/120301/21/3027/11815/5ecb80a8Ed94ec15d/c20f3541c5618e17.jpg"
                      id="Imglazyload1479"><span>电磁炉</span></a></li>
                <li><a class="J_ping" report-eventparam="81466_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1460"
                    href="//wqsou.jd.com/search/searchn?key=%E7%94%B5%E7%83%AD%E6%B0%B4%E5%A3%B6&amp;as=0&amp;PTAG=138624.10002.140190&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img10.360buyimg.com/focus/s140x140_jfs/t1/111738/8/8168/9785/5ecb40ccE19924aec/1a1a91827d0f07ba.jpg"
                      id="Imglazyload1480"><span>电热水壶</span></a></li>
                <li><a class="J_ping" report-eventparam="81461_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1461"
                    href="//so.m.jd.com/ware/search.action?keyword=%E6%95%B0%E6%8D%AE%E7%BA%BF&amp;searchFrom=home&amp;sf=11&amp;as=0&amp;PTAG=138624.10002.140185&amp;projectId=1715"><img
                      src="//img11.360buyimg.com/focus/s140x140_jfs/t1/113143/20/8135/9835/5ecb81ccE22407538/e9a80b7af28e83a6.jpg"
                      id="Imglazyload1481"><span>数据线</span></a></li>
                <li><a class="J_ping" report-eventparam="81474_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1462"
                    href="//wqsou.jd.com/search/searchn?key=%E5%9B%BE%E4%B9%A6&amp;as=0&amp;PTAG=138624.10002.140194&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img14.360buyimg.com/focus/s140x140_jfs/t1/131006/3/360/19831/5eccb047E2e95a92e/b425dc4923a20c15.jpg"
                      id="Imglazyload1482"><span>图书</span></a></li>
                <li><a class="J_ping" report-eventparam="81465_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1463"
                    href="//so.m.jd.com/ware/search.action?keyword=%E7%BE%8E%E5%A6%86%E6%8A%A4%E8%82%A4&amp;searchFrom=category&amp;sf=11&amp;as=0&amp;PTAG=138624.10002.140189&amp;projectId=1715"><img
                      src="//img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg"
                      id="Imglazyload1483"><span>美妆护肤</span></a></li>
                <li><a class="J_ping" report-eventparam="79921_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1464"
                    href="//wqsou.jd.com/search/searchn?key=%E9%99%A4%E8%8F%8C%E6%B6%B2&amp;as=0&amp;PTAG=138624.10002.130179&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img20.360buyimg.com/focus/s140x140_jfs/t1/104017/10/11956/27906/5e3e8936E54437217/e5905d3b63d5f6fb.jpg"
                      id="Imglazyload1484"><span>除菌液</span></a></li>
                <li><a class="J_ping" report-eventparam="81464_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1465"
                    href="//so.m.jd.com/ware/search.action?keyword=%E4%BC%91%E9%97%B2%E9%9B%B6%E9%A3%9F&amp;searchFrom=home&amp;sf=12&amp;as=0v&amp;PTAG=138624.10002.140188&amp;projectId=1715"><img
                      src="//img20.360buyimg.com/focus/s140x140_jfs/t1/129461/33/2827/16392/5ecb3dd2E2d178436/c4cd36d661e91665.jpg"
                      id="Imglazyload1485"><span>休闲零食</span></a></li>
                <li><a class="J_ping" report-eventparam="79913_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1466"
                    href="//wqsou.jd.com/search/searchn?key=%E5%85%85%E7%94%B5%E5%AE%9D&amp;as=0&amp;PTAG=138624.10002.130172&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img10.360buyimg.com/focus/s140x140_jfs/t1/106781/8/11928/23561/5e3e833fE92c281f5/72b834ead18b6462.jpg"
                      id="Imglazyload1486"><span>充电宝</span></a></li>
                <li><a class="J_ping" report-eventparam="79914_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1467"
                    href="//wqsou.jd.com/search/searchn?key=%E4%BD%93%E6%B8%A9%E8%AE%A1&amp;as=0&amp;PTAG=138624.10002.130173&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img12.360buyimg.com/focus/s140x140_jfs/t1/96627/6/11719/15770/5e3e83b6E05b80eea/76b39555bc2d2a89.jpg"
                      id="Imglazyload1487"><span>体温计</span></a></li>
                <li><a class="J_ping" report-eventparam="79919_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1468"
                    href="//wqsou.jd.com/search/searchn?key=%E6%8A%95%E5%BD%B1%E6%9C%BA&amp;as=0&amp;PTAG=138624.10002.130177&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img11.360buyimg.com/focus/s140x140_jfs/t1/97873/26/11984/16170/5e3e878eE3d6f29d8/820c61d6be7faf12.jpg"
                      id="Imglazyload1488"><span>投影机</span></a></li>
                <li><a class="J_ping" report-eventparam="79920_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1469"
                    href="//wqsou.jd.com/search/searchn?key=%E6%B8%B8%E6%88%8F%E6%9C%BA&amp;as=0&amp;PTAG=138624.10002.130178&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img20.360buyimg.com/focus/s140x140_jfs/t1/96008/21/11832/14563/5e3e883fE941b27f7/e073dd6dd02ecd02.jpg"
                      id="Imglazyload1489"><span>游戏机</span></a></li>
                <li><a class="J_ping" report-eventparam="79920_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1469"
                    href="//wqsou.jd.com/search/searchn?key=%E6%B8%B8%E6%88%8F%E6%9C%BA&amp;as=0&amp;PTAG=138624.10002.130178&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img20.360buyimg.com/focus/s140x140_jfs/t1/96008/21/11832/14563/5e3e883fE941b27f7/e073dd6dd02ecd02.jpg"
                      id="Imglazyload1489"><span>游戏机</span></a></li>
                <li><a class="J_ping" report-eventparam="79920_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1469"
                    href="//wqsou.jd.com/search/searchn?key=%E6%B8%B8%E6%88%8F%E6%9C%BA&amp;as=0&amp;PTAG=138624.10002.130178&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img20.360buyimg.com/focus/s140x140_jfs/t1/96008/21/11832/14563/5e3e883fE941b27f7/e073dd6dd02ecd02.jpg"
                      id="Imglazyload1489"><span>游戏机</span></a></li>
                <li><a class="J_ping" report-eventparam="79920_2006_64754_home" report-eventid="MFilter_PopularThird"
                    report-eventlevel="2" id="branch_1469"
                    href="//wqsou.jd.com/search/searchn?key=%E6%B8%B8%E6%88%8F%E6%9C%BA&amp;as=0&amp;PTAG=138624.10002.130178&amp;projectId=1715&amp;searchFrom=category"><img
                      src="//img20.360buyimg.com/focus/s140x140_jfs/t1/96008/21/11832/14563/5e3e883fE941b27f7/e073dd6dd02ecd02.jpg"
                      id="Imglazyload1489"><span>游戏机</span></a></li>
                <div style="clear:both"></div>
              </ul>
            </div>
          </div>
          <div id="category4" class="jd-category-loadfail" style="display: none;">
            <div class="loadfail-content">
              <div class="failing"></div><span>加载失败</span><a href="javascript:void(0);" id="category5"
                class="btn-loadfail"></a>
            </div>
          </div>
        </div>
        </scroll>
      </div>

    </div>
  </div>
</template>

<script>
  //导入封装好的scroll插件
  import Scroll from 'components/common/scroll/Scroll.vue'
  //导入导航栏,navbar
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: 'Category',
    data() {
      return {
        currentIndex: 0,
        message: '',
        bs: null,
        rootList: [{
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
          {
            "id": "1",
            "name": "热门推荐"
          },
        ]
      }
    },
    methods: {
      clickTabLi(index) {
        this.currentIndex = index;
      },
      scrollEmit() {

      },
      scrollEmitCon(){

      }
    },
    computed: {

    },
    filters: {

    },
    components: {
      Scroll,
      NavBar
    },
    //生命周期函数(ceated()不能拿到元素)
    mounted() {
      // this.bs = new
      // (document.querySelector('.wrapper'),{
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

  /*  .category-viewport {
    height: auto;
    min-height: 100%;
  } */

  .current {
    background-color: #fff;
    color: #FF0000;
  }

  .category-viewport li,
  .category-viewport ul {
    display: block;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .category-viewport {
    display: flex;
    height: 100vh;
  }

  /* scroll外层给定高度,scroll组件要溢出隐藏和高度100% */
  .category-tab-container {
    /* overflow-x: scroll; */
    /* overflow-y: hidden; */
    /*解决ios上滑动不流畅*/
    /* -webkit-overflow-scrolling: touch; */
    /* float: left; */
    width: 86px;
    background-color: #f8f8f8;
    min-width: 76px;
    overflow: hidden;
    /* border: 1px solid red; */
    /*    高度这里要用 vh  1vw=视窗宽度的1% 1vh=视窗高度的1%  alc()函数使用标准的数学运算优先级规则；
所以，只需设置div的高度height为calc(100vh)即可,100vh = 视窗高度的100%， */
    height: 100%;
  }

  .category-tab-container .content-list {
    /* border: 1px solid green; */
    /* height: calc(100vh - 49px); */
    height: calc(100% - 49px - 44px);
    overflow: hidden;
  }
  .category-content{
    overflow: hidden;
    height: 100%;
  }
  .category-content .content-con{
    height: calc(100% - 49px - 44px);
    overflow: hidden;
  }

  .category-tab li {
    height: 46px;
    line-height: 46px;
    text-align: center;
    position: relative;
  }

  .category-tab {
    /* border: 1px solid red; */

    /* overflow-y: scroll; */
  }

  .category-tab li::before,
  .category-tab li:after {
    content: none;
  }

  .category-tab li:before {
    content: "";
    height: 92px;
    width: 1px;
    position: absolute;
    left: auto;
    top: 0;
    right: 0;
    bottom: auto;
    background-color: #e5e5e5;
    border: 0 solid transparent;
    border-radius: 0;
    -webkit-border-radius: 0;
    transform: scale(.5);
    -webkit-transform: scale(.5);
    -moz-transform: scale(.5);
    -ms-transform: scale(.5);
    -o-transform: scale(.5);
    transform-origin: top left;
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
  }

  .category-tab li:after {
    content: "";
    height: 1px;
    width: 200%;
    position: absolute;
    left: 0;
    top: auto;
    right: auto;
    bottom: 0;
    background-color: #e5e5e5;
    border: 0 solid transparent;
    border-radius: 0;
    -webkit-border-radius: 0;
    transform: scale(.5);
    -webkit-transform: scale(.5);
    -moz-transform: scale(.5);
    -ms-transform: scale(.5);
    -o-transform: scale(.5);
    transform-origin: top left;
    -webkit-transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
  }

  .category-content {
    /* border: 1px solid red; */
    /* margin-left: 86px; */
    background-color: #fff;
    height: auto;
    min-height: 100%;
    width: calc(100% - 88px);
    font-size: 12px;
    color: #252525;
  }

  .category-content #branchList {
    overflow: hidden;
    padding-bottom: 10px;
  }

  .category-content .jd-category-div.cur {
    display: block;
  }

  .category-content .jd-category-div {
    display: none;
    margin: 19px 7px 0;
  }

  /*  a {
    text-decoration: none;
    background: transparent;
    -webkit-tap-highlight-color: transparent;
  } */

  /*  em,
  i {
    text-decoration: none;
    font-style: normal;
  } */

  .rank-box {
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    box-align: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    float: right;
    height: 14px;
  }

  .rank-box span {
    display: block;
    color: #848689;
    font-size: 10px;
    line-height: 10px;
    margin-left: 4px;
    position: relative;
    top: 1px;
  }

  .rank-box .right-arrow {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT9JREFUSA3dlDuuwjAQRUnMMthEPptAokSPb08DYiN0dK99eghS8FlI0tOzDJJwB8WSZTxOTCqIFNkZz9xj+9rpdD798bgFZFnWL4ril8Y9z1tHUXTkcm1xnxusxHsY75VlmQA44XJtcRagFQkA/96BsAAhxBKQXAG9BWEBQRBcsPczBjJWwNYua7KsStN0BA/+8S1kDG3u+/48DMO9EjN2awFU1QbSCNAG0hhgg2BsGMfxmXL0hzVZT6RvXLaDyXgMbU35FHMCVCKlQcwUe6Y5AWD2D07UDpXqibrjzqwMUDdAJa4f1zttGd0ZDtDIZEW8qwjlEJ/Cl0SJvXRrAW3EiWb1wCI+q5u5XAq7AogPYOgJifq2kPhBCtS17AogvmkrTnAWoM2MDHWauaxnAfhbLpB0xXvDO3TZFin+He0DdXuUHqDBwt8AAAAASUVORK5CYII=) no-repeat;
    background-size: 12px 12px;
    position: relative;
    top: 1px;
    width: 12px;
    height: 12px;
    display: block;
    line-height: 0;
    margin-left: 4px;
  }

  .category-content h4 {
    font-size: 14px;
    color: #333;
    margin: 0;
    padding: 0;
    line-height: 1em;
    font-weight: 700;
  }

  .jd-category-div:first-child h4 {
    display: inline-block;
  }

  .jd-category-style-1 {
    border: 0;
    font-size: 0;
    padding: 7px 10px 0;
    overflow: hidden;
  }

  .jd-category-style-1:after,
  .jd-category-style-4:after {
    content: "";
    display: block;
    height: 0;
    width: 100%;
    clear: both;
    font-size: 0;
    line-height: 0;
  }

  .jd-category-style-1 li {
    width: 32.8%;
    float: left;
    text-align: center;
  }

  .category-viewport li,
  .category-viewport ul {
    display: block;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .jd-category-style-1 a {
    text-decoration: none;
    color: #252525;
  }

  .category-categoryNewUi .jd-category-style-1 img {
    width: 70px;
    height: 70px;
  }

  .jd-category-style-1 img {
    width: 55px;
    height: 55px;
    border: 0;
  }

  img,
  img a {
    border: 0;
    vertical-align: middle;
  }

  .jd-category-style-1 span {
    color: #333;
    height: 35px;
    margin-top: 2px;
    -webkit-box-pack: start;
    -moz-box-pack: start;
    -ms-box-pack: start;
    -o-box-pack: start;
  }

  .jd-category-style-1 span {
    font-size: 12px;
    height: 36px;
    color: #686868;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
    -ms-line-clamp: 2;
    -o-line-clamp: 2;
    box-orient: vertical;
    -webkit-box-orient: vertical;
    -ms-box-orient: vertical;
    -o-box-orient: vertical;
    word-break: break-all;
    box-align: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    box-pack: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-box-pack: center;
    -o-box-pack: center;
    z-index: 2;
    position: relative;
  }
  .category-search{
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
  }
  .header-search-input>input{
    border-radius: 15px;
    border: 0 solid #F0F0F0;
    background-color: #f0f0f0;
    font-size: 14px;
    line-height: 14px;
    height: 30px;
    width: 100%;
  }
</style>

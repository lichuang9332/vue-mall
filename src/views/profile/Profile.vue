<template>
  <div class="profile">
    <div class="profile-info">
      <div class="profile-info-my">我的档案</div>
      <div class="profile-info-oprate">
        <div class="avatar"><img src="~assets/img/01.jpg" alt=""></div>
        <div class="login">
          <div>登录/注册</div>
          <div>绑定手机号</div>
          </div>
        <div class="arrow">></div>
      </div>
    </div>
    <div class="profile-account">
      <div class="profile-account-left">
        <p>0.00元</p>
        <p>我的余额</p>
      </div>
      <div class="profile-account-center">
        <p>0个</p>
        <p>我的优惠</p>
      </div>
      <div class="profile-account-right">
        <p>0分</p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="profile-menu">
      <div class="menu-item">我的消息</div>
      <div class="menu-item">积分商城</div>
      <div class="menu-item">会员卡</div>
    </div>
    <div class="profile-more">
      <div class="more-item" @click="clickToCart">我的购物车</div>
      <div class="more-item">下载购物APP</div>
    </div>
    <!-- router -->
  </div>
</template>

<script>
  //1.导入组件

  //2.网络请求相关
  export default {
    name: 'Profile',
    data(){
      return {
        message:''
      }
    },
    methods:{
      clickToCart(){
        this.$router.push('cart'); //动态路由形式
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

<style lang="css" scoped>
.profile{
  background-color: rgb(242,242,242);
}
.profile-info{
  width: 100%;
  height: 140px;
  background-color: rgb(255,142,150);
  color: #FFFFFF;
}
.profile-info-my{
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 600;
  /* border: 1px solid red; */
  text-align: center;
}
.profile-info-oprate{
  display: flex;
  height: 100px;
}
.profile-info-oprate>.avatar{
  width: 100px;
}
.avatar img{
  width: 60px;
  height: 60px;
  margin: 20px 20px;
  border-radius: 50%;
}
.profile-info-oprate>.login{
  width: calc(100% - 150px);
  padding: 20px 0;
  font-size: 16px;
  line-height: 30px;
}
.profile-info-oprate>.arrow{
  padding-right: 10px;
  width: 50px;
  text-align: right;
  line-height: 100px;
}
/* 账户信息 */
.profile-account{
    background-color:#FFFFFF;
    display: flex;
    height: 80px;
    align-items: center;/*定义元素垂直居中*/
    justify-content: center; /*定义元素水平居中*/
}
.profile-account>div{
  font-weight: 500;
  width: 33%;
  height: 100%;
  text-align: center;
  /* vertical-align: middle; */
  /* 设置行高，此时给定了基线，此时如果要实现居中，只需要让基线居中，过设置vertical-align:middle */
}
.profile-account>div:not(:last-child){
    border-right: 1px solid #CCCCCC;
}
.profile-menu{
  height: 150px;
  margin-top: 10px;
  background-color:#FFFFFF;
}
.profile-more{
  height: 100px;
  margin-top: 10px;
  background-color: #FFFFFF;
}
.menu-item,.more-item{
  height: 50px;
  line-height: 50px;
  margin-left: 35px;
  font-weight: 500;
}
.menu-item:not(:last-child),.more-item:not(:last-child){
  border-bottom: 1px solid #CCCCCC;
}
</style>

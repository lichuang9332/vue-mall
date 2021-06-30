<template>
  <div class="profile">
    <div class="profile-info">
      <div class="profile-info-my">我的档案</div>
      <div class="profile-info-oprate">
        <div class="avatar"><img src="" alt=""></div>
        <div class="login">登录/注册</div>
        <div class="arrow">></div>
      </div>
    </div>
    <div class="profile-account">

    </div>
    <div class="profile-menu">

    </div>
    <div class="profile-more">

    </div>
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
  font-weight: 600;
  border: 1px solid red;
  text-align: center;
}
.profile-info-oprate{
  display: flex;
  height: 100px;
}
.profile-info-oprate>.avatar{
  
}
</style>

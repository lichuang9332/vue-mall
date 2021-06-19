<template>
  <div class="home-recommend">
    <div v-for="item in recommends" class="home-recommend-item">
      <a :href="item.image">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    //属性
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
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

<style>
.home-recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.home-recommend-item{
  flex: 1;
}
.home-recommend-item a{
    color: black;
}
.home-recommend-item img{
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-bottom: 10px;
}
</style>

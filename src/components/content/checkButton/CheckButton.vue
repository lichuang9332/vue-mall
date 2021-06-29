<template>
  <div class="check-button" :class="{active:isChecked}">
    <img src="~assets/img/cart/tick02.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props:{
      isChecked:{ //是否被选中
        type:Boolean,
        default:false   //默认应该是false
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

<style scoped>
.check-button{
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.check-button img{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.25;
}
.check-button.active{
    background-color: red;
    border-color: red;
}
</style>

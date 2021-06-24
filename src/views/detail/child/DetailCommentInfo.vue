<template>
  <div v-if="Object.keys(commentInfo).length !==0" class="detail-comment-info">

  </div>
</template>

<script>
  export default {
    name: 'DetailCommentInfo',
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
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

</style>

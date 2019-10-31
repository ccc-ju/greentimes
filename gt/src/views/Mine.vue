<template>
  <div>
     <van-nav-bar :title="title" :fixed='true' />
   
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Mine",
  data() {
    return {
      title: "我的",
       active: 0,
      
    };
  },
   mounted(){
    this.$emit('toparent',this.title)
   
  }
};
</script>


<style scoped="">
</style>
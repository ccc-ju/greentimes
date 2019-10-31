<template>
  <div class="b">
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
    />
   
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "BlackList",
  data() {
    return {
      title: "黑名单",
      active: 0,
      value: "",
      checked: false,
      e: ""
    };
  },
  methods: {
     onClickLeft() {
     this.$router.go(-1);
    },
  }, 
  mounted() {
    this.$emit("toparent", this.title);
  }
};
</script>

 <style scoped="">
 
</style>
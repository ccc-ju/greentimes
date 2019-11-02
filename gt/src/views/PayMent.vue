<template>
  <div class="wrap">
     <van-nav-bar  left-arrow @click-left="onClickLeft"  class="arr"/>
   <img src="../assets/acc.jpg" alt="">
   <span v-tap="{methods:acc}">我的账户</span>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "PayMent",
  data() {
    return {
     
    };
  },
  methods: {
     onClickLeft() {
      this.$router.go(-1);
    },
    acc() {
      this.$router.push("/account");
    },
  },

  mounted() {
    this.$emit("toparent", this.title);
  }
};
</script>


<style scoped="">
.wrap {
  width: 100%;
  height: 100%;
}
.wrap img {
  width: 100%;
  height: 100%;
}
span{
  display: block;
  width: 52vw;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  background:rgba(red, 0, 0, .6);
  position: absolute;
  bottom: 5vh;
  left: 24vw;
  border-radius: 3vh;
  color: white;
}
.arr{
  position: absolute;
  top: 1vh;
}
</style>
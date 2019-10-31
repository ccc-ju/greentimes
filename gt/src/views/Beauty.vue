<template>
  <div class="wrap">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div class="box">
      <img src="../assets/c1.jpg" alt />
      <img src="../assets/c1.jpg" alt />
      <img src="../assets/c1.jpg" alt />
      <img src="../assets/c1.jpg" alt />
    </div>
    <img src="../assets/cc.jpg" alt class="cc" />
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Beauty",
  data() {
    return {
      title: "中国大学",
      active: 0,
      value: "",
      checked: false,
      e: ""
    };
  },
  methods: {
    onSearch() {
      $router.push("");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("");
    }
  },

  mounted() {
    this.$emit("toparent", this.title);
  }
};
</script>


<style scoped="">
.wrap {
  background: #ededed;
  width: 100%;
  height: 100%;
}
.box img {
  width: 45vw;
  height: 23vh;
  margin: 1.4vh;
  float: left;
}
.cc {
  width: 14vw;
  height: 8vh;
  position: fixed;
  right: 6vw;
  bottom: 3vh;
  border-radius: 50%;
}
</style>
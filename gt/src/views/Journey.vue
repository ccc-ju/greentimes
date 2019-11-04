<template>
  <div class="wrap">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div class="box">
      <img src="../assets/c3.jpg" alt />
      <img src="../assets/c3.jpg" alt />
      <img src="../assets/c3.jpg" alt />
      <img src="../assets/c3.jpg" alt />
    </div>
    <img src="../assets/cc.jpg" alt class="cc" />
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Journey",
  data() {
    return {
      title: "自然景观",
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
  width: 95vw;
  height: 25vh;
  margin: 1.4vh;
  float: left;
}
.cc {
  width: 14vw;
  height: 8vh;
  position: fixed;
  right: 6vw;
  bottom: 3vh;
  border-radius: 50%
}
</style>
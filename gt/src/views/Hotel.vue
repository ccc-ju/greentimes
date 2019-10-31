<template>
  <div class="wrap">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="中国酒店">
        <div class="box">
          <img src="../assets/c5.jpg" alt />
          <img src="../assets/c5.jpg" alt />
        </div>
      </van-tab>
      <van-tab title="海外酒店">
        <div class="box">
          <img src="../assets/c5.jpg" alt />
        </div>
      </van-tab>
    </van-tabs>

    <img src="../assets/cc.jpg" alt class="cc" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Hotel",
  data() {
    return {
      title: "醉美酒店",
      active: 2,
      value: "",
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
}
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
  border-radius: 50%;
}
</style>
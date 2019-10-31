<template>
  <div class="wrap">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="古典建筑">
        <div class="box">
          <img src="../assets/c4.jpg" alt />
          <img src="../assets/c1.jpg" alt />
          <img src="../assets/c1.jpg" alt />
          <img src="../assets/c1.jpg" alt />
        </div>
      </van-tab>
      <van-tab title="现代建筑">
        <div class="box">
          <img src="../assets/c1.jpg" alt />
          <img src="../assets/c1.jpg" alt />
          <img src="../assets/c1.jpg" alt />
          <img src="../assets/c1.jpg" alt />
        </div>
      </van-tab>
    </van-tabs>

    <img src="../assets/cc.jpg" alt class="cc" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Architecture",
  data() {
    return {
      title: "经典建筑",
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
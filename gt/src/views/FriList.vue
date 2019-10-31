<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      right-text="更多"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ></van-nav-bar>
    <header>
      <div class="infor">
        <img src="../assets/t.jpg" />
        <p>用户{{name}}</p>
      </div>
    </header>

    <van-tabs @click="onClick">
      <van-tab title="岛屿" >
        
        <van-panel  title="天方夜谭"  desc="已有140271人驻扎">
        </van-panel>
      </van-tab>
      <van-tab title="涂鸦"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Userdetail",
  data() {
    return {
      title: "",
      name: "",
      active: 0,
      index: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("");
    },
    onClick(name, title) {}
  },
  mounted() {
    this.$emit("toparent", this.title);
  }
};
</script>

 <style scoped="">
img {
  width: 20vw;
  height: 11vh;
  border-radius: 50%;
  overflow: hidden;
}

header {
  width: 100%;
  height: 30vh;
  background: url(../assets/t.jpg) no-repeat;
  background-size: 100%;
}
.infor {
  width: 40%;
  height: 30vh;
  position: relative;
  top: 20%;
  left: 40vw;
  color: white;
  line-height: 40px;
}
</style>
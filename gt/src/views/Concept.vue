<template>
  <div id="play">
    <header>
      <van-nav-bar title="三观人生" left-text="返回" left-arrow @click-left="onClickLeft" />
    </header>

    <section>
      <h4>{{detail.name}}</h4>
      <p>{{detail.descriptions}}</p>
    </section>

    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="add">编辑</van-tabbar-item>
        <van-tabbar-item icon="good-job">点赞</van-tabbar-item>
        <van-tabbar-item icon="friends">分享</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";
export default {
  name: "concept",
  data() {
    return {
      active: 0,
      detail: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    console.log(this.$route.params._id);
    api.getDetail(this.$route.params._id, {}).then(data => {
      console.log(data.data);
      this.detail = data.data;
    });
  }
};
</script>

<style scoped="">
#play {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
}
header {
  width: 100vw;
  height: 46px;
  position: fixed;
  top: 0;
  z-index: 1;
}
section {
  flex: 1;
  margin: 46px 0 50px;
  padding:0 16px; 
}
section h4{
    font-size: 24px;
    line-height: 30px;
}
section p{
    font-size: 14px;
    line-height: 18px;
    text-indent: 20px;
}
footer {
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 1;
}
</style>

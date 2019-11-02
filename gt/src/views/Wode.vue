<template>
  <div class="wrap">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
    <div class="box">
      <p>
        <img src="../assets/t.jpg" alt />
        <span>用户</span>
      </p>
      <section>
        <div>
         <van-icon name="wap-home" class="room"/>
          <span>我的房源</span>
        </div>
        <div>
          <van-icon name="graphic" class="room" />
          <span>我的合同</span>
        </div>
      </section>
    </div>
    <ul class="list">
      <li>我的收藏</li>
      <li>我的投诉</li>
    </ul>
   
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Wode",
  data() {
    return {
      title: "我的",
      active: 0,
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
};
</script>

<style scoped="">
.wrap {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 30vh;
}
.box img {
  width: 16vw;
  height: 9vh;
  margin: 3vh;
  float: left;
  border-radius: 50%;
}
.box p:first-child {
  line-height: 15vh;
  height: 15vh;
}
section{
  width: 90vw;
  height: 10vh;
  margin: 0 auto;
}
.box div {
  display: flex;
  flex-direction: column;
  float: left;
  line-height: 4vh;
  text-align: center;
  width: 50%;
}
.box div:last-child{
  border-right:0;
}
.list {
  width: 100%;
}
.list li {
  height: 6vh;
  line-height: 6vh;
  text-indent: 3vh;
  border: 0.5px solid #cecece;
}
.room{
  font-size: 10vw;
  color: #1ad473;
}

</style>
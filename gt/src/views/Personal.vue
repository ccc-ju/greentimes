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
          <span>0.00</span>
          <span>保证金余额</span>
        </div>
        <div>
          <span>0.00</span>
          <span>保证金余额</span>
        </div>
        <div>
          <span>0.00</span>
          <span>保证金余额</span>
        </div>
      </section>
    </div>
    <ul class="list">
      <li>申请中的店铺</li>
      <li>已发布的店铺</li>
      <li>待存保证金的店铺</li>
      <li>我要管理</li>
    </ul>
    <div class="cc"><p>发布</p>
    <p>店铺</p></div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Personal",
  data() {
    return {
      title: "个人中心",
      active: 0,
      value: "",
      list: []
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

    // per() {
    //   this.$router.push("/personal");
    // },
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
  background: #1ad473;
  border-bottom: 1.2vh solid #eeeeee;
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
  color: white;
  height: 15vh;
}
section{
  width: 90vw;
  height: 10vh;
  margin: 0 auto;
  margin-top: 4vh;
}
.box div {
  display: flex;
  flex-direction: column;
  float: left;
  line-height: 4vh;
  text-align: center;
  width: 32%;
  color: white;
  border-right: 2px solid white;
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
  border-bottom: 0.5px solid #cecece;
}

.cc {
  width: 16vw;
  height: 9vh;
  position: fixed;
  right: 42vw;
  bottom:3vh;
  border-radius: 50%;
  background: #1ad473;
  line-height: 7vw;
  font-size: 14px;
  margin-top: 3vh;
  text-align: center;
  color: white;
}
</style>
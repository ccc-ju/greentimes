<template>
  <div class="wrap">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
    <img src="../assets/ac1.jpg" alt />
    <section>
      <div>
        <van-icon name="wap-home" class="room" />
        <span>资金转入</span>
      </div>
      <div>
        <van-icon name="graphic" class="room" />
        <span>资金转出</span>
      </div>
    </section>
    <ul class="list">
      <li>余额</li>
      <li>关验账户</li>
      <li>身份认证</li>
      <li>手机号</li>
      <li>修改交易密码</li>
      <li>交易明细</li>
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
      title: "青葱支付",
      active: 0,
      value: ""
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
.wrap img {
  width: 100%;
  height: 30vh;
}
.box p:first-child {
  line-height: 15vh;
  height: 15vh;
}
section {
  display: flex;

  width: 90vw;
  height: 10vh;
  margin: 0 auto;
}
section div {
  display: flex;
  flex-direction: column;
  float: left;
  line-height: 4vh;
  text-align: center;
  width: 50%;
  margin-top: 1vh;
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
.room {
  font-size: 8vw;
  color: #ee5a16;
}
</style>
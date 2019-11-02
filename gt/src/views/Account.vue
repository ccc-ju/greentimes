<template>
<<<<<<< HEAD
  <div>
    <van-nav-bar title="账户安全" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li v-tap="{methods:ph}">
        <span>修改手机号</span>
        <van-icon class="iconh" name="arrow" />
      </li>
      <li v-tap="{methods:psw}">
        <span>修改密码</span>
        <van-icon class="iconh" name="arrow" />
      </li>
=======
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
>>>>>>> 556011fe5574b646388290dcbeb398b5ee020136
    </ul>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "Account",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    ph() {
      this.$router.push('changePh');
    },
    psw(){
      this.$router.push('changePsw');
    }
=======
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
>>>>>>> 556011fe5574b646388290dcbeb398b5ee020136
  }
};
</script>

<<<<<<< HEAD
<style scoped>
ul {
  margin: 10px 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  background: #fff;
  border-top: solid 1px #bdbaba;
  padding: 0 16px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
li:last-child {
  border-bottom: solid 1px #bdbaba;
=======
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
>>>>>>> 556011fe5574b646388290dcbeb398b5ee020136
}
</style>
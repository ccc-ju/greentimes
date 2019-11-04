<template>
  <div class="box">
    <!-- <van-nav-bar title="登录" /> -->
    <img src="../assets/logo.jpg" alt class="lg" />
    <div class="from">
      <van-cell-group class="name">
        <van-field
          v-model="userName"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          class="ps"
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>

      <van-button type="primary" v-tap="{methods:login}" class="dl">登录</van-button>
      <p>
        <a href v-tap="{methods:regist}">立即注册</a>
        <a href v-tap="{methods:forget}">忘记密码</a>
      </p>
    </div>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import { Dialog } from "vant";
export default {
  name: "BerLogin",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (
        this.userName == localStorage.getItem("username") &&
        this.password == localStorage.getItem("password")
      ) {
        api
          .login({
            userName: this.userName,
            password: this.password
          })
          .then(data => {
            console.log(data);
            if ((status = 200)) {
              Dialog.confirm({
                title: "登录",
                message: "登录成功"
              }).then(() => {
                  // on confirm
                  this.$router.push("/index");
                })
                .catch(() => {
                  // on cancel
                })
              ;
            }
          });
      } else {
        return this.$toast("手机号或密码输入有误");
      }
    },
    regist() {
      this.$router.push("/berRegister");
    },
    forget() {
      this.$router.push("/berForget");
    }
  }
};
</script>

<style scoped="">
.box {
  width: 100vw;
  height: 100vh;
  background: url(../assets/bg.jpg) no-repeat;
  background-size: cover;
}
.from {
  width: 80vw;
  position: relative;
  top: 35vh;
  left: 10vw;
}
.lg {
  width: 20vw;
  height: 11vh;
  position: absolute;
  top: 15vh;
  left: 40vw;
}
.dl {
  width: 80vw;
  margin-top: 3vh;
  background: rgba(255, 255, 255, 0);
  border-radius: 5px;
  border: 1px solid white;
}
p {
  font-size: 14px;
  text-align: center;
  line-height: 28px;
}
p a {
  display: inline-block;
  height: 20px;
  color: white;
  border-right: 1px solid white;
  padding-right: 5px;
}
p a:last-child {
  border-right: 0;
  padding-left: 5px;
}
.name {
  margin-bottom: 2vh;
}
</style>
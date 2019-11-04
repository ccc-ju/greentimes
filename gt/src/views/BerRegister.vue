<template>
  <div class="box">
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" />
    <div class="from">
      <van-cell-group id="phone">
        <van-field
          v-model="username"
          center
          clearable
          label="手机号码"
          placeholder="请输入手机号码"
          :error-message="usertel"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="nickname" center clearable label="验证码" placeholder="请输入验证码">
          <van-button slot="button" size="small" type="primary" class="yzm">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="password"
          center
          clearable
          label="密码"
          placeholder="密码(6-20位数字字母)"
          :error-message="pass"
        />
      </van-cell-group>
      <van-checkbox v-model="checked" class="ck" checked-color="#53fa06">
        阅读并同意
        <a href>《青葱时代服务协议》及《隐私政策》</a>
      </van-checkbox>
      <van-button type="primary" v-tap="{methods:regist}" class="zc">立即注册</van-button>
    </div>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import { Toast } from "vant";
import axios from "axios";
import { Dialog } from "vant";

export default {
  name: "BerRegister",
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      checked: true
    };
  },
  computed: {
    usertel() {
      if (this.username === "") {
        return "";
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        return "手机号格式错误";
      } else {
        return "";
      }
    },
    pass() {
      if (this.password === "") {
        return "";
      } else if (this.password.length < 6) {
        return "密码不可小于6位";
      } else {
        return "";
      }
    }
  },

  methods: {
    regist() {
      if (
        this.username === "" ||
        this.usertel === "手机号码格式错误" ||
        (this.password === "" || this.pass === "密码格式错误，最少为6位")
      ) {
        return Toast("手机号码或密码输入有误");
      } else {
        api
          .reg({
            userName: this.username,
            password: this.password,
            nickName: this.nickName
          })
          .then(data => {
            console.log(data.data);
            if (data.data.token === localStorage.getItem.token) {
              Dialog.confirm({
                title: "注册",
                message: "用户名已注册，点击“确认”去登录"
              })
                .then(() => {
                  // on confirm
                  this.$router.push("/berLogin");
                })
                .catch(() => {
                  // on cancel
                });
            } else {
              Dialog.confirm({
                title: "注册",
                message: "注册成功"
              })
                .then(() => {
                  // on confirm
                  this.$router.push("/berLogin");
                })
                .catch(() => {
                  // on cancel
                });
              localStorage.setItem("username", this.username);
              localStorage.setItem("password", this.password);
              localStorage.setItem("token", data.data.token);
            }
          });
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped="">
.box {
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
}

.zc {
  width: 90vw;
  margin-top: 3vh;
  border-radius: 5px;
  border: 0;
  margin: 2vh 0 0 5vw;
  background: #d1d1d1;
}
.name,
.sms,
.ps {
  margin-top: 1.5vh;
}
.ck {
  line-height: 30px;
  margin-top: 13px;
  margin-left: 15px;
}
</style>
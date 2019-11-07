<template>
  <div class="box">
    <van-nav-bar title="忘记密码" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="from">
      <van-cell-group class="name">
        <van-field v-model="value" center clearable label="手机号码" placeholder="请输入手机号码" />
      </van-cell-group>
      <van-cell-group class="sms">
        <van-field v-model="sms" center clearable label="验证码" placeholder="请输入验证码">
          <van-button slot="button" size="small" type="primary" class="yzm">获取验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-button type="primary" v-tap="{methods:regist}" class="conf">确认</van-button>
    </div>
  </div>
</template>

<script>
import { Toast, Dialog } from "vant";
export default {
  name: "BerForget",
  data() {
    return {
      value: "",
      sms: ""
    };
  },
  methods: {
    regist() {
      if (this.value == "" || this.value != localStorage.getItem("phone")) {
        Toast("手机号码或密码输入有误");
      } else {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let length = 6;
        let psw = "";
        for (let i = 0; i < length; i++) {
          let mima = Math.floor(Math.random() * 10);
          psw += arr[mima];
        }
        console.log(psw);
        Dialog.confirm({
          title: "密码",
          message: "系统生成密码为"+[psw]+",安全性低,请尽快修改"
        })
          .then(() => {
            localStorage.setItem('password',psw)
            this.$router.push('/BerLogin')
          })
          .catch(() => {
            
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
.conf {
  width: 90vw;
  margin-top: 3vh;
  background: rgba(0, 255, 0, 0);
  border-radius: 5px;
  border: 0;
  margin: 2vh 0 0 5vw;
  background: #2bb32b;
}
.name,
.sms {
  margin-top: 1.5vh;
}
</style>
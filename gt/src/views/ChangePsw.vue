<template>
  <div>
    <van-nav-bar title="修改密码" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="password" clearable label="原密码" placeholder="请输入原密码" />
      <van-field
        v-model="password1"
        center
        clearable
        label="新密码"
        placeholder="密码(6-20位数字字母)"
        :error-message="psw"
      />
      <van-field v-model="password2" type="password" label="密码" placeholder="请再次输入新密码" />
    </van-cell-group>

    <van-button class="btn" type="primary" v-tap="{methods:change}">确认修改密码</van-button>
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
export default {
  name: "changePsw",
  data() {
    return {
      password: "",
      password1: "",
      password2: ""
    };
  },
  computed: {
    psw() {
      if (this.password1 === "") {
        return "";
      } else if (this.password.length < 6) {
        return "密码不可小于6位";
      } else {
        return "";
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    change() {
      if (
        this.password == "" ||
        this.password != localStorage.getItem("password")
      ) {
        Dialog.confirm({
          title: "原密码错误",
          message: "是否找回密码"
        })
          .then(() => {
            this.$router.push("/BerForget");
          })
          .catch(() => {});
      } else if (this.password1 == "" || this.password2 == "") {
        Toast("密码不能为空");
        return;
      } else {
        var psw1 = this.password1;
        var psw2 = this.password2;
        console.log(psw1, psw2);
        if (psw2 != psw1) {
          Toast("密码错误或密码不一致");
          return;
        } else {
          localStorage.setItem("password", psw1);
          this.$router.push("/BerLogin");
          return
        }
      }
    }
  }
};
</script>

<style scoped>
.btn {
  width: 345px;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  margin: 15px 15px;
}
</style>
<template>
  <div class="box">
    <van-nav-bar title="忘记密码" left-arrow></van-nav-bar>
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
import { Toast } from "vant";
export default {
  name: "BerForget",
  data() {
    return {
      value:'',
      sms:''
    };
  },
  methods: {
    regist() {
      this.$router.push("/BerForget");
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
.name,.sms{
  margin-top: 1.5vh;
}


</style>
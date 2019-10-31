<template>
  <div class="box">
    <van-nav-bar title="注册" left-arrow></van-nav-bar>
    <div class="from">
      <van-cell-group class="name">
        <van-field v-model="value" center clearable label="手机号码" placeholder="请输入手机号码" />
      </van-cell-group>
      <van-cell-group class="sms">
        <van-field v-model="sms" center clearable label="验证码" placeholder="请输入验证码">
          <van-button slot="button" size="small" type="primary" class="yzm">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-cell-group class="ps">
        <van-field v-model="password" center clearable label="密码" placeholder="密码(6-20位数字字母)" />
      </van-cell-group>
      <van-checkbox v-model="checked"  class="ck" checked-color="#ddd">阅读并同意<a href="">《青葱时代服务协议》及《隐私政策》</a></van-checkbox>
      <van-button type="primary" v-tap="{methods:regist}" class="zc">立即注册</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "BerRegister",
  data() {
    return {
      username: "",
      password: "",
      value:'',
      sms:'',
       checked: true,
    };
  },
  methods: {
    regist() {
      this.$router.push("/berRegister");
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
  background: rgba(255, 255, 255, 0);
  border-radius: 5px;
  border: 0;
  margin: 2vh 0 0 5vw;
  background: #d1d1d1;
}
.name,.sms,.ps{
  margin-top: 1.5vh;
}
.ck{
    line-height: 30px;
    margin-top: 13px;
    margin-left: 15px;
}

</style>
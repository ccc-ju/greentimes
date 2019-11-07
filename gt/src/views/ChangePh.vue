<template>
  <div>
    <van-nav-bar title="修改手机号" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group id="phone">
      <van-field
        v-model="tel"
        center
        clearable
        label="新手机号"
        placeholder="请输入新的手机号"
        :error-message="phone"
      />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="yzm" center clearable label="验证码" placeholder="请输入验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-button class="btn" type="primary" v-tap="{methods:change}">确认更换</van-button>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Toast } from "vant";
export default {
  name: "changePh",
  data() {
    return {
      tel: "",
      yzm: ""
    };
  },
  computed: {
    phone() {
      if (this.tel === "") {
        return "";
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel)) {
        return "手机号格式错误";
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
      if (this.tel === "" || this.phone === "手机号码格式错误") {
        Toast("手机号码或密码输入有误");
      } else {
        Dialog.confirm({
          title: "修改手机号",
          message: "是否更换密码"
        })
          .then(() => {
            var tel = this.tel;
            console.log(tel);
            localStorage.setItem("phone", tel);
          })
          .catch(() => {});
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
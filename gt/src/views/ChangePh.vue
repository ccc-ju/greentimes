<template>
  <div>
    <van-nav-bar title="修改手机号" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="tel" clearable label="新手机号" placeholder="请输入新的手机号" />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="yzm" center clearable label="验证码" placeholder="请输入验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-button class="btn" type="primary">确认更换</van-button>
  </div>
</template>

<script>
export default {
  name: "changePh",
  data() {
    return {
      tel: "",
      yzm: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
<template>
  <div>
    <van-nav-bar title="修改密码" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="password1" clearable label="原密码" placeholder="请输入原密码" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码（6-20位的数字字母）" />
      <van-field v-model="password" type="password" label="密码" placeholder="请再次输入新密码" />
    </van-cell-group>

    <van-button class="btn" type="primary">确认修改密码</van-button>
  </div>
</template>

<script>
export default {
  name: "changePsw",
  data() {
    return {
      password1: "",
      password: ""
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
<template>
  <div>
    <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li v-tap="{methods:notification}">
        <span>消息通知</span>
        <van-icon class="iconh" name="arrow" />
      </li>
      <li v-tap="{methods:cache}">
        <span>缓存管理</span>
        <van-icon class="iconh" name="arrow" />
      </li>
      <li  v-tap="{methods:aboutMe}">
        <span>关于我们</span>
        <van-icon class="iconh" name="arrow" />
      </li>
    </ul>
    <div class="btn">
      <van-button class="quit" type="danger" size="large" v-tap="{methods:quit}">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Set",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    notification() {
      this.$router.push("notification");
    },
    cache() {
      this.$router.push("cache");
    },
    aboutMe(){
      this.$router.push("aboutMe");
    },
    quit(){
      this.$router.push("berlogin");
    },
  }
};
</script>

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
  border-bottom: solid 1px #bdbaba;
  margin: 15px 0;
  padding: 0 16px;
  height: 40px;
}
.btn {
  margin: 15px 20px;
}
</style>
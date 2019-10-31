<template>
  <div>
    <van-nav-bar title="账户安全" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li>
        <span>修改手机号</span>
        <van-icon class="iconh" name="arrow" />
      </li>
      <li>
        <span>修改密码</span>
        <van-icon class="iconh" name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Account",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
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
  padding: 0 16px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
li:last-child {
  border-bottom: solid 1px #bdbaba;
}
</style>
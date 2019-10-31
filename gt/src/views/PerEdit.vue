<template>
  <div>
    <van-nav-bar title="个性编辑" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li>
        <span>我的编辑</span>
      </li>
      <li>
        <span>编辑</span>
      </li>
      <li>
        <span>草稿箱</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PerEdit",
  data() {
    return {};
  },
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
  list-style: none;
  background: #fff;
  border-top: solid 1px #bdbaba;
  padding: 0 16px;
  height: 50px;
  line-height: 50px;
}
li:last-child {
  border-bottom: solid 1px #bdbaba;
}
li span{
    font-size: 16px;
}
</style>
<template>
  <div>
    <van-nav-bar title="编辑" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li></li>
    </ul>
    <van-cell-group>
      <van-field v-model="text1" clearable label="标题" placeholder="请输入标题" />

      <van-field v-model="text2" type="password" label="内容" placeholder="请输入内容" />
    </van-cell-group>

    <van-button class="btn" type="primary">发布</van-button>
  </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      text1: "",
      text2: ""
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
.btn{
    width: 205px;
    font-size: 20px;
    line-height: 50px;
    height: 50px;
    margin: 10px 85px; 
}
</style>
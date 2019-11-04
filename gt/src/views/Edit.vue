<template>
  <div>
    <van-nav-bar
      title="编辑"
      left-text="返回"
      right-text="发布"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <ul>
      <li></li>
    </ul>
    <van-cell-group>
      <van-field v-model="text1" clearable label="标题" placeholder="请输入标题" />

      <van-field v-model="text2" type="password" label="内容" placeholder="请输入内容" />
    </van-cell-group>

    <van-button class="btn" type="primary" v-tap="{methods:storage}">存入草稿箱</van-button>
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
    },
    onClickRight() {
      this.$router.push('mineEdit')
    },
    storage() {
      this.$router.push('drafts')
    }
  }
};
</script>

<style scoped>
.btn {
  width: 285px;
  font-size: 20px;
  line-height: 50px;
  height: 50px;
  margin: 10px 45px;
}
</style>
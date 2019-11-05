<template>
  <div>
    <van-nav-bar title="消息溶蚀" left-text="返回" left-arrow @click-left="onClickLeft" />
    <br>
    <van-cell-group>
      <van-switch-cell v-model="checked1" title="声音" />
    </van-cell-group>
    <van-cell-group>
      <van-switch-cell v-model="checked2" title="震动" />
    </van-cell-group>
    <br>
    <p>当青葱时代运行时，你可以设置是否需要声音或震动提示</p>
  </div>
</template>

<script>
export default {
  name: "notification",
  data() {
    return {
      checked1: true,
      checked2: true,
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
p{
    margin: 0 28px;
}
</style>
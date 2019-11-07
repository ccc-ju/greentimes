<template>
  <div>
    <van-nav-bar title="草稿箱" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "drafts",
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

</style>
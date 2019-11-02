<template>
  <div>
    <header>
      <van-nav-bar class="sfzl" title="请选择城市" left-text="返回" left-arrow @click-left="onClickLeft" />
    </header>
    <section>
      <van-index-bar>
        <van-index-anchor index="A" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />

        <van-index-anchor index="B" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
      </van-index-bar>
    </section>
  </div>
</template>

<script>
export default {
  name: "city",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style  scoped>
</style>
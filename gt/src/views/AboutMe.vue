<template>
  <div>
    <van-nav-bar title="关于我们" left-text="返回" left-arrow @click-left="onClickLeft" />
    <header>
      <img src="../assets/logo.jpg" />
      <p class="logotxt">青葱时代&nbsp;2.1.5</p>
    </header>
    <section>
      <p class="introduce">青葱时代网络技术(深圳)有限公司是Arabian Nights Group Holding Limited (天方夜谭集团控股有限公司，简称ANG公司)旗下的中流砥柱，是ANG公司”未来时代"生态系统的基石。“青葱时代APP 是ANG公司的开山之作，是全球首家为青年人量身打造的高级智能管家!公司致力于为青年群体提供正能量的精神食粮和高品质的物质食粮，用科技和产品影响、优化当代青年人的生活方式和思维方式!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "aboutMe",
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
header {
  height: 200px;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 80px;
  margin: 20px 0;
}
.logotxt {
  font-size: 20px;
}
.introduce{
    font-size: 14px;
    margin: 10px 10px;
}
</style>
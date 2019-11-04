<template>
  <div>
    <van-nav-bar title="客服中心" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="phone">
      <img src="../assets/kefu.jpg" alt />
      <p>欢迎您拨打我们的客服热线</p>
      <van-button class="btn" color="rgb(255, 196, 0)" size="large">
        <van-icon class="ph" name="phone-circle-o" />
        <span>400-188-3396</span>
      </van-button>
    </div>
    <van-divider
      class="xian"
      :style="{ color: '#333', borderColor: 'rgb(82, 79, 79)', padding: '2px 16px' }"
    >或</van-divider>
    <div class="idea">
      <van-button class="ibtn" color="green" plain v-tap="{methods:feedback}">意见反馈</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    feedback() {
      this.$router.push('feedback');
    }
  }
};
</script>

<style scoped>
.phone {
  text-align: center;
  margin: 5vh 10vw;
}
.phone img {
  width: 25vw;
  border: 0;
  overflow: hidden;
  display: inline-block;
  margin-bottom: 3vh;
}
.phone p {
  font-size: 4vw;
  margin-bottom: 4vh;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ph {
  float: left;
  font-size: 5vh;
  line-height: 8vh;
  margin: 0 5vw;
}
.btn span {
  float: right;
  line-height: 8vh;
}
.idea {
  text-align: center;
}
.ibtn{
  width:40vw;
  margin: 5vh 0;
}
</style>
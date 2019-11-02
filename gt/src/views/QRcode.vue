<template>
  <div id="qrcode">
    <header>
      <van-nav-bar title="我的二维码" left-text="返回" left-arrow @click-left="onClickLeft" />
    </header>
    <section>
      <van-dialog class="qrcode" v-model="show" title="标题" show-cancel-button>
         <img src="https://img.yzcdn.cn/vant/apple-3.jpg" /> 
      </van-dialog>
    </section>
  </div>
</template>

<script>
export default {
  name: "qrcode",
  data() {
    return {
      show: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style  scoped>
#qrcode{
    height: 100%;
    display: flex;
    flex-direction: column;
}
header{
    height: 46px;
}
section{
    flex: 1;
}
.qrcode{
    width:300px;
    height:300px;
}
img{
    overflow: hidden;
    border: 0;
    widows: 200px;
    height: 200px;
    margin: 0 30px;
}
</style>
<template>
  <div>
    <header>
      <van-nav-bar title="昵称" left-text="返回" left-arrow @click-left="onClickLeft" />
    </header>
    <section>
      <van-field class="nc" v-model="value" type="textarea" label="昵称" placeholder="请输入昵称" />
      <van-button type="primary" class="btn" v-tap="{methods:change}">主要按钮</van-button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Nc",
  data() {
    return {
      show: false,
      value: localStorage.getItem("nickname1"),
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    change() {
      console.log(this.value);
      if (this.value === "") {
        this.value == localStorage.getItem("nickname1");
      }else{
        let value = this.value
        localStorage.setItem("nickname2",value)
      }
    }
  }
};
</script>

<style  scoped>
.nc {
  height: 46px;
  border-top: solid 0.5px #a09898;
  border-bottom: solid 0.5px #a09898;
}
.btn {
  margin-top: 16px;
  width: 80vw;
  margin-left: 10vw;
  font-size: 16px;
}
</style>
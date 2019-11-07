<template>
  <div>
    <header>
      <van-nav-bar title="昵称" left-text="返回" left-arrow @click-left="onClickLeft" />
    </header>
    <section>
      <van-field class="inp" readonly clickable :value="value" @touchstart.native.stop="show = true" />

      <van-number-keyboard v-model="value" :show="show" :maxlength="6" @blur="show = false" />
    </section>
  </div>
</template>

<script>
export default {
  name: "Nc",
  data() {
    return {
      show: false,
      value: ""
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
.inp{
    border-top: solid 0.5px #a09898; 
    border-bottom: solid 0.5px #a09898; 
}
</style>
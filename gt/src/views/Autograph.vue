<template>
  <div>
    <header>
      <van-nav-bar title="个性签名" left-text="返回" right-text="保存" left-arrow @click-left="onClickLeft"  @click-right="onClickRight" />
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
    },
    onClickRight() {
      this.$toast('保存成功');
    }
  }
};
</script>

<style  scoped>
.inp{
    margin-top:10px; 
    border-top: solid 1px #a09898; 
    border-bottom: solid 1px #a09898; 
    height: 150px;
}
</style>
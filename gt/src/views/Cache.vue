<template>
  <div>
    <van-nav-bar title="缓存管理" left-text="返回" left-arrow @click-left="onClickLeft" />
<br>
    
<van-radio-group v-model="radio">
  <van-radio class="checked" name="1" checked-color="#07c160">清空所有聊天记录</van-radio>
  <van-radio class="checked" name="2" checked-color="#07c160">清空所有缓存数据</van-radio>
</van-radio-group>
    <van-button class="clear" type="danger" size="large">清除缓存</van-button>

  </div>
</template>

<script>
export default {
  name: "cache",
  data() {
    return {
       radio: '0'
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
.checked{
    height: 50px;
    font-size: 18px;
    margin: 0 16px
}
.clear{
    margin: 15px 20px;
}
</style>
<template>
  <div>
    <van-nav-bar title="客服中心" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field
        v-model="message"
        rows="8"
        autosize
        type="textarea"
        placeholder="您的建议是我们进步的源泉（300以内）"
      />
    </van-cell-group>
    <van-button class="btn" type="primary" size="large">提交</van-button>
  </div>
</template>

<script>
export default {
  name: "feedback",
  data() {
    return {
      message: ""
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
.btn {
  width: 345px;
  margin: 15px;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
}
</style>
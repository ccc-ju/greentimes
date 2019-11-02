<template>
  <div>
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
    <span>暂无消息</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Msg",
  data() {
    return {
      title: "消息",
      active: 0
    };
  },
  methods: {
    getval(msg) {
      // console.log(msg)
      this.title = msg;
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$emit("toparent", this.title);
  }
};
</script>


<style scoped="">
.box {
  margin-top: 45px;
}
</style>
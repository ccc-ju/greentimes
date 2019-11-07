<template>
  <div>
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
    <p>1</p>
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
  margin-top: 6vh;
}
p{
  font-size: 15px;
  text-align: center;
  line-height: 60vh;
  color: #888;
  background: url(../assets/msg.jpg) no-repeat;
  background-size: contain;
}
</style>
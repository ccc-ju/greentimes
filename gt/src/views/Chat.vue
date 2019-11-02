<template>
  <div>
    <div class="box">
    <van-nav-bar :title="title" :fixed="true" />
     <p>
        <img src="../assets/t.jpg" alt />
        <span>用户</span>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Chat",
  data() {
    return {
      title: "消息",
      active: 0
    };
  },
  mounted() {
    this.$emit("toparent", this.title);
  }
};
</script>


<style scoped="">
.box{
  margin-top: 45px;
}
.box img {
  width: 14vw;
  height: 8vh;
  margin: 1vh 3vh;
  float: left;
  border-radius: 50%;
}
.box p {
  line-height: 10vh;
  height: 10vh;
}
</style>
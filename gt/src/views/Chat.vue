<template>
  <div>
    <div class="box">
    <van-nav-bar :title="title" :fixed="true" />
     <p>
        1
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

p{
  font-size: 15px;
  text-align: center;
  line-height: 60vh;
  color: #888;
  background: url(../assets/msg.jpg) no-repeat;
  background-size: contain;
}
</style>
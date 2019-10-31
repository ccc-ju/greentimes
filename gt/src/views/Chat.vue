<template>
  <div>
    <div class="box">
    <van-nav-bar :title="title" :fixed="true" />
    <van-contact-card type="edit" name="用户" tel="13000000000" :editable="false" />
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
</style>
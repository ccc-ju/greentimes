<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      right-text="清空"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
     </van-nav-bar>
    <van-cell-group>
      <van-field label="黑名单" left-icon="contact" disabled />
    </van-cell-group>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "AddFri",
  data() {
    return {
      title: "验证消息",
      active: 0,
      value: "",
      checked: false,
      e: ""
    };
  },
  methods: {
     onClickLeft() {
     this.$router.go(-1);
    },
    onClickRight() {
      Toast('');
    }
  }, 
  mounted() {
    this.$emit("toparent", this.title);
  }
};
</script>

 <style scoped="">

img {
  width: 25px;
  height: 25px;
}
p {
  height: 3vh;
}
</style>
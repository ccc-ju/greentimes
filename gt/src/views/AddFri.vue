<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
     <van-icon name="scan" slot="right" />
     </van-nav-bar>
    <van-search
      v-model="value"
      placeholder="请输入青葱号或者手机号"
      show-action
      shape="round"
      @search="onSearch"
      class="box"
    ></van-search>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "AddFri",
  data() {
    return {
      title: "添加好友",
      active: 0,
      value: "",
      checked: false,
      e: ""
    };
  },
  methods: {
    onSearch() {
      $router.push("");
    },
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
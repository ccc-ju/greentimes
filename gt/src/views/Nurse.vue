<template>
  <div class="wrap">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div>
        </van-card>
  </div>
</template>

<script>
import * as api from '../api/getProlist.js';
import axios from "axios";
export default {
  name: "Nurse",
  data() {
    return {
      title: "奶妈",
      active: 1,
      value:'',
      value1: 0,
      value2: "a",
      option1: [
        { text: "附近店铺", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "抢购状态", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
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
      Toast("");
    }
  },
  mounted() {
    this.$emit("toparent", this.title);
    api.getProlist({uid:19802,pagesize:10}).then((data)=>{
      console.log(data.data.data)
    })
  }
};
</script>


<style scoped="">
.wrap {
  width: 100%;
  height: 100%;
}
.box img {
  width: 95vw;
  height: 25vh;
  margin: 1.4vh;
  float: left;
}
</style>
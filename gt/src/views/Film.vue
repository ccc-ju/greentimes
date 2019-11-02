<template>
  <div class="wrap">
    <header>
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
    </header>
    <section>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
      <van-card
        v-for="item in list"
        :thumb="item.coverImg"
        :price="item.price"
        :title="item.name"
        :desc="item.descriptions"
        origin-price="199.00"
        @click="detail(item._id)"
      />
    </section>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";
export default {
  name: "Nurse",
  data() {
    return {
      title: "电影",
      active: 1,
      list: [],
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
    api
      .getPro({ per: 10, page: 1, name: name, product_category: "" })
      .then(data => {
        // console.log(data.data.products);
        this.list = data.data.products;
      });
  }
};
</script>

<style scoped="">
.wrap {
  width: 100%;
  height: 100%;
}
header {
  width: 100%;
  height: 7vh;
  position: fixed;
  top: 0;
  z-index: 2;
}
section {
  flex: 1;
  margin-bottom: 9vh;
  margin-top: 7vh;
}
.box img {
  width: 95vw;
  height: 25vh;
  margin: 1.4vh;
  float: left;
}
</style>
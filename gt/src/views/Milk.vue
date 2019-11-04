<template>
  <div id="milk">
    <header>
      <van-nav-bar title="奶妈" left-text="返回" left-arrow @click-left="onClickLeft">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
      <van-tabs v-model="active">
        <van-tab v-for="(item,i) in ming" :title="item"></van-tab>
      </van-tabs>
    </header>
    <section>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-card
          v-for="item1 in list"
          :thumb="item1.coverImg"
          :price="item1.price"
          :title="item1.name"
          :desc="item1.descriptions"
          origin-price="199.00"
          @click="detail(item1._id)"
        />
      </van-pull-refresh>
    </section>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";
export default {
  name: "milk",
  data() {
    return {
      active: 0,
      ming: [
        "伊利",
        "伊利金领冠",
        "蒙牛",
        "飞鹤",
        "贝因美",
        "美赞臣",
        "惠氏",
        "爱他美",
        "诺优能",
        "南山",
        "a2至初",
        "美素佳儿"
      ],
      list: [],
      isLoading: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    detail(id) {
      this.$router.push("/detail/" + id);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
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

<style scoped>
body {
  width: 100vw;
  height: 100vh;
}
#milk {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100vw;
  height: 96px;
  position: fixed;
  top: 0;
  z-index: 1;
}
section {
  flex: 1;
  position: relative;
  top: 96px;
}
</style>
<template>
  <div id="aegean">
    <header>
      <van-nav-bar title="爱琴海" left-text="返回" left-arrow @click-left="onClickLeft" />
      <van-tabs v-model="active">
        <van-tab title="我的岛"></van-tab>
        <van-tab title="推荐"></van-tab>
      </van-tabs>
    </header>

    <section class="follow">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <p>我关注的</p>
        <van-card
          v-for="item in list"
          :thumb="item.coverImg"
          :price="item.price"
          :title="item.name"
          :desc="item.descriptions"
          origin-price="199.00"
          @click="detail(item1._id)"
        />
      </van-pull-refresh>
    </section>

    <footer>
      <van-tabbar v-model="active1">
        <van-tabbar-item icon="home-o">岛屿</van-tabbar-item>
        <van-tabbar-item icon="flower-o">罗曼蒂克</van-tabbar-item>
        <van-tabbar-item icon="user-o">个人中心</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";
export default {
  name: "aegean",
  data() {
    return {
      active: 0,
      active1: 0,
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
#aegean {
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
.follow {
  flex: 1;
  position: relative;
  top: 96px;
  bottom: 50px;
}
.follow p{
  margin: 0 24px;
  font-size: 16px;
  line-height: 24px;
}

footer {
  height: 50px;
}
</style>
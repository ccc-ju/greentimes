<template>
  <div id="food">
    <header>
      <van-nav-bar title="美食攻略" left-text="返回" left-arrow @click-left="onClickLeft">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
      <van-dropdown-menu class="nav">
        <van-dropdown-item v-model="value1" :options="option1" v-tap="{methods:address}" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </header>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <section>
      <van-card
        v-for="item in list"
        :thumb="item.coverImg"
        :price="item.price"
        :title="item.name"
        :desc="item.descriptions"
        origin-price="199.00"
        @click="detail(item._id)"
        class="prolist"
      />
    </section>
    </van-pull-refresh>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";
export default {
  name: "food",
  data() {
    return {
      list: [],
      value1: 0,
      value2: "a",
      value3: "A",
      option1: [{ text: "郑州", value: 0 }],
      option2: [
        { text: "附近", value: "a" },
        { text: "500米", value: "b" },
        { text: "1000米", value: "c" },
        { text: "2000米", value: "d" },
        { text: "5000米", value: "e" },
        { text: "全部", value: "f" }
      ],
      option3: [
        { text: "分类", value: "A" },
        { text: "全部", value: "B" },
        { text: "小吃快餐", value: "C" },
        { text: "面包甜点", value: "D" },
        { text: "中式菜肴", value: "E" },
        { text: "海外料理", value: "F" },
        { text: "火锅烧烤", value: "G" },
        { text: "茶饮咖啡", value: "H" }
      ],
      isLoading: false,
    };
  },
  methods: {
    address() {},
    onClickLeft() {
      this.$router.go(-1);
    },
    detail(id) {
      this.$router.push("/detail/" + id);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
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
}

</script>

<style scope="" >
body {
  width: 100vw;
  height: 100vh;
}
#food {
  display: flex;
  flex-direction: column;
}
header {
  width: 100vw;
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
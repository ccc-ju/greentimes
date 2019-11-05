<template>
  <div>
    <header>
      <van-nav-bar :title="title[0]" left-text="返回" left-arrow @click-left="onClickLeft">
        <van-icon name="wap-nav" slot="right" />
      </van-nav-bar>
    </header>
    <van-search placeholder="搜索" v-model="value" />
    <section class="derails">
      <ul class="per-details">
        <li v-for="(item,i) in list">
          <img :src="item.coverImg" />
          <p>{{item.name}}</p>
          <p>{{item.descriptions}}</p>
        </li>
      </ul>
    </section>
    <footer>
      <p>免费为青少年提供生理健康专家在线咨询，避免上当受骗和身心受到伤害</p>
    </footer>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";
export default {
  name: "little",
  data() {
    return {
      title: ["郑州"],
      value: "",
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$emit("toparent", this.title);
    api
      .getPro({ per: 5, page: 1, name: name, product_category: "" })
      .then(data => {
        // console.log(data.data.products);
        this.list = data.data.products;
      });
  }
};
</script>

<style scoped>
.derails {
  margin: 25px 35px;
  height: 365px;
}
.per-details li {
  position: absolute;
  height: 365px;
  border: solid 1px #e1e1e1;
  box-shadow: 5px 5px 5px #f1f1f1;
}
.per-details li img {
  width: 305px;
  height: 305px;
  border: 0;
  overflow: hidden;
}
.per-details li p {
  width: 305px;
  font-size: 16px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
footer {
  position: absolute;
  bottom: 15px;
  background: blue;
  height: 40px;
  border-radius: 8px;
  margin: 0 16px;
}
footer p {
  text-align: center;
  line-height: 20px;
  margin: 0 10px;
}
</style>
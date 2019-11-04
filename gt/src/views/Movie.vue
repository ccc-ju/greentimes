<template>
  <div class="wrap">
    <header>
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>
    <section>
      <van-tabs v-model="active">
        <van-tab title="中国">
          <div class="box">
            <van-grid :gutter="4" :column-num="2" square>
              <van-grid-item v-for="item in list" :icon="item.coverImg" :text="item.name" />
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="欧美">
          <div class="box">
            <van-grid :gutter="6" :column-num="2" square>
              <van-grid-item v-for="item in list" :icon="item.coverImg" :text="item.name" />
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="印度">
          <div class="box">
            <van-grid :gutter="3" :column-num="2" square>
              <van-grid-item v-for="item in list" :icon="item.coverImg" :text="item.name" />
            </van-grid>
          </div>
        </van-tab>
        <van-tab title="其它">
          <div class="box">
            <van-grid :gutter="7" :column-num="2" square>
              <van-grid-item v-for="item in list" :icon="item.coverImg" :text="item.name" />
            </van-grid>
          </div>
        </van-tab>
      </van-tabs>
    </section>
    <img src="../assets/cc.jpg" alt class="cc" />
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";
export default {
  name: "Movie",
  data() {
    return {
      title: "电影",
      active: 2,
      value: ""
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

.box img {
  width: 45vw;
  height: 23vh;
  margin: 1.4vh;
  float: left;
}
section {
  flex: 1;
  margin-top:7vh; 
}
.cc {
  width: 14vw;
  height: 8vh;
  position: fixed;
  right: 6vw;
  bottom: 3vh;
  border-radius: 50%;
}
</style>
<template>
  <div class="wrap">
    <header>
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>
    <section>
      <van-tabs v-model="active">
        <van-tab title="古典建筑">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
             <van-grid :column-num="num">
                <van-grid-item  v-for="item in list" :text="item.name">
                  <van-image :src="item.coverImg" />
                </van-grid-item>
              </van-grid>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="现代建筑">
           <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-grid :column-num="num">
                <van-grid-item  v-for="item in list" :text="item.name">
                  <van-image :src="item.coverImg" />
                </van-grid-item>
              </van-grid>
           </van-pull-refresh>
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
  name: "Architecture",
  data() {
    return {
      title: "经典建筑",
      active: 2,
      value: "",
      list: [],
      isLoading: false,
      num:2
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
      .getPro({ per: 20, page: 1, name: name, product_category: "" })
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
.van-image{
  width: 35vw;
  height: 20vh;
  float: left;
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
  margin-top: 7vh;
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
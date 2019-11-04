<template>
  <div class="wrap">
      <header>
        <van-nav-bar
          :title="title"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <van-icon name="search" slot="right" />
        </van-nav-bar>
      </header>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="box">
        <van-grid :gutter="10" :column-num="2" square>
          <van-grid-item v-for="item in list" :icon="item.coverImg" :text="item.name" />
        </van-grid>
      </div>
      <img src="../assets/cc.jpg" alt class="cc" v-tap="{methods:edit}"/>
      </van-pull-refresh>
    </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Beauty",
  data() {
    return {
      title: "中国大学",
      active: 0,
      list: [],
      value: "",
      isLoading: false
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
     edit() {
      this.$router.push("/coledit");
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
.box img {
  width: 45vw;
  height: 23vh;
  margin: 1.4vh;
  float: left;
}
header {
  width: 100%;
  height: 7vh;
  position: fixed;
  top: 0;
  z-index: 1;
}
.box {
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
  z-index: 1;
}
</style>
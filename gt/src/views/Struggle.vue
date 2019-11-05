<template>
  <div id="struggle">
    <header>
      <van-nav-bar title="奋青" left-text="返回" left-arrow @click-left="onClickLeft">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>

    <section>
      <van-tabs v-model="active">
        <van-tab title="随笔">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <ul class="pic-txt">
              <li v-for="item in list" @click="description(item._id)">
                <img :src="item.coverImg" />
                <p>{{item.descriptions}}</p>
                <p>{{item.name}}</p>
              </li>
            </ul>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="诗歌">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-card
              v-for="item in list"
              :thumb="item.coverImg"
              :desc="item.descriptions"
              @click="description(item._id)"
            />
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";
export default {
  name: "struggle",
  data() {
    return {
      active: 0,
      list: [],
      isLoading: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    description(id) {
      this.$router.push("/description/" + id);
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
#struggle {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #e1e1e1;
}
header {
   width: 100vw;
  height: 46px;
  position: fixed;
  top: 0;
  z-index: 1;
}
section{
  margin-top: 46px; 
}
.pic-txt li {
  margin: 15px 0 0;
}
.pic-txt li img {
  width: 100%;
  height: 190px;
}
.pic-txt li p {
  width: 100vw;
  font-size: 16px;
  padding: 0 10px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  vertical-align: middle;
  background: #fff;
}
</style>
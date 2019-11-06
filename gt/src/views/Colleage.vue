<template>
  <div id="colleage">
    <header>
      <van-nav-bar title="馅儿饼" left-text="返回" left-arrow @click-left="onClickLeft">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>

    <section>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <ul class="lists">
          <li v-for="item in list" @click="fraud(item._id)">
            <div class="fraud">
              <h4>{{item.name}}</h4>
              <p>{{item.descriptions}}</p>
            </div>
            <img :src="item.coverImg" />
          </li>
        </ul>
      </van-pull-refresh>
    </section>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";
export default {
  name: "colleage",
  data() {
    return {
      list: [],
      isLoading: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    fraud(id) {
      this.$router.push("/fraud/" + id);
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
#colleage {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header {
  width: 100vw;
  height: 46px;
  position: fixed;
  top: 0;
  z-index: 1;
}
section {
  flex: 1;
  margin-top: 46px;
  background: #e1e1e1;
}
.lists {
  width: 100vw;
  margin-top: 15px;
}
.lists li {
  padding: 0 16px;
  margin: 16px 0;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.fraud {
  height: 100px;
  display: flex;
  flex-flow: column;
  justify-content: top;
}
.fraud h4 {
  font-size: 24px;
  line-height: 30px;
}
.fraud p {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  vertical-align: middle;
}
/* .pie {
  margin-top: 15px;
  width: 100vw;
}
.pie li {
  margin: 16px 0;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  height: 130px;
}
.fraud h4 {
  font-size: 16px;
  margin-bottom: 10px;
}
.fraud p {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
} */
.lists img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 10px;
}
</style>
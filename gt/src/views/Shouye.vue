<template>
  <div class="wrap">
    <header>
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </header>

    <div class="cont">
        <van-swipe :autoplay="3000" indicator-color="white" class="box">
          <van-swipe-item>
            <img src="../assets/z.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/z.jpg" alt />
          </van-swipe-item>
        </van-swipe>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item title="筛选" ref="item">
          <van-switch-cell v-model="switch1" title="包邮" />
          <van-switch-cell v-model="switch2" title="团购" />
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
      <van-card v-for="item in list"
        :per="item.pages"
        :page="item.pages" 
        :name="item.name"
        :product_category ="item.productCategory"
         
      />
      <p class="txt">发布房源</p>
      <!-- <router-view></router-view> -->
    </div>
   
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Shouye",
  data() {
    return {
      title: "直租吧",
      active: 0,
      value: 0,
      list:[],
      switch1: false,
      switch2: false,
      option: [
        { text: "郑州", value: 0 },
        { text: "活动商品", value: 1 },
        { text: "活动商品", value: 2 }
      ]
    };
  },
  methods: {
     getval(msg) {
      // console.log(msg)
      this.title = msg;
    },
    onSearch() {
      $router.push("");
    },
    onClickLeft() {
      this.$router.push('/index');
    },
    onClickRight() {
      Toast("");
    },
    onConfirm() {
      this.$refs.item.toggle();
    }
  },

  mounted() {
    this.$emit("toparent", this.title);
    api.getPro({per:10,page:1,name:name,product_category:''}).then((data)=>{
      console.log(data.data)
      this.list = data.data;
    })
  }
};
</script>


<style scoped="">
html,body{
  height:100%;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: 9vh;
}
.cont {
  flex: 1;
  overflow:auto;
}
van-swipe-item {
  width: 95vw;
  height: 22vh;
}
.box img {
  width: 95vw;
  height: 22vh;
  margin: 1.3vh;
  float: left;
}
van-tabbar {
  margin-top: 9vh;
}
.txt{
  width: 22vw;
  height: 5vh;
  background: #1ad473;
  border-radius: 3vh;
  color: white;
  text-align: center;
  line-height: 5vh;
  position: absolute;
  right: 5vw;
  bottom: 10vh;
}
</style>
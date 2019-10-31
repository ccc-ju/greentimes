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
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="../assets/z1.jpg">
        <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </div>
      </van-card>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="../assets/z1.jpg">
        <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </div>
      </van-card>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="../assets/z1.jpg">
        <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </div>
      </van-card>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="../assets/z1.jpg">
        <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </div>
      </van-card>
    </div>
    <footer>
      <van-tabbar v-model="active" active-color="#07c160" inactive-color="#333">
        <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item icon="chat">消息</van-tabbar-item>
        <van-tabbar-item icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Beauty",
  data() {
    return {
      title: "直租吧",
      active: 0,
      value: 0,
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
    onSearch() {
      $router.push("");
    },
    onClickLeft() {
      this.$router.go(-1);
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
</style>
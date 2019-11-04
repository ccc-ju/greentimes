<template>
  <div class="wrap">
    <header>
      <img src="../assets/8.jpg" alt class="head" />
    </header>
    <section>
      <van-swipe :autoplay="3000" indicator-color="white" class="box">
        <van-swipe-item>
          <img src="../assets/1.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/2.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/3.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/4.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/5.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/6.jpg" alt />
        </van-swipe-item>
      </van-swipe>
      <p class="txt">贴心管家</p>
      <div class="item">
        <p v-tap="{methods:grab}">
          <img src="../assets/i1.jpg" alt />
          <span>抢吧</span>
        </p>
        <p v-tap="{methods:pay}">
          <img src="../assets/i2.jpg" alt />
          <span>青葱支付</span>
        </p>
        <p v-tap="{methods:rent}">
          <img src="../assets/i3.jpg" alt />
          <span>直租吧</span>
        </p>
        <p v-tap="{methods:food}">
          <img src="../assets/i4.jpg" alt />
          <span>美食攻略</span>
        </p>
        <p v-tap="{methods:milk}">
          <img src="../assets/i5.jpg" alt />
          <span>奶妈</span>
        </p>
        <p>
          <img src="../assets/i6.jpg" alt />
          <span>挖牛</span>
        </p>
        <p>
          <img src="../assets/i7.jpg" alt />
          <span>好车之家</span>
        </p>
        <p>
          <img src="../assets/i8.jpg" alt />
          <span>轻松点</span>
        </p>
        <p>
          <img src="../assets/i9.jpg" alt />
          <span>搭配</span>
        </p>
        <p>
          <img src="../assets/i10.jpg" alt />
          <span>品牌攻略</span>
        </p>
      </div>
      <img src="../assets/7.jpg" alt class="niu" />
      <p class="txt">定制管家</p>
      <div class="item">
        <p>
          <img src="../assets/i11.jpg" alt />
          <span>爱琴海</span>
        </p>
        <p>
          <img src="../assets/i12.jpg" alt />
          <span>磨牙</span>
        </p>
        <p>
          <img src="../assets/i13.jpg" alt />
          <span>一点通</span>
        </p>
        <p>
          <img src="../assets/i14.jpg" alt />
          <span>奋青</span>
        </p>
        <p>
          <img src="../assets/i15.jpg" alt />
          <span>馅儿饼</span>
        </p>
      </div>
      <img src="../assets/9.jpg" alt class="niu" />
      <p class="txt">备用管家</p>
      <div class="item">
        <p v-tap="{methods:dx}">
          <img src="../assets/i1.jpg" />
          <span>醉美大学</span>
        </p>
        <p v-tap="{methods:lt}">
          <img src="../assets/i2.jpg" alt />
          <span>美哉旅途</span>
        </p>
        <p v-tap="{methods:arc}">
          <img src="../assets/i3.jpg" alt />
          <span>经典建筑</span>
        </p>
        <p v-tap="{methods:hotel}">
          <img src="../assets/i4.jpg" alt />
          <span>醉美酒店</span>
        </p>
        <p v-tap="{methods:movie}">
          <img src="../assets/i5.jpg" alt />
          <span>电影</span>
        </p>
        <p>
          <img src="../assets/i6.jpg" alt />
          <span>挖牛</span>
        </p>
        <p>
          <img src="../assets/i7.jpg" alt />
          <span>好车之家</span>
        </p>
        <p>
          <img src="../assets/i8.jpg" alt />
          <span>轻松点</span>
        </p>
        <p>
          <img src="../assets/i9.jpg" alt />
          <span>搭配</span>
        </p>
        <p>
          <img src="../assets/i10.jpg" alt />
          <span>品牌攻略</span>
        </p>
        <p>
          <img src="../assets/i1.jpg" alt />
          <span>抢吧</span>
        </p>
        <p>
          <img src="../assets/i2.jpg" alt />
          <span>青葱支付</span>
        </p>
        <p>
          <img src="../assets/i3.jpg" alt />
          <span>直租吧</span>
        </p>
        <p>
          <img src="../assets/i4.jpg" alt />
          <span>美食攻略</span>
        </p>
        <p>
          <img src="../assets/i5.jpg" alt />
          <span>奶妈</span>
        </p>
        <p>
          <img src="../assets/i6.jpg" alt />
          <span>挖牛</span>
        </p>
        <p>
          <img src="../assets/i7.jpg" alt />
          <span>好车之家</span>
        </p>
        <p>
          <img src="../assets/i8.jpg" alt />
          <span>轻松点</span>
        </p>
        <p>
          <img src="../assets/i9.jpg" alt />
          <span>搭配</span>
        </p>
        <p>
          <img src="../assets/i10.jpg" alt />
          <span>品牌攻略</span>
        </p>
        <p>
          <img src="../assets/i1.jpg" alt />
          <span>抢吧</span>
        </p>
        <p>
          <img src="../assets/i2.jpg" alt />
          <span>青葱支付</span>
        </p>
        <p>
          <img src="../assets/i3.jpg" alt />
          <span>直租吧</span>
        </p>
        <p>
          <img src="../assets/i4.jpg" alt />
          <span>美食攻略</span>
        </p>
        <p>
          <img src="../assets/i5.jpg" alt />
          <span>奶妈</span>
        </p>
        <p>
          <img src="../assets/i6.jpg" alt />
          <span>挖牛</span>
        </p>
        <p>
          <img src="../assets/i7.jpg" alt />
          <span>好车之家</span>
        </p>
        <p>
          <img src="../assets/i8.jpg" alt />
          <span>轻松点</span>
        </p>
        <p>
          <img src="../assets/i9.jpg" alt />
          <span>搭配</span>
        </p>
        <p>
          <img src="../assets/i10.jpg" alt />
          <span>品牌攻略</span>
        </p>
        <p>
          <img src="../assets/i1.jpg" alt />
          <span>抢吧</span>
        </p>
        <p>
          <img src="../assets/i2.jpg" alt />
          <span>青葱支付</span>
        </p>
        <p>
          <img src="../assets/i3.jpg" alt />
          <span>直租吧</span>
        </p>
        <p>
          <img src="../assets/i4.jpg" alt />
          <span>美食攻略</span>
        </p>
        <p>
          <img src="../assets/i5.jpg" alt />
          <span>奶妈</span>
        </p>
        <p>
          <img src="../assets/i6.jpg" alt />
          <span>挖牛</span>
        </p>
        <p>
          <img src="../assets/i7.jpg" alt />
          <span>好车之家</span>
        </p>
        <p>
          <img src="../assets/i8.jpg" alt />
          <span>轻松点</span>
        </p>
        <p>
          <img src="../assets/i9.jpg" alt />
          <span>搭配</span>
        </p>
        <p>
          <img src="../assets/i10.jpg" alt />
          <span>品牌攻略</span>
        </p>
        <p>
          <img src="../assets/i11.jpg" alt />
          <span>爱琴海</span>
        </p>
        <p>
          <img src="../assets/i12.jpg" alt />
          <span>磨牙</span>
        </p>
        <p>
          <img src="../assets/i13.jpg" alt />
          <span>一点通</span>
        </p>
        <p>
          <img src="../assets/i14.jpg" alt />
          <span>奋青</span>
        </p>
        <p>
          <img src="../assets/i15.jpg" alt />
          <span>馅儿饼</span>
        </p>
      </div>
    </section>
    <div id="contain">
      <router-view @toparent="getval"></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/chat">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/book">通讯录</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0,
      title: "首页"
    };
  },
  methods: {
    getval(msg) {
      // console.log(msg)
      this.title = msg;
    },
    grab() {
      this.$router.push("/grab");
    },
    pay() {
      this.$router.push("/payMent");
    },
    rent() {
      this.$router.push("/rent");
    },
    food() {
      this.$router.push("/food");
    },
    milk() {
      this.$router.push("/milk");
    },
    dx() {
      this.$router.push("/beauty");
    },
    lt() {
      this.$router.push("/journey");
    },
    arc() {
      this.$router.push("/architecture");
    },
    hotel() {
      this.$router.push("/hotel");
    },
    movie() {
      this.$router.push("/movie");
    }
  }
};
</script>
<style  scoped="">
body {
  width: 100vw;
  height: 100vh;
}
.wrap {
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 1;
}
.head {
  width: 60vw;
  height: 5vh;
  margin: 0 auto;
  margin-top: 3vh;
}
section {
  flex: 1;
  margin-bottom: 8vh;
  margin-top: 8vh;
}
.box {
  width: 100vw;
  height: 25vh;
  border-bottom: 1.3vh solid #f3f1f1;
}
.box img {
  width: 100vw;
  height: 25vh;
}

.txt {
  border-left: 3px solid green;
  text-indent: 5px;
  margin: 2vh 0 2vh 3vh;
}
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item p {
  width: 20vw;
  display: inline-block;
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 4vh;
}
.item p img {
  width: 11vw;
  height: 6vh;
}
.niu {
  width: 100%;
  height: 16vh;
  border-top: 1.3vh solid #f3f1f1;
  border-bottom: 1.3vh solid #f3f1f1;
}
</style>
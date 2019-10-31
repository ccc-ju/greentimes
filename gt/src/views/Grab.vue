<template>
  <div class="wrap">
    <header>
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <van-icon name="wap-nav" slot="right" />
      </van-nav-bar>
    </header>
    <section>
      <div class="box">
        <p v-tap="{methods:q1}">
          <img src="../assets/q1.jpg" alt />
          <span>订单</span>
        </p>
        <img src="../assets/t.jpg" alt class="cen" v-tap="{methods:per}" />
        <p v-tap="{methods:q2}">
          <img src="../assets/q2.jpg" alt />
          <span>兑换</span>
        </p>
      </div>
      <div class="pro">
        <p v-tap="{methods:q3}">
          <img src="../assets/q3.jpg" alt />
          <span>奶妈</span>
        </p>
        <p v-tap="{methods:q4}">
          <img src="../assets/q4.jpg" alt />
          <span>电影</span>
        </p>
        <p v-tap="{methods:q3}">
          <img src="../assets/q3.jpg" alt />
          <span>奶妈</span>
        </p>
        <p v-tap="{methods:q4}">
          <img src="../assets/q4.jpg" alt />
          <span>电影</span>
        </p>
        <p v-tap="{methods:q3}">
          <img src="../assets/q3.jpg" alt />
          <span>奶妈</span>
        </p>
        <p v-tap="{methods: q4}">
          <img src="../assets/q4.jpg" alt />
          <span>电影</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Beauty",
  data() {
    return {
      title: "郑州",
      active: 0,
      value: "",
      checked: false,
      e: ""
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
    per() {
      this.$router.push("/personal");
    },
     q1() {
      this.$router.push("/");
    },
    q2() {
      this.$router.push("/");
    },
    q3() {
      this.$router.push("/");
    },
    q4() {
      this.$router.push("/");
    },
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
header{
  width: 100%;
  height: 6vh;
  position: relative;
}

.wrap {
  width: 100%;
  height: 100%;
}
.box {
  display: flex;
  width: 100%;
  height: 25vh;
  background: url(../assets/q.jpg) no-repeat;
  background-size: contain;
  justify-content: space-between;
}

.box p,
.pro p {
  width: 20vw;
  display: inline-block;
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 4vh;
  margin-top: 6vh;
  border-radius: 50%;
}
.box p img {
  width: 14vw;
  height: 8vh;
  border-radius: 50%;
}
.pro {
  margin-top: -5vh;
}
.pro p {
  width: 40vw;
  height: 23vh;
  margin: 5vh auto;
}
.pro p img {
  width: 40vw;
  height: 22vh;
}
.cen {
  width: 26vw;
  height: 14vh;
  border-radius: 50%;
  margin-top: 3vh;
  z-index: 1;
}
</style>
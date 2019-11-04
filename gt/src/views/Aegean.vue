<template>
  <div>
    <van-nav-bar title="爱琴海" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active">
      <van-tab title="我的岛">
          <p class="isee">我关注的</p>
          <ul class="myisland">
              <li>
                  <img src="../assets/t.jpg" alt="">
                  <p>
                      <span>天方夜谭--遇见你真好！！</span>
                      <span>已有140423人驻扎</span>
                  </p>
              </li>
          </ul>
      </van-tab>
      <van-tab title="推荐">
          
      </van-tab>
    </van-tabs>

    <van-tabbar v-model="active1">
  <van-tabbar-item icon="home-o">岛屿</van-tabbar-item>
  <van-tabbar-item icon="flower-o">罗曼蒂克</van-tabbar-item>
  <van-tabbar-item icon="user-o">个人中心</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: "aegean",
  data() {
      return {
          active: 0,
          active1: 0,
      }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.isee{
    background: #e1e1e1;
    font-size: 16px;
    height: 28px;
    line-height: 28px;
    padding: 0 16px;
}
.myisland li {
    padding: 10px 16px;
    display: flex;
    justify-content: left;
}

.myisland li img{
    width:60px;
    height: 60px;
    border-radius: 50%;
}
.myisland li p{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 16px;
    font-size: 16px;
}
.myisland li p span:last-child{
    font-size: 12px;
}
</style>
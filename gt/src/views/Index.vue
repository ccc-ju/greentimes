<template>
  <div>
  
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
  name: "Index",
  data() {
    return {
      active: 0,
      title: "首页",
    
    };
  },
  methods: {
    getval(msg) {
      // console.log(msg)
      this.title = msg;
    }
  }
};
</script>


<style  scoped="">
body {
  width: 100vw;
  height: 100vh;
}

.box{
  width: 100vw;
  height: 30vh;
}
.box img{
   width: 100vw;
  height: 30vh;
}
.head{
  width: 60vw;
  height: 5vh;
  margin: 0 auto;
  margin-top: 3vh;
}
</style>
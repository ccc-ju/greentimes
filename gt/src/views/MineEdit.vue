<template>
  <div id="mineEdit">
    <header>
      <van-nav-bar title="我的编辑" left-text="返回" left-arrow @click-left="onClickLeft" />
    </header>
    <section>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <ul class="con">
          <li>
            <img src="../assets/t.jpg" alt />
            <p>
              <span>{{data}}</span>
              <span>{{content}}</span>
            </p>
          </li>
        </ul>
      </van-pull-refresh>
    </section>
  </div>
</template>

<script>
export default {
  name: "mineEdit",
  data() {
    return {
      data: localStorage.getItem("title"),
      content: localStorage.getItem("content"),
      isLoading: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
#mineEdit {
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
  margin-top: 46px;
  flex: 1;
}
.con {
  margin-top: 10px;
  padding: 0 16px;
}
.con li {
  height: 12vh;
  display: flex;
  justify-content: left;
  align-items: center;
  border-top: solid 0.5px #e1e1e1;
  border-bottom: solid 0.5px #e1e1e1;
}
.con li img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 16px;
}
.con li p {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;
}
.con li p span:last-child {
  font-size: 14px;
}
</style>
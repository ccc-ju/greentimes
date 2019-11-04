<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <ul class="pie">
      <li>
        <div class="fraud">
          <h4>刷单的套路</h4>
          <p>
            display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
            -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
            text-overflow，可以用来多行文本的情况下，用省略号“...”隐藏超出范围的文本 。
          </p>
        </div>
        <img src="../assets/t.jpg" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "colleage",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.pie {
  margin-top: 15px;
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
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.pie img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 10px;
}
</style>
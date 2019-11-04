<template>
  <div>
    <van-nav-bar title="美食攻略" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right" @click-right="onClickRight" />
    </van-nav-bar>

    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" v-tap="{methods:address}" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <br />
    <ul class="foodlist">
      <li>
        <img src="../assets/t.jpg" alt />
        <p><span>巴奴</span>
        <span>
          3篇攻略
          <br />距您直线距离679米
        </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "food",
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "A",
      option1: [{ text: "郑州", value: 0 }],
      option2: [
        { text: "附近", value: "a" },
        { text: "500米", value: "b" },
        { text: "1000米", value: "c" },
        { text: "2000米", value: "d" },
        { text: "5000米", value: "e" },
        { text: "全部", value: "f" }
      ],
      option3: [
        { text: "分类", value: "A" },
        { text: "全部", value: "B" },
        { text: "小吃快餐", value: "C" },
        { text: "面包甜点", value: "D" },
        { text: "中式菜肴", value: "E" },
        { text: "海外料理", value: "F" }
      ]
    };
  },
  methods: {
    address() {},
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("foodSearch");
    }
  }
};
</script>

<style scope="" >
.foodlist li {
  height: 80px;
  padding: 10px 20px;
  display: flex;
  border-top: solid 0.5px #e1e1e1; 
}
.foodlist li:last-child{
    border-bottom: solid 0.5px #e1e1e1; 
}
.foodlist li img {
  width: 80px;
  height: 80px;
  display: inline-block;
  border: 0;
  overflow: hidden;
}
.foodlist li p {
  height: 80px;
  vertical-align: top;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between
}
</style>
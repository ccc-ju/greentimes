<template>
  <div>
    <van-nav-bar
      title="编辑"
      left-text="返回"
      right-text="发布"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <ul>
      <li></li>
    </ul>
    <van-cell-group>
      <van-field v-model="value1" clearable label="标题" placeholder="请输入标题" />

      <van-field v-model="value2" type="string" label="内容" placeholder="请输入内容" />
    </van-cell-group>

    <van-button class="btn" type="primary" v-tap="{methods:storage}">存入草稿箱</van-button>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "edit",
  data() {
    return {
      value1: "",
      value2: "",
      list: "",
      data:""
    };

  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Dialog.confirm({
        title: "发布",
        message: "是否发布此内容"
      })
        .then(() => {
          this.$router.push("mineEdit");
        })
        .catch(() => {});
    },
    storage() {
      Dialog.confirm({
        title: "草稿箱",
        message: "是否存入草稿箱"
      })
        .then((data,list) => {
          data = {
            title: this.value1,
            content: this.value2
          };
          console.log(data);
          this.list += JSON.stringify(data)
          console.log(this.list);
          localStorage.setItem("Edit",this.list)
          // this.$router.push("drafts");
        })
        .catch(() => {});
    },
  }
};
</script>

<style scoped>
.btn {
  width: 285px;
  font-size: 20px;
  line-height: 50px;
  height: 50px;
  margin: 10px 45px;
}
</style>
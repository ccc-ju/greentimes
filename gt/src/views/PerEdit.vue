<template>
  <div id="peredit">
    <van-nav-bar title="个性编辑" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li v-tap="{methods:mineEdit}">
        <span>我的编辑</span>
      </li>
      <li v-tap="{methods:edit}">
        <span>编辑</span>
      </li>
      <li v-tap="{methods:drafts}">
        <span>草稿箱</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PerEdit",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    mineEdit(){
      this.$router.push("mineEdit");
    },
    edit(){
      this.$router.push("edit");
    },
    drafts(){
      this.$router.push("drafts");
    }
  }
};
</script>

<style scoped>
#peredit{
  width: 100vw;
  height: 100vh;
  background: #f1f1f1;
}
ul {
  margin: 10px 0;
}
li {
  list-style: none;
  background: #fff;
  border-top: solid 0.5px #bdbaba;
  padding: 0 16px;
  height: 40px;
  line-height: 40px;
}
li:last-child {
  border-bottom: solid 0.5px #bdbaba;
}
li span{
    font-size: 16px;
}
</style>
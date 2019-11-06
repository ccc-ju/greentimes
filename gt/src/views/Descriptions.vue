<template>
  <div>
    <van-nav-bar title=" " left-text left-arrow :fixed="true" @click-left="onClickLeft" />
    <div class="container">
      <h4>{{detail.name}}</h4>
      <img :src="detail.coverImg" />
      <p>{{detail.descriptions}}</p>
    </div>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";
export default {
  name: "description",
  data() {
    return {
      detail: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    console.log(this.$route.params._id);
    api.getDetail(this.$route.params._id, {}).then(data => {
      console.log(data.data);
      this.detail = data.data;
    });
  }
};
</script>

<style scoped="">
.container {
  margin-top: 50px;
}
.container h4 {
  font-size: 32px;
  text-align: center;
  line-height: 32px;
  margin: 0 16px;
}
.container img {
  width: 90%;
  height: 35vh;
  margin: 24px 16px;
}
.container p {
  font-size: 16px;
  line-height: 32px;
  margin: 0 16px;
  text-indent: 16px;
}
</style>

<template>
  <div class="wrap">
     <header>
        <van-nav-bar
          :title="title"
          left-arrow
          @click-left="onClickLeft"
        >
          <van-icon name="search" slot="right" />
        </van-nav-bar>
      </header>
     <van-uploader :after-read="afterRead" />
     <van-cell-group>
  <van-field
    v-model="message"
    rows="1"
    autosize
    label="标题"
    type="textarea"
    placeholder="请输入标题"
  />
  <van-field
    v-model="message"
    rows="1"
    autosize
    label="姓名"
    type="textarea"
    placeholder="请输入姓名"
  />
  <van-field
    v-model="message"
    rows="1"
    autosize
    label="学校"
    type="textarea"
    placeholder=""
  />
</van-cell-group>
<van-button type="primary" class="dl">下一步</van-button>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      title: "编辑标题",
      active: 0,
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
     onClickLeft() {
      this.$router.go(-1);
    },
  }
};
</script>
<style scoped="">
.wrap {
  width: 100%;
  height: 100%;
}
.dl {
  width: 80vw;
  margin: 3vh 0 0 10vw;
  border-radius: 5px;
}

</style>
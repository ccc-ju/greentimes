<template>
  <div>
    <van-nav-bar title="奋青" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="随笔">
        <ul class="pic-txt">
          <li>
            <img src="../assets/t.jpg" alt />
            <span>没一片雪花都会落在正确的位置--聆听</span>
            <span>赵晓铭</span>
          </li>
        </ul>
      </van-tab>
      <van-tab title="诗歌">
        <ul  class="shige">
          <li>
            <img src="../assets/t.jpg" alt />
            <div class="shi">
              <h4>丹霞张掖</h4>
              <span>润时</span>
              <p>
                盘古开天造万物，
                <br />盘古开天造万物。
                <br />盘古开天造万物，
                <br />盘古开天造万物。
              </p>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "struggle",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
     this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.pic-txt li {
  margin: 15px 0 0;
}
.pic-txt li img {
  width: 100%;
}
.pic-txt li span:nth-child(2) {
  font-size: 16px;
  margin: 0 10px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  vertical-align: middle;
}
.pic-txt li span:last-child {
  font-size: 14px;
  margin: 0 15px;
  line-height: 24px;
  vertical-align: middle;
}
.shige li{
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 10px;
  padding: 0 16px;
  height: 160px;
}
.shige img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.shi{
    margin-left:16px; 
}
.shi h4{
    font-size: 16px;
}
.shi span{
    font-size: 12px;
    line-height: 36px;
}
.shi p{
    font-size: 14px;
}
</style>
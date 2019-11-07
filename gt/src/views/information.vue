<template>
  <div id="infor">
    <header>
      <van-nav-bar title="个人信息" left-text="返回" left-arrow @click-left="onClickLeft" />
    </header>
    <section>
      <div class="headpic" v-tap="{methods:headpic}">
        <p>头像</p>
        <img src="../assets/t.jpg" />
      </div>
      <ul>
        <li>
          <span>青葱号</span>
          <span>{{num}}</span>
        </li>
        <li v-tap="{methods:nc}">
          <span>昵称</span>
          <span>
            {{nickname}}
            <van-icon class="iconh" name="arrow" />
          </span>
        </li>
        <li v-tap="{methods:autograph}">
          <span>个性签名</span>
          <van-icon class="iconh" name="arrow" />
        </li>
        <li v-tap="{methods:qrcode}">
          <span>我的二维码</span>
          <span>
            <van-icon name="qr" />
            <van-icon class="iconh" name="arrow" />
          </span>
        </li>
      </ul>
      <ul>
        <li v-tap="{methods:identity}">
          <span>身份资料</span>
          <span>
            {{authentication}}
            <van-icon class="iconh" name="arrow" />
          </span>
        </li>
        <li v-tap="{methods:education}">
          <span>最高学历资料</span>
          <span>
            {{authentication1}}
            <van-icon class="iconh" name="arrow" />
          </span>
        </li>
      </ul>

      <ul>
        <li v-tap="{methods:island}">
          <span>岛主等级</span>
          <span>
            {{grade}}
            <van-icon class="star" name="star" />
            <van-icon class="iconh" name="arrow" />
          </span>
        </li>
      </ul>
    </section>

    <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" @cancel="onCancel" />
  </div>
</template>

<script>
export default {
  name: "Personal",
  data() {
    return {
      num: localStorage.getItem("nickname"),
      nickname: localStorage.getItem("nickname1"),
      show: false,
      actions: [{ name: "拍照" }, { name: "去相册寻找" }],
      authentication: "未认证",
      authentication1: "未认证",
      grade: "洪荒岛岛主"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    headpic() {
      this.show = true;
    },
    onCancel() {
      this.show = false;
    },
    nc(){
      this.$router.push('nc')
    },
    autograph(){
       this.$router.push('autograph')
    },
    qrcode(){
       this.$router.push('qrcode')
    },
    identity(){
       this.$router.push('identity')
    },
    education(){
       this.$router.push('education')
    },
    island(){
      this.$router.push('island')
    },
  }
};
</script>

<style scoped>
body {
  width:100vw;
  height: 100vh;
}
#infor{
  width:100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header {
  height: 46px;
}

section {
  flex: 1;
}
.headpic {
  height: 60px;
  margin: 10px 0;
  line-height: 60px;
  border-bottom: solid 0.5px #bdbaba;
  border-top: solid 0.5px #bdbaba;
}
.headpic p {
  display: inline-block;
  font-size: 16px;
  line-height: 60px;
  margin: 0 16px;
}
.headpic img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 0;
  margin: 10px 16px;
  float: right;
}
ul {
  margin-bottom: 10px;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  background: #fff;
  border-top: solid 0.5px #bdbaba;
  padding: 0 16px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
li:last-child {
  border-bottom: solid 0.5px #bdbaba;
}
.star {
  color: red;
}
</style>
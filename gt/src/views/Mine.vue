<template>
  <div id="mine">
    <header v-tap="{methods:bg}">
      <div class="infor" v-tap="{methods:edit}">
        <img src="../assets/t.jpg" />
        <p>用户100134188</p>
        <span>
          {{titlename}}
          <br />
          青葱号：{{name}}
        </span>
      </div>
    </header>
    <section>
      <ul>
        <li v-tap="{methods:perEdit}">
          <span>
            <van-icon class="iconp1" name="edit" />个性编辑
          </span>
          <van-icon class="iconh" name="arrow" />
        </li>
        <li v-tap="{methods:payMent}">
          <span>
            <van-icon class="iconp2" name="gold-coin-o" />青葱支付
          </span>
          <van-icon class="iconh" name="arrow" />
        </li>
        <li v-tap="{methods:account}">
          <span>
            <van-icon class="iconp3" name="medel-o" />账户安全
          </span>
          <van-icon class="iconh" name="arrow" />
        </li>
        <li v-tap="{methods:service}">
          <span>
            <van-icon class="iconp4" name="service-o" />客服中心
          </span>
          <van-icon class="iconh" name="arrow" />
        </li>
        <li v-tap="{methods:share}">
          <span>
            <van-icon class="iconp5" name="friends-o" />分享给朋友
          </span>
          <van-icon class="iconh" name="arrow" />
        </li>
      </ul>
      <ul>
        <li v-tap="{methods:set}">
          <span>
            <van-icon class="iconp6" name="setting-o" />设置
          </span>
          <van-icon class="iconh" name="arrow" />
        </li>
      </ul>
    </section>
    <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" @cancel="onCancel" />
    <footer>
      <van-action-sheet v-model="show1" title="标题" cancel-text="取消" @cancel="onCancel">
        <share :config="config"></share>
      </van-action-sheet>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Mine",
  data() {
    return {
      active: 3,
      name: "100134188",
      titlename: "洪荒岛岛主",
      show: false,
      show1: false,
      actions: [{ name: "拍照" }, { name: "去相册寻找" }],
      config: {
        url: "http://www.baidu.com",
        source: "",
        title: "",
        description: "hi",
        image: "",
        sites: ["qzone", "qq", "weibo", "wechat"],
        wechatQrcodeTitle: "微信扫一扫：分享",
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>"
      }
    };
  },
  methods: {
    bg() {
      this.show = true;
    },
    onCancel() {
      this.show = false;
    },
    edit() {
      this.$router.push("information");
    },
    perEdit() {
      this.$router.push("PerEdit");
    },
    payMent() {
      this.$router.push("payMent");
    },
    account() {
      this.$router.push("Account1");
    },
    service() {
      this.$router.push("Service");
    },
    share() {
      this.show1 = true;
    },
    set() {
      this.$router.push("Set");
    }
  },
  mounted() {}
};
</script>


<style scoped="">
#mine {
  width: 100vw;
  height: 100vh;
  background: #f1f1f1;
}
header {
  width: 100%;
  height: 200px;
  background: url(../assets/t.jpg) no-repeat;
  background-size: 100% 200px;
}
.infor {
  width: 160px;
  position: relative;
  top: 50px;
  left: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.infor img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 0;
  overflow: hidden;
}
.infor p {
  color: #fff;
  font-size: 14px;
  margin-top: 5px;
}
.infor span {
  color: #fff;
  font-size: 14px;
  text-align: center;
}

section {
  margin-top: 10px;
}
ul {
  margin-bottom: 10px;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 40px;
  border-top: solid 0.5px #bdbaba;
  background: #fff;
}
li:last-child {
  border-bottom: solid 1px #bdbaba;
}

.iconp1,
.iconp2,
.iconp3,
.iconp4,
.iconp5,
.iconp6 {
  width: 30px;
  height: 30px;
  color: #fff;
  margin: 0 16px;
  text-align: center;
  line-height: 30px;
}
.iconp1 {
  background: rgb(140, 55, 226);
}
.iconp2 {
  background: rgb(22, 197, 16);
}
.iconp3 {
  background: rgb(4, 231, 235);
}
.iconp4 {
  background: rgb(255, 218, 6);
}
.iconp5 {
  background: rgb(240, 79, 30);
}
.iconp6 {
  background: rgb(17, 201, 94);
}
li span {
  color: #333;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconh {
  color: #333;
  font-size: 16px;
  line-height: 40px;
  margin: 0 16px;
}
footer {
  position: absolute;
  bottom: 0;
  padding: 0 25vw;
}
</style>
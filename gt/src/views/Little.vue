<template>
  <div>
    <van-nav-bar :title="title[0]" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="wap-nav" slot="right" />
    </van-nav-bar>
    <van-search placeholder="搜索" v-model="value" />
    <section>
        <ul class="per">
            <li>
                <img src="../assets/t.jpg" alt="">
                <p>
                    <span>李天龙</span>
                    <span>男</span>
                    <span>43岁</span>
                </p>
                <p>
                    <span>河南人民医院</span>
                    <span>男科</span>
                </p>
            </li>
        </ul>
    </section>
    <footer>
        <p>免费为青少年提供生理健康专家在线咨询，避免上当受骗和身心受到伤害</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "little",
  data() {
    return {
      title: ["郑州", "其他"],
      value:''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
section{
    margin: 20px 35px;
}
.per{
    position: relative;
}
.per li {
    position: absolute;
    width: 305px;
    height: 380px;
    border: solid 1px #e1e1e1;
    border-radius: 8px;
    box-shadow: 5px 5px 0 #f1f1f1;
}
.per li img{
    width: 305px;
    height: 305px;
    border: 0;
    overflow: hidden;
}
.per li p{
    display: flex;
    justify-content: space-between;
    margin: 10px 16px;
    font-size: 16px;
}
footer{
    position: absolute;
    bottom: 15px;
    background: blue;
    height: 40px;
    border-radius: 8px;
    margin: 0 16px;
}
footer p{
    text-align: center;
    line-height:20px;
    margin: 0 10px;
}
</style>
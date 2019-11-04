<template>
  <div>
    <van-nav-bar title="奶妈" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
<van-tabs v-model="active">
  <van-tab v-for="(item,i) in ming" :title="item" >
    <ul class="prolist">
      <li v-for="pro in list" v-tap='{methods:btn}'>
        <img src="../assets/t.jpg" alt="">
        <p>
          <span>【伊利】培然婴儿配方奶粉1段</span>
          <span>
            <i>浏览量：7649</i><br>
            <mark>￥328.00</mark>
          </span>
        </p>
      </li>
    </ul>
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
export default {
  name: "milk",
  data() {
      return {
        active: 0,
          ming:['伊利','伊利金领冠','蒙牛','飞鹤','贝因美','美赞臣','惠氏','爱他美','诺优能','南山','a2至初','美素佳儿'],
        list:[1]
      }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    btn(){

    }
  }
};
</script>

<style scoped>
.prolist li{
  margin-top:10px;
  height: 100px;
  padding: 10px 20px;
  display: flex;
  justify-content: left;
  border-top: solid 0.5px #e1e1e1;
}
.prolist li:last-child{
  border-bottom: solid 0.5px #e1e1e1;
}
.prolist li img{
  overflow: hidden;
  border: 0;
  width: 80px;
  height: 80px;
  margin: 10px 16px;
}
.prolist li p{
  margin: 10px 0;
   height: 80px;
   display: flex;
   flex-direction: column;
  justify-content: space-between;
}
i{
  font-style: normal;
}
mark{
  background: #fff;
  color: red;
  font-size: 16px;
}
</style>
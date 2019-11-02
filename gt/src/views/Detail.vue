<template>
  <div>
    <van-nav-bar title="详情" left-text="返回" left-arrow :fixed="true" @click-left="onClickLeft" />
    <div class="container">
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
       <van-card
        tag="打折"
        :thumb="detail.coverImg"
        :price="detail.price"
        :title="detail.name"
        :desc="detail.descriptions"
        origin-price="199.00"     
      />   
     
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" v-tap="{methods:add}" />
      <van-goods-action-button type="danger" text="立即购买" v-tap="{methods:buy}" />
    </van-goods-action>

    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import { Toast } from "vant";
import axios from "axios";
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};

export default {
  name: "Detail",
  data() {
    return {
      detail: "",
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
    };
  },
  methods: {
   
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickIcon() {
      this.$toast("点击图标");
    },
    add() {
     
       api.cart(
      { product: this.$route.params._id, quantity: 1 },
      localStorage.getItem('token')
      ).then(data => {
      if(data.data.code == 'success'){
        this.$router.push("/cart");
      }
       
    });
    },
    buy() {
      this.$router.push("/buy");

    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  },
  mounted(){
    console.log(this.$route.params._id)
    api.getDetail(
      this.$route.params._id,
      {},
      ).then(data => {
      console.log(data.data);
      this.detail = data.data;
    });
  }
};
</script>

<style scoped="">
.container {
  margin-top: 46px;
}
</style>

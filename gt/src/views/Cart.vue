<template>
  <div>
    <van-nav-bar title="购物车" left-text="返回" left-arrow :fixed="true" @click-left="onClickLeft" />
    <div class="container">
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
      <van-card
        tag="打折"
        :thumb="cart.coverImg"
        :price="cart.price"
        :title="cart.name"
        :desc="cart.descriptions"
      />
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        请选择收货地址
        <span v-tap="{methods:modify}">修改地址</span>
      </span>
    </van-submit-bar>
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
  name: "Cart",
  data() {
    return {
      cart: "",
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
    onSubmit() {},
     checked() {},
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    modify(){
      this.$router.push("/AddressEdit")
    }
  },
  mounted() {
    api.carts(
      { },
      localStorage.getItem('token')
      ).then(data => {
      // if(data.data.code == 'success'){
      //   this.$router.push("/cart");
      // }
      console.log(data)
      })
  }
}
</script>

<style scoped="">
.container {
  margin-top: 46px;
}
</style>

<template>
  <div>
    <van-nav-bar title="详情" left-text="返回" left-arrow :fixed="true" @click-left="onClickLeft" />
    <div class="container">
      <img :src="detail.coverImg" />
      <van-card
        tag="打折"
        :price="detail.price"
        :title="detail.name"
        :desc="detail.descriptions"
        origin-price="199.00"
      />
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"  />
      <van-goods-action-icon icon="cart-o" text="购物车" v-tap="{methods:cart}" />
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
  available: 1
};

export default {
  name: "Detail",
  data() {
    return {
      detail: "",
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    cart() {
      this.$router.push("/cart");
    },
    add() {
      api.cart(
          { product: this.$route.params._id, quantity:''},(localStorage.getItem('token'))
        )
        .then(data => {
          console.log(data.data)
          if (data.data.code == "success") {
            this.$toast("加入购物车成功");
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
  mounted() {
    // console.log(this.$route.params._id);
    api.getDetail(this.$route.params._id, {}).then(data => {
      if(data.data.code == 'success'){
        this.$router.push("/cart");
      }
      // console.log(data.data);
      this.detail = data.data;
    });
  }
};
</script>

<style scoped="">
.container {
  margin-top: 46px;
}
img {
  width: 100%;
  height: 35vh;
}
</style>

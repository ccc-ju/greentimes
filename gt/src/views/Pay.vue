<template>
  <div>
    <van-nav-bar title="付款" left-text="返回" left-arrow :fixed="true" @click-left="onClickLeft" />

    <div class="container">
      <!-- <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" /> -->
      <div v-for="(item,index) in list" class="box">
        <van-checkbox v-model="item.checked" @click="dx(index)" />
        <van-swipe-cell :on-close="onClose">
          <van-card
            class="card"
            tag="打折"
            :num="item.quantity"
            :thumb="item.product.coverImg"
            :price="item.product.price"
            :title="item.product.name"
            :desc="item.product.descriptions"
          />
          <template slot="right">
            <van-button square type="danger" text="删除" v-tap="{methods:del,id:item._id}" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <van-submit-bar :price="totalPrice" button-text="去付款" @submit="onSubmit">
       <van-checkbox v-model="checked" @click="qx()">全选</van-checkbox>
      <span slot="tip" v-tap="{methods:select}">
        <span v-tap="{methods:modify}"></span>
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
import { Dialog } from "vant";
import axios from "axios";
const coupon = {
  // available: 1,
  // condition: "无使用门槛\n最多优惠12元",
  // reason: "",
  // value: 150,
  // name: "优惠券名称",
  // startAt: 1489104000,
  // endAt: 1514592000,
  // valueDesc: "1.5",
  // unitDesc: "元"
};

export default {
  name: "Cart",
  data() {
    return {
      cart: "",
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      value: 1,
      checked: true,
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickIcon() {
      this.$toast("");
    },
    onSubmit() {
     
      this.$router.push("/pay");
    },
    // checked() {},
    onClose() {},
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    modify() {
      this.$router.push("/AddressEdit");
    },
    select() {
      this.$router.push("/AddressList");
    },
   
    dx(index) {
      console.log(this.list[index]);
      this.list[index].checked = !this.list[index].checked;
      var count = 0;
      this.list.map((item, index) => {
        if (item.checked) {
          count++;
        }
      });
      if (this.list.length == count) {
        this.checked = true;
      } else {
        this.checked = false;
      }
      console.log(count);
    },
    qx() {
      this.checked = !this.checked;
      this.list.map((item, index) => {
        item.checked = this.checked;
      });
    },
    del(val) {
      api.del(val.id, {}, localStorage.getItem("token")).then(data => {
        console.log(data.data);
        if (data.data) {
          alert("删除成功");
          location.reload();
        }
      });
    },
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          Dialog.confirm({
            message: "删除成功"
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  },
  mounted() {
    api.cartList({}, localStorage.getItem("token")).then(data => {
      // console.log(data.data[0].product.price);
      var arr = data.data;
      arr = arr.filter(function(item, index) {
        return item.product !== null;
      });
      arr.map((item, index) => {
        item.checked = true;
      });
      this.list = arr;
    });
  },
  computed: {
    totalPrice() {
      var sum = 0;
      this.list.map((item, index) => {
        if (item.checked) {
          sum += item.product.price * item.quantity;
        }
      });
      return sum * 100;
    }
  }
};
</script>

<style scoped="">
.container {
  margin-top: 7vh;
  margin-bottom: 13vh;
}
van-card {
  width: 70vw;
  margin-left: 10vw;
}
.box {
  position: relative;
}
.adddel {
  position: absolute;
  right: 5vw;
  top: 10vh;
  z-index: 2;
}
.van-checkbox {
  position: absolute;
  left: 3vw;
  top: 6vh;
  z-index: 1;
}
.card {
  width: 87vw;
  margin-left: 13vw;
}
.van-button::before {
  height: 100%;
}

.adddel em {
  width: 26px;
  height: 26px;
  line-height: 26px;
  color: #333333;
  font-size: 14px;
  border: 1px solid #d6d7dc;
  display: inline-block;
  text-align: center;
  font-style: normal;
}
.adddel input {
  border: none;
  width: 48px;
  height: 25px;
  border-top: 1px solid #d6d7dc;
  border-bottom: 1px solid #d6d7dc;
  line-height: 25px;
  color: #333333;
  font-size: 14px;
  display: inline-block;
  padding: 0 5px;
  margin: 0;
  text-align: center;
  padding-top: 1px;
}
.van-submit-bar__tip{
  background: white;
  height: 2vh;
}
.van-submit-bar__bar{
  background: #ecedee;
}
</style>

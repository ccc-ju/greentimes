<template>
  <div>
     <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      name:'AddressList',
      title:'收货地址',
      chosenAddressId: "1",
      list: []
    };
  },

  methods: {
    onAdd() {
      this.$toast("新增地址");
    },
    onEdit(item, index) {
      this.$toast("编辑地址:" + index);
    },
     onClickLeft() {
      this.$router.go(-1);
    },
  }
};
</script>


<style scoped>
</style>


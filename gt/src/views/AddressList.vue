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
      Toast("新增地址");
    },

    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
     onClickLeft() {
      this.$router.go(-1);
    },
  }
};
</script>


<style scoped>
</style>


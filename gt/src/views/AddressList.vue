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
import * as api from "../api/getProlist.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      name:'AddressList',
      title:'收货地址',
      chosenAddressId: "1",
      list: [],
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]

    };
  },

  methods: {
    onAdd() {
      this.$router.push('/addressEdit')
    },
    onEdit() {
       this.$router.push('/addressEdit')
      //  api.xiugai(
      //     {
      //       product:this.$route.params._id,
      //       receiver: "",
      //       mobile:'',
      //       regions: "",
      //       address: "",
      //       idDefault: true
      //     },
      //     (localStorage.getItem('token'))
      //   )
      //   .then(data => {
      //     console.log(data.data);
      //   });
      
    },
     onClickLeft() {
      this.$router.go(-1);
    },
  }
};
</script>


<style scoped>
</style>


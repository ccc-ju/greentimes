<template>
  <div>
    <van-nav-bar title="添加收货地址" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    ></van-address-edit>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import areaList from "../api/area.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      name: "AddressEdit",
      title: "添加收货地址",
      areaList,
      searchResult: []
    };
  },

  methods: {
    onSave() {
      api.address(
          {
            receiver: "",
            mobile:'',
            regions: "",
            address: "",
            idDefault: ""
          },
          localStorage.getItem("token")
        )
        .then(data => {
          console.log(data.data);

          this.$router.push("/addressList");
        });
      
    },
    onDelete() {
      Toast("delete");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>


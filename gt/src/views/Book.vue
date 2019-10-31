<template>
  <div>
    <van-nav-bar :title="title" :fixed="true">
      <van-icon name="contact" slot="right" v-tap="{methods:add}" />
    </van-nav-bar>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
      class="box"
    ></van-search>

    <van-cell-group>
      <van-field label="新朋友" left-icon="contact" disabled v-tap="{methods:xin}" />
      <van-field label="黑名单" left-icon="contact" disabled v-tap="{methods:black}" />
    </van-cell-group>
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-swipe-cell :on-close="onClose">
         <van-field label="用户" left-icon="contact" disabled v-tap="{methods:det}"/>
        <template slot="right">
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </van-index-bar>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "Book",
  data() {
    return {
      title: "通讯录",
      active: 0,
      value: "",
      checked: false,
      e: ""
    };
  },
  methods: {
    onSearch() {
      this.$router.push("");
    },
    add() {
      this.$router.push("/addFri");
    },
    xin() {
      this.$router.push("/newFri");
    },
    black() {
      this.$router.push("/blackList");
    },
     det() {
      this.$router.push("/friList");
    },
     onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  },
  mounted() {
    this.$emit("toparent", this.title);
  }
};
</script>


 <style scoped="">
.box {
  margin-top: 45px;
}
img {
  width: 25px;
  height: 25px;
}
p {
  height: 3vh;
}
</style>
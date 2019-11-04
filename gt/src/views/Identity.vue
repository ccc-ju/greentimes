<template>
  <div>
    <header>
      <van-nav-bar
        class="sfzl"
        title="请完善身份资料"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <section>
      <van-cell-group>
        <van-field v-model="username" clearable label="姓名" placeholder="请输入姓名" />

        <van-field v-model="idcord" type="number" label="身份证号" placeholder="请输入身份证号" />
      </van-cell-group>

      <p>
        <mark>提示：</mark>
        <span>
          1.请填写本人真实信息。
          <br />2.如果您提交的信息有误，您有一次修改身份资料的机会。
          <br />3.修改信息会降低您的岛主积分。
        </span>
      </p>

      <van-button class="sub" type="primary" size="large">提交</van-button>
    </section>
  </div>
</template>

<script>
export default {
  name: "identity",
  data() {
    return {
      value: "",
      username: "",
      idcord: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style  scoped>
p {
  margin: 15px 10px;
}
mark {
  vertical-align: text-top;
  background: #fff;
  color: red;
}
p span {
  display: inline-block;
  vertical-align: text-top;
}
.sub {
  font-size: 18px;
  text-align: center;
  line-height: 100%;
  width: 325px;
  margin: 0 25px;
}
</style>
<template>
  <div id="island">
    <header>
      <van-nav-bar title="岛主星级介绍" left-text="返回" left-arrow @click-left="onClickLeft" />
    </header>
    <section>
      <h3>
        <van-icon class="star" name="star" />岛主星级介绍
      </h3>
      <p>会员等级到达对应岛主星级分数,会立即升为改星级。</p>
      <table>
        <tr>
          <th>岛主星级</th>
          <th>对应升级分数</th>
        </tr>
        <tr>
          <td>洪荒岛岛主</td>
          <td>0分及以下</td>
        </tr>
        <tr>
          <td>过客岛岛主</td>
          <td>1-999分</td>
        </tr>
        <tr>
          <td>钓鱼岛岛主</td>
          <td>1000-4999分</td>
        </tr>
        <tr>
          <td>捕鱼岛岛主</td>
          <td>5000-99999分</td>
        </tr>
        <tr>
          <td>青葱岛岛主</td>
          <td>10000-49999分</td>
        </tr>
        <tr>
          <td>侠客岛岛主</td>
          <td>50000-99999</td>
        </tr>
        <tr>
          <td>桃花岛岛主</td>
          <td>100000-199999</td>
        </tr>
        <tr>
          <td>蓬莱岛岛主</td>
          <td>200000-499999</td>
        </tr>
        <tr>
          <td>至尊岛岛主</td>
          <td>500000以上</td>
        </tr>
      </table>

      <h3>
        <van-icon class="up" name="upgrade" />升级岛主星级规则
      </h3>
      <p>
        会员注册信息真实有效。积极参加青葱时代举办的各种活动，例如:在百科管家编辑发布文章、爱琴海创建岛屿、爱琴海留言互动、勤工俭学等，我们会给予加分处理。
        <br />会员在注册过程中使用虚假信息，或者在岛屿中散布流言蜚语、恶意攻击别人等行为，我们会根据事情的严重性给予相应的减分处理。扣至零分后，如有上述减分行为会继续扣为负分。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "island",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
island {
  height: 100%;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  padding: 16px 18px;
}
h3 {
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 18px;
}
.star {
  color: red;
}
.up {
  color: gold;
}
p {
  margin: 8px 14px;
  font-size: 13px;
}
table {
  width: 300px;
  margin: 5px 15px;
  text-align: center;
  background: #f1f1f1;
}
th {
  background: #e1e1e1;
  font-size: 16px;
  height: 40px;
}
td {
  background: #fff;
  font-size: 16px;
  height: 32px;
}
</style>
<template>
  <div>
    <van-nav-bar title="搭配" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right"/>
    </van-nav-bar>

    <van-tabs v-model="active">
      <van-tab title="三观人生">
        <ul class="list">
          <li>
            <p class="news">
              <span>叫醒自己的24张图！！</span>
              <span>第二届中国国际进口博览会将于11月5日至10日在上海举行。截至目前，这场国际盛会已吸引4300多名中外媒体记者采访报道，其中境外记者近900人。今天，进博会新闻中心正式启用，为中外记者提供专业、高效、便捷、温馨的服务，打造进博会的记者之家，并首次为媒体提供基于5G网络进行信号传输的体验服务。</span>
            </p>
            <img src="../assets/t.jpg" alt />
          </li>
        </ul>
      </van-tab>
      <van-tab title="社交礼仪">
        <ul class="list">
          <li>
            <p class="news">
              <span>叫醒自己的24张图！！</span>
              <span>第二届中国国际进口博览会将于11月5日至10日在上海举行。截至目前，这场国际盛会已吸引4300多名中外媒体记者采访报道，其中境外记者近900人。今天，进博会新闻中心正式启用，为中外记者提供专业、高效、便捷、温馨的服务，打造进博会的记者之家，并首次为媒体提供基于5G网络进行信号传输的体验服务。</span>
            </p>
            <img src="../assets/t.jpg" alt />
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "cation",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  }
};
</script>

<style scoped>
.list li {
  margin-top: 10px;
  height: 100px;
  display: flex;
  padding: 10px 16px;
}
.news {
  display: flex;
  flex-direction: column;
  justify-content: top;
  font-size: 16px;
}
.news span:last-child {
  font-size: 12px;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.list li img {
  width: 100px;
  height: 100px;
  margin: 0 10px;
}
</style>
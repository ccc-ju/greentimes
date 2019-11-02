<template>
  <div>
    <header>
      <van-nav-bar
        class="sfzl"
        title="请完善最高学历资料"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <section>
      <van-tabs @click="onClick">
        <van-tab title="在校生">
          <van-cell-group>
            <van-field
              v-model="city"
              clearable
              label="高校城市"
              placeholder="请选择高校城市"
              right-icon="arrow"
              v-tap="{methods:adress}"
            />
            <van-field
              v-model="shcool"
              type="string"
              label="在读高校"
              placeholder="请选择在读高校"
              right-icon="arrow"
            />
            <van-field
              v-model="yard"
              type="string"
              label="院系"
              placeholder="请选择院系"
              right-icon="arrow"
            />
            <van-field
              v-model="education"
              type="string"
              label="学历"
              placeholder="请选择在读学历"
              right-icon="arrow"
            />
            <van-field
              v-model="major"
              type="string"
              label="所学专业"
              placeholder="请选择专业"
              right-icon="arrow"
            />
            <van-field
              v-model="year"
              type="string"
              label="入学年份"
              placeholder="请选择入学年份"
              right-icon="arrow"
            />
            <van-field v-model="xh" type="number" label="学号" placeholder="请输入学号" />
          </van-cell-group>
        </van-tab>
        <van-tab title="非在校生">
          <van-field
            v-model="city"
            clearable
            label="高校城市"
            placeholder="请选择高校城市"
            right-icon="arrow"
            v-tap="{methods:adress}"
          />
          <van-field
            v-model="shcool"
            type="string"
            label="在读高校"
            placeholder="请选择在读高校"
            right-icon="arrow"
          />
          <van-field
            v-model="yard"
            type="string"
            label="院系"
            placeholder="请选择院系"
            right-icon="arrow"
          />
          <van-field
            v-model="education"
            type="string"
            label="学历"
            placeholder="请选择在读学历"
            right-icon="arrow"
          />
          <van-field
            v-model="major"
            type="string"
            label="所学专业"
            placeholder="请选择专业"
            right-icon="arrow"
          />
          <van-field
            v-model="year"
            type="string"
            label="入学年份"
            placeholder="请选择入学年份"
            right-icon="arrow"
          />
          <van-field v-model="xh" type="number" label="学号" placeholder="请输入学号" />
        </van-tab>
      </van-tabs>
    </section>
    
  </div>
</template>

<script>
export default {
  name: "education",
  data() {
    return {
      city: "",
      shcool: "",
      yard: "",
      education: "",
      major: "",
      year: "",
      xh: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClick(name, title) {},
    adress(){
        this.$router.push('city');
    }
  }
};
</script>

<style  scoped>
</style>
<template>
  <van-search
    background="rgb(79, 192, 141)"
    v-model="value"
    show-action
    placeholder="请输入小区或地址"
  >
    <template #label>
      <span class="label" @click="goCity"
        >{{ address }}<i class="iconfont icon-arrow"></i
      ></span>
    </template>
    <template #action>
      <van-icon name="location-o" @click="$router.push('/map')" />
    </template>
    <template #left>
      <van-icon name="arrow-left" @click="backFn()" />
    </template>
  </van-search>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    return {
      value: "",
      address:
        (localStorage.getItem("hkzf_city") &&
          JSON.parse(localStorage.getItem("hkzf_city")).label) ||
        "上海",
    };
  },
  methods: {
    backFn() {
      this.$router.back();
    },
    goCity() {
      this.$router.push("/city");
    },
  },
};
</script>

<style scoped lang="less">
.van-search {
  z-index: 1;
  width: 100%;
  span {
    border-right: 1px solid #ccc;
    i {
      font-size: 8px;
    }
  }
}
.van-icon {
  color: #fff;
  line-height: 40px;
  font-size: 25px !important;
}
.van-icon-arrow-left {
  margin-right: 15px;
}
</style>

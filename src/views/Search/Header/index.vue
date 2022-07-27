<template>
  <van-search
    background="rgb(79, 192, 141)"
    show-action
    left-icon="arrow-down"
    placeholder="请输入小区或地址"
  >
    <template #left>
      <van-icon @click="backFn" name="arrow-left" />
    </template>
    <template #action>
      <van-icon name="location-o" />
    </template>
  </van-search>
</template>

<script>
export default {
  methods: {
    backFn() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.van-search {
  position: fixed;
  z-index: 100;
  width: 100%;
}
.van-icon {
  color: #fff;
  line-height: 40px;
  font-size: 25px !important;
}
</style>

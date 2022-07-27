<template>
  <div>
    <template>
      <van-search
        background="transparent"
        v-model="value"
        show-action
        left-icon="arrow-down"
        right-icon="search"
        placeholder="请输入小区或地址"
      >
        <template #action>
          <van-icon name="location-o" />
        </template>
      </van-search>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
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

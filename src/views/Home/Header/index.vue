<template>
  <div>
    <template>
      <van-search
        background="transparent"
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
          <van-icon name="location-o" />
        </template>
      </van-search>
    </template>
  </div>
</template>

<script>
export default {
  name: "Header",
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
    goCity() {
      this.$router.push("/city");
    },
  },
};
</script>

<style scoped lang="less">
.van-search {
  position: fixed;
  z-index: 100;
  width: 100%;
  i {
    font-size: 8px;
  }
}
.van-icon {
  color: #fff;
  line-height: 40px;
  font-size: 25px !important;
}
.label {
  border-right: 1px solid #ccc;
  padding-right: 10px;
}
</style>

<template>
  <div class="describe">
    <van-cell title="房屋描述" />
    <textarea
      rows="5"
      placeholder="请输入房屋描述信息"
      v-model="value"
      @blur="description"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    description() {
      this.$store.commit("SET_DESCRIBE", this.value);
    },
  },
};
</script>

<style scoped lang="less">
.describe {
  padding-bottom: 60px;
  background-color: #f5f5f9;
  textarea {
    width: 100%;
    border: 0;
    font-size: 14px;
    height: 130px;
    padding: 10px 15px;
  }
}
</style>

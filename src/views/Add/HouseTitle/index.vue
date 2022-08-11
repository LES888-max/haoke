<template>
  <div>
    <van-cell title="房屋标题" />
    <van-field
      v-model="title"
      placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
      @blur="titleFn"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    titleFn() {
      this.$store.commit("SET_TITLE", this.title);
    },
  },
};
</script>

<style></style>

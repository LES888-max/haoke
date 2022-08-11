<template>
  <div class="houseTitle">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      typeof: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
.houseTitle {
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 10px;
  padding: 15px 0;
  border-bottom: 1px solid #cecece;
  line-height: unset;
}
</style>

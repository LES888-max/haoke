<template>
  <div>
    <van-cell title="房屋图片" />
    <van-field name="uploader">
      <template #input>
        <van-uploader v-model="uploader" :max-count="6" upload-icon="plus" />
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploader: [],
      fileImg: "",
    };
  },
  watch: {
    uploader(value) {
      this.fileImg = "";
      this.$store.commit("SET_FILE", "");
      const formData = new FormData();
      if (value.length == 0) return;
      value.forEach((item) => {
        formData.append("file", item.file);
      });
      this.$store.commit("SET_FILE", formData);
      this.fileImg = formData;
    },
  },
};
</script>

<style scoped lang="less"></style>

<template>
  <div>
    <van-nav-bar title="我的租房" left-arrow @click-left="onClickLeft" />
    <houses :imgList="imgList"></houses>
    <p v-if="show">你还没有房源，去发布房源吧！</p>
  </div>
</template>

<script>
import Houses from "@/components/houses";
import { getRantApi } from "@/api";
export default {
  data() {
    return {
      imgList: [],
      show: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    async getRant() {
      const {
        data: { body },
      } = await getRantApi();
      this.imgList = body;
      if (this.imgList.length == 0) [(this.show = true)];
    },
  },
  components: {
    Houses,
  },
  created() {
    this.getRant();
  },
};
</script>

<style lang="less" scoped>
:deep(.van-nav-bar) {
  .van-nav-bar__content {
    background-color: #21b97a;
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>

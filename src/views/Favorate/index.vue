<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    <houses :imgList="imgList"></houses>
  </div>
</template>

<script>
import Houses from "@/components/houses";
import { getFavorateHouseApi } from "@/api";
export default {
  data() {
    return {
      imgList: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    async getFavorate() {
      const {
        data: { body },
      } = await getFavorateHouseApi();
      this.imgList = body;
    },
  },
  components: {
    Houses,
  },
  created() {
    this.getFavorate();
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

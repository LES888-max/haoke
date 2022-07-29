<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="obj in urlList" :key="obj.id"
        ><img :src="`http://liufusong.top:8080${obj.imgSrc}`"
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getSwiperApi } from "@/api";
export default {
  name: "banner",
  data() {
    return {
      urlList: [],
    };
  },
  async created() {
    try {
      const res = await getSwiperApi();
      this.urlList = res.data.body;
    } catch (e) {
      console.log(e.message);
    }
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
}
.van-swipe.my-swipe {
  position: relative;
}
</style>

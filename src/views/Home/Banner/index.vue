<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img src="http://liufusong.top:8080/img/swiper/3.png"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="http://liufusong.top:8080/img/swiper/2.png"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="http://liufusong.top:8080/img/swiper/1.png"
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {};
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

<template>
  <div>
    <van-grid :border="false" :column-num="4">
      <van-grid-item>
        <van-image
          width="1.6rem"
          height="1.6rem"
          :src="require('../../../assets/imgs/1.png')"
        ></van-image>
        <p>整租</p>
      </van-grid-item>

      <van-grid-item>
        <van-image
          width="1.6rem"
          height="1.6rem"
          :src="require('../../../assets/imgs/2.png')"
        ></van-image>
        <p>合租</p>
      </van-grid-item>
      <van-grid-item>
        <van-image
          width="1.6rem"
          height="1.6rem"
          :src="require('../../../assets/imgs/3.png')"
        ></van-image>
        <p>地图找房</p>
      </van-grid-item>
      <van-grid-item>
        <van-image
          width="1.6rem"
          height="1.6rem"
          :src="require('../../../assets/imgs/4.png')"
        ></van-image>
        <p>出去租</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Select",
};
</script>

<style scoped lang="less">
:deep(.van-grid-item) {
  p {
    margin: 12px 0;
    font-size: 14px;
  }
}
</style>

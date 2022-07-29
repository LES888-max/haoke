<template>
  <div>
    <van-grid :border="false" :column-num="4">
      <van-grid-item>
        <van-image
          width="60px"
          height="60px"
          :src="require('../../../assets/imgs/1.png')"
        ></van-image>
        <p style="margin: 12px 0">整租</p>
      </van-grid-item>

      <van-grid-item>
        <van-image
          width="60px"
          height="60px"
          :src="require('../../../assets/imgs/2.png')"
        ></van-image>
        <p style="margin: 12px 0">合租</p>
      </van-grid-item>
      <van-grid-item>
        <van-image
          width="60px"
          height="60px"
          :src="require('../../../assets/imgs/3.png')"
        ></van-image>
        <p style="margin: 12px 0">地图找房</p>
      </van-grid-item>
      <van-grid-item>
        <van-image
          width="60px"
          height="60px"
          :src="require('../../../assets/imgs/4.png')"
        ></van-image>
        <p style="margin: 12px 0">出去租</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Select",
};
</script>

<style scoped></style>

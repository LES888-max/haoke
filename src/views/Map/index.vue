<template>
  <div>
    <van-nav-bar title="地图找房" left-arrow @click-left="onClickLeft" />
    <div id="container"></div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
  securityJsCode: "a7655f6a95e74a7ea1d2760aac5dd0cb",
};
export default {
  name: "Map",
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    initMap() {
      AMapLoader.load({
        key: "3b321a58b12b7e086191eb97366373cb",
        version: "2.0",
        plugins: [""],
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            viewMode: "2D",
            zoom: "10",
            center: [121, 46],
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style scoped lang="less">
:deep(.van-nav-bar) {
  background-color: #21b97a;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-icon {
    color: #fff;
  }
}
#container {
  width: 375px;
  height: 621px;
  background-color: #fff;
}
</style>

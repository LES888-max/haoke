<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
  securityJsCode: "a7655f6a95e74a7ea1d2760aac5dd0cb",
};
export default {
  data() {
    return {
      map: null,
    };
  },
  props: {
    center: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "3b321a58b12b7e086191eb97366373cb",
        version: "2.0",
        plugins: [""],
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            viewMode: "2D",
            zoom: "18",
            center: [
              Number(this.center.longitude) - 0.0065,
              Number(this.center.latitude) - 0.006,
            ],
          });
          let marker = new AMap.Marker({
            position: new AMap.LngLat(
              Number(this.center.longitude) - 0.0065,
              Number(this.center.latitude) - 0.006
            ),
            content: `<span class="label" style="width:${
              this.title.length * 15
            }px">${this.title}</span> <div class="mapArrow"></div>`,
            offset: new AMap.Pixel(-13, -30),
          });
          this.map.add(marker);
        })
        .catch((e) => console.log(e));
    },
  },
  watch: {
    center() {
      this.initMap();
    },
  },
};
</script>

<style scoped lang="less">
#container {
  height: 180px;
  margin-top: 10px;
  background-color: #fff;
  :deep(.label) {
    text-align: center;
    font-size: 12px;
    display: block !important;
    background-color: rgb(238, 93, 91);
    border: 1px solid rgb(255, 0, 0);
    padding: 3px;
    color: #fff;
  }
  :deep(.mapArrow) {
    background: url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png)
      no-repeat;
    position: absolute;
    width: 11px;
    height: 10px;
    top: 23px;
    left: 10px;
    overflow: hidden;
  }
}
</style>

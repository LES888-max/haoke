<template>
  <div class="houseRecommend">
    <house-title title="猜你喜欢" />
    <house-list :imgList="imgList"></house-list>
  </div>
</template>

<script>
import HouseList from "@/components/houses";
import HouseTitle from "./Title";
export default {
  data() {
    return {
      imgList: [
        {
          desc: "三室/71/南/蓝色海岸",
          houseCode: "5cc45c121439630e5b4065af",
          houseImg: "/newImg/7bkc2an1d.jpg",
          price: 18000,
          tags: ["近地铁"],
          title: "蓝色海岸 3室1厅 18000元",
        },
        {
          desc: "三室/69/西南/蓝色海岸",
          houseCode: "5cc45b0a1439630e5b402a57",
          houseImg: "/newImg/7bi65k0d4.jpg",
          price: 16000,
          tags: ["近地铁"],
          title: "海边精致三房 全海景 南北通透 拎包入住",
        },
        {
          desc: "二室/59/南/中体奥林匹克花园",
          houseCode: "5cc484f51439630e5b49c317",
          houseImg: "/newImg/7bk5dee87.jpg",
          price: 2600,
          tags: ["近地铁"],
          title: "中体奥林匹克花园装修好，采光好，近小区门口",
        },
      ],
    };
  },
  components: {
    HouseTitle,
    HouseList,
  },
};
</script>

<style scoped lang="less">
.houseRecommend {
  padding: 0 15px;
  background: #fff;
  overflow: hidden;
}
</style>

<template>
  <div class="main">
    <van-nav-bar
      :title="houseData.community"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in houseData.houseImg" :key="index">
        <van-image :src="`http://liufusong.top:8080${item}`" />
      </van-swipe-item>
    </van-swipe>
    <house-detail :houseData="houseData"></house-detail>
    <house-map
      :center="houseData.coord"
      :title="houseData.community"
    ></house-map>
    <house-about :houseData="houseData"></house-about>
    <house-set :houseData="houseData"></house-set>
    <house-recommend></house-recommend>
    <div class="footer">
      <div class="collect" @click="collect">
        <van-icon
          :name="isFavorite ? 'star' : 'star-o'"
          :class="isFavorite ? 'favorate' : ''"
        />
        收藏
      </div>
      <div class="online">在线咨询</div>
      <div class="call">电话预约</div>
    </div>
  </div>
</template>

<script>
import {
  getHouseMessageApi,
  addHouseCollection,
  yesornoCollection,
  deleteHouseCollection,
} from "@/api";
import HouseDetail from "./components/HouseDetail";
import HouseMap from "./components/HouseMap";
import houseAbout from "./components/HouseAbout";
import HouseSet from "./components/HouseSet";
import HouseRecommend from "./components/HouseRecommend";

export default {
  name: "HouseMessage",
  data() {
    return {
      houseData: {},
      houseId: "",
      isFavorite: false,
    };
  },
  methods: {
    async getHouseMessage() {
      this.houseId = this.$route.params.id;
      const {
        data: { body },
      } = await getHouseMessageApi(this.houseId);
      this.houseData = body;
    },
    async checkCollection() {
      const { data } = await yesornoCollection(this.houseId);
      if (data.status === 400) {
        this.$toast("请重新登录");
        return;
      }
      this.isFavorite = data.body.isFavorite;
    },
    onClickLeft() {
      this.$router.back();
    },
    async addCollection() {
      try {
        await addHouseCollection(this.houseId);
        this.$toast("收藏成功");
        this.isFavorite = true;
      } catch {
        this.$toast("收藏失败");
      }
    },
    async deleteCollection() {
      try {
        await deleteHouseCollection(this.houseId);
        this.$toast("取消收藏成功");
        this.isFavorite = false;
      } catch {
        this.$toast("取消收藏失败");
      }
    },
    collect() {
      if (!this.isFavorite) {
        this.addCollection();
      } else {
        this.deleteCollection();
      }
    },
  },
  created() {
    this.getHouseMessage();
    this.checkCollection();
  },
  components: {
    HouseDetail,
    HouseMap,
    houseAbout,
    HouseSet,
    HouseRecommend,
  },
};
</script>

<style scoped lang="less">
.main {
  background-color: #f5f5f5;
}
:deep(.van-nav-bar) {
  .van-nav-bar__content {
    background-color: #21b97a;
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  height: 45px;
  display: flex;
  border-top: 1px solid #ccc;
  .call,
  .online,
  .collect {
    flex: 1;
    line-height: 45px;
    text-align: center;
    font-size: 17px;
    color: #999;
  }
  .call {
    background-color: #21b97a;
    color: #fff;
  }
  .online {
    border-left: 1px solid #ccc;
  }
}
.favorate {
  color: orange;
}
</style>

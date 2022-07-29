<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="#">所在城市</van-index-anchor>
      <van-cell :title="city" />
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        v-for="(obj, index) in hotCity"
        :key="index"
        :title="obj.label"
        @click="chooseCity(obj.value, obj.label)"
      />
      <div v-for="item in arr" :key="item">
        <van-index-anchor :index="item" />
        <van-cell
          :title="obj.label"
          v-for="(obj, index) in getCity(item)"
          :key="index"
          @click="chooseCity(obj.value, obj.label)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCitysApi, getHotCityApi } from "@/api";
export default {
  name: "City",
  data() {
    return {
      list: [],
      indexList: [],
      hotCity: [],
      city: JSON.parse(localStorage.getItem("hkzf_city")).label,
      arr: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    deal(val) {
      this.indexList.push(...["#", "热"]);
      val.forEach((item) => {
        if (this.arr.indexOf(item.short.charAt(0).toUpperCase()) == -1) {
          this.arr.push(item.short.charAt(0).toUpperCase());
        }
      });
      this.arr.sort();
      this.indexList.push(...this.arr);
    },
    getCity(val) {
      const firstName = val.toLowerCase();
      const firstNameCity = [];
      this.list.forEach((item) => {
        if (item.pinyin.charAt(0) == firstName) {
          firstNameCity.push(item);
        }
      });
      return firstNameCity;
    },
    chooseCity(value, label) {
      localStorage.setItem("hkzf_city", JSON.stringify({ label, value }));
      this.$router.push("/home");
    },
  },
  async created() {
    try {
      const res = await getCitysApi(1);
      this.list = res.data.body;
      this.deal(this.list);
    } catch (e) {
      console.log(e.message);
    }
    try {
      const res = await getHotCityApi();
      this.hotCity = res.data.body;
    } catch (e) {
      console.log(e.message);
    }
  },
};
</script>

<style scoped lang="less">
:deep(.van-nav-bar) {
  background-color: #21b97a;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 45px;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-icon-arrow-left:before {
    color: #fff;
  }
}
:deep(.van-index-bar) {
  margin-top: 45px;
  .van-index-anchor {
    background-color: rgb(241, 241, 241);
  }
  .van-cell {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  .van-index-bar__sidebar {
    height: 80%;
    .van-index-bar__index--active {
      color: #fff;
      background-color: #21b97a;
    }
    .van-index-bar__index {
      padding: 0 2px 0 2px;
      margin-bottom: 10px;
      border-radius: 50px;
    }
  }
  .van-index-bar__index {
    font-size: 14px;
    line-height: 18px;
  }
}
</style>

<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="onClickLeft" />
    <message></message>
    <house-title></house-title>
    <house-image></house-image>
    <house-pz></house-pz>
    <describe></describe>
    <div class="add-bottom">
      <div class="cancel" @click="cancel">取消</div>
      <div class="confirm" @click="confirm">确认</div>
    </div>
  </div>
</template>

<script>
import Message from "./HouseMessage";
import HouseTitle from "./HouseTitle";
import HouseImage from "./HouseImage";
import HousePz from "./HousePz";
import Describe from "./Describe";
import { issueHouseImgApi, issueHouseApi } from "@/api";
export default {
  name: "Add",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    cancel() {
      this.$router.back();
    },
    async confirm() {
      const {
        data: { body },
      } = await issueHouseImgApi(this.$store.state.file);

      const houseImg = body.join("|");
      const data = {};
      data.houseImg = houseImg;
      data.title = this.$store.state.title;
      data.description = this.$store.state.description;
      data.oriented = this.$store.state.oriented.value || "";
      data.supporting = this.$store.state.supporting;
      data.price = this.$store.state.price;
      data.roomType = this.$store.state.roomType.value || "";
      data.size = this.$store.state.size;
      data.floor = this.$store.state.floor.value || "";
      data.community = this.$store.state.community.value || "";
      console.log(data);
      let flag = true;
      for (let key in data) {
        if (data[key].length == 0) {
          flag = false;
        }
      }
      if (!flag) {
        this.$toast("请输入完整信息");
        return;
      }
      try {
        await issueHouseApi(data);
        this.$toast.success("发布成功");
      } catch {
        this.$toast("请重新登录");
      }
    },
  },
  components: {
    Message,
    HouseTitle,
    HouseImage,
    HousePz,
    Describe,
  },
};
</script>

<style scoped lang="less">
:deep(.van-nav-bar) {
  .van-nav-bar__content {
    background-color: #21b97a;
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
.add-bottom {
  position: sticky;
  bottom: 0;
  .cancel,
  .confirm {
    display: inline-block;
    width: 50%;
    text-align: center;
    height: 45px;
    line-height: 45px;
    font-size: 15px;
  }
  .cancel {
    color: #21b97a;
    background-color: #fff;
  }
  .confirm {
    color: #fff;
    background-color: #21b97a;
  }
}
</style>

<template>
  <div class="houseSet">
    <house-title title="房源概况" />
    <div class="contact">
      <div class="user">
        <img src="../../../assets/imgs/avatar.png" />
        <div class="userInfo">
          <div>王女士</div>
          <div class="userAuth">
            <i class="iconfont icon-auth"></i>
            已认证房主
          </div>
        </div>
      </div>
      <span class="sendMessage">发消息</span>
    </div>
    <div class="text">{{ houseData.description }}</div>
  </div>
</template>

<script>
import HouseTitle from "./Title";
export default {
  props: {
    houseData: {
      type: Object,
      required: true,
    },
  },
  components: {
    HouseTitle,
  },
};
</script>

<style scoped lang="less">
.houseSet {
  margin: 10px 0;
  padding: 0 10px;
  line-height: 1.15;
  background: #fff;
  .contact {
    position: relative;
    .user {
      margin-bottom: 10px;
      display: flex;
      img {
        width: 52px;
        height: 52px;
        margin: 10px 10px 0 0;
      }
    }
    .userInfo {
      padding: 15px 0 0 5px;
      font-size: 14px;
      .userAuth {
        font-size: 12px;
        color: #fa5741;
        margin-right: 5px;
        margin-top: 10px;
        i {
          font-size: 12px;
        }
      }
    }
    .sendMessage {
      font-size: 14px;
      position: absolute;
      right: 15px;
      top: 20px;
      color: #33be85;
      border: 1px solid #33be85;
      border-radius: 3px;
      padding: 3px 15px;
    }
  }
  .text {
    font-size: 14px;
    line-height: 1.6;
    padding: 10px 0;
    color: #333;
  }
}
</style>

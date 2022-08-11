<template>
  <div class="houseAbout">
    <house-title title="房屋配套" />
    <ul>
      <li v-for="(item, index) in about" :key="index">
        <p>
          <i :class="item.icon"></i>
        </p>
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import HouseTitle from "./Title";
export default {
  data() {
    return {
      list: [
        {
          icon: "iconfont icon-wardrobe",
          text: "衣柜",
        },
        {
          icon: "iconfont icon-wash",
          text: "洗衣机",
        },
        {
          icon: "iconfont icon-air",
          text: "空调",
        },
        {
          icon: "iconfont icon-gas",
          text: "天然气",
        },
        {
          icon: "iconfont icon-ref",
          text: "冰箱",
        },
        {
          icon: "iconfont icon-Heat",
          text: "暖气",
        },
        {
          icon: "iconfont icon-vid",
          text: "电视",
        },
        {
          icon: "iconfont icon-heater",
          text: "热水器",
        },
        {
          icon: "iconfont icon-broadband",
          text: "宽带",
        },
        {
          icon: "iconfont icon-sofa",
          text: "沙发",
        },
      ],
    };
  },

  components: {
    HouseTitle,
  },
  props: {
    houseData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    about() {
      if (!this.houseData.supporting) return [];
      return this.list.filter((item) => {
        if (this.houseData.supporting.indexOf(item.text) === -1) return false;
        return true;
      });
    },
  },
};
</script>

<style scoped lang="less">
.houseAbout {
  padding: 0 10px;
  background-color: #fff;
  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    background-color: #fff;
    li {
      display: inline-block;
      width: 20%;
      text-align: center;
      padding: 10px 0;
      // background-color: #fff;
      p {
        i {
          font-size: 23px;
        }
      }
    }
  }
}
</style>

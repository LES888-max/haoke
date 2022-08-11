<template>
  <div>
    <van-cell title="房屋配置" />
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ current: arr[index] }"
        @click="chooseFn(index)"
      >
        <p>
          <i :class="item.icon"></i>
        </p>
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
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
      arr: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  },
  methods: {
    chooseFn(index) {
      this.arr.splice(index, 1, !this.arr[index]);
      let arr = [];
      this.list.forEach((item, index) => {
        if (this.arr[index]) {
          arr.push(item.text);
        }
      });
      const str = arr.join("|");
      this.$store.commit("SET_SUPPOETING", str);
    },
  },
};
</script>

<style scoped lang="less">
ul {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-bottom: 20px;
  background-color: #f5f5f9;
  li {
    display: inline-block;
    width: 20%;
    text-align: center;
    padding: 10px 0;
    background-color: #fff;
    p {
      i {
        font-size: 23px;
      }
    }
  }
  .current {
    color: #21b97a;
  }
}
</style>

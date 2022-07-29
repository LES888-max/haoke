<template>
  <div class="main">
    <div class="nav">
      <div
        class="box"
        v-for="(item, index) in navList"
        :key="index"
        @click="chooseFn(index)"
      >
        <span :class="{ current: index == current }"
          >{{ item
          }}<i
            class="iconfont icon-arrow"
            :class="{ current: index == current }"
          ></i
        ></span>
      </div>
    </div>
    <div class="mask" @click="changeShow" v-show="show"></div>
    <van-picker show-toolbar :columns="columns" v-show="show">
      <template #default>
        <div class="cancel"><p>取消</p></div>
        <div class="confirm"><p>确认</p></div>
      </template>
    </van-picker>
  </div>
</template>

<script>
import { getCityChildApi } from "@/api";
export default {
  name: "Nav",

  data() {
    return {
      navList: ["区域", "方式", "租金", "筛选"],
      current: -1,
      show: false,
      columns: [],
      area: [],
      money: [
        "不限",
        "1000及以下",
        "1000-2000",
        "2000-3000",
        "3000-4000",
        "4000-5000",
        "5000-6000",
        "6000-7000",
        "7000以上",
      ],
      mode: ["不限", "整租", "合租"],
    };
  },
  methods: {
    chooseFn(index) {
      this.current = index;
      this.show = true;
      if (index == 0) {
        this.columns = this.area;
      } else if (index == 1) {
        this.columns = this.mode;
      } else if (index == 2) {
        this.columns = this.money;
      }
    },
    changeShow() {
      this.show = false;
    },
  },
  async created() {
    const id = JSON.parse(localStorage.getItem("hkzf_city")).value;

    const res = await getCityChildApi(id);
    const city = JSON.parse(localStorage.getItem("hkzf_city")).label;
    this.area.push({ text: city, children: [] });
    res.data.body.forEach(async (item, index1) => {
      this.area[0].children.push({ text: item.label, children: [] });
      const child = await getCityChildApi(item.value);

      child.data.body.forEach((item) => {
        this.area[0].children[index1].children.push({
          text: item.label,
        });
      });
    });
  },
};
</script>

<style scoped lang="less">
.main {
  background-color: #fff;
  z-index: 4;
  .nav {
    background-color: #fff;
    z-index: 4;
    position: sticky;
    width: 100%;
    display: flex;
    top: 0px;
    height: 45px;
    border-bottom: 1px solid #ccc;
    .box {
      flex: 1;
      .current {
        color: #21b97a !important;
      }
      i {
        font-size: 8px;
        color: #999;
      }
      span {
        font-size: 17px;
        display: block;
        line-height: 45px;
        width: 100%;
        text-align: center;
      }
    }
  }
  :deep(.van-picker) {
    background-color: #fff;
    z-index: 4;
    position: relative;
    .van-picker__toolbar {
      position: absolute;
      width: 100%;
      bottom: -44px;
      left: 0;
      .cancel,
      .confirm {
        background-color: #fff;
        flex: 1;
        display: block;
        width: 50%;
        border: 1px solid #ccc;
        height: 100%;
        p {
          text-align: center;
          height: 100%;
          font-size: 18px;
          line-height: 42px;
        }
      }
      .confirm {
        background-color: #21b97a;
      }
    }
  }
  .mask {
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>

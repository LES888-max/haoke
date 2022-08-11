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
    <div :class="{ mask1: current == 3 }" @click="modeMask"></div>
    <div class="mode" v-show="current == 3">
      <div v-for="(item, index) in type" :key="index">
        <p>{{ item }}</p>
        <div class="select">
          <span
            @click="selectFn(index, id)"
            v-for="(item, id) in typeList[index]"
            :key="id"
            :class="{ choose: arr[index] == id }"
            >{{ item.label }}</span
          >
        </div>
      </div>
      <div class="btn">
        <span class="btn1" @click="cancelBtn">取消</span>
        <span class="btn2" @click="confirmBtn">确认</span>
      </div>
    </div>
    <van-picker
      show-toolbar
      :columns="columns"
      v-show="show"
      @confirm="confirm"
      @cancel="cancel"
    >
      <template #confirm>
        <div class="confirm"><p>确认</p></div>
      </template>
      <template #cancel>
        <div class="cancel"><p>取消</p></div>
      </template>
    </van-picker>
    <van-list
      offset="0"
      @load="onLoad"
      :finished="finished"
      loading-text="正在加载"
      :loading="isLoad"
    >
      <houses :imgList="imgList"></houses>
    </van-list>
  </div>
</template>

<script>
import Houses from "@/components/houses";
import { getCity } from "@/util/auth";
import { getHouseConditionApi, getSearchHouseApi } from "@/api";
export default {
  name: "Nav",
  components: {
    Houses,
  },
  data() {
    return {
      type: ["户型", "朝向", "楼层", "房屋亮点"],
      navList: ["区域", "方式", "租金", "筛选"],
      current: -1,
      show: false,
      columns: [],
      area: [],
      money: [],
      mode: [],
      typeList: [],
      arr: [-1, -1, -1, -1],
      imgList: [],
      params: {},
      modeValue: [],
      moneyValue: [],
      isLoad: false,
      finished: false,
      start: 1,
      end: 20,
    };
  },
  methods: {
    chooseFn(index) {
      this.current = index;
      if (index == 0) {
        this.columns = this.area;
        this.show = true;
      } else if (index == 1) {
        this.columns = this.mode;
        this.show = true;
      } else if (index == 2) {
        this.columns = this.money;
        this.show = true;
      } else if (index == 3) {
        this.show = false;
      }
    },
    changeShow() {
      this.show = false;
    },
    loading() {
      this.$nextTick(() => {
        this.$toast.loading({
          duration: 0,
          message: "加载中...",
          forbidClick: true,
        });
      });
    },
    modeMask() {
      this.current = -1;
      this.show = false;
    },
    confirm(v) {
      this.start = 1;
      this.end = 20;
      if (this.current == 0) {
        console.log(v);
        if (v[0] == "区域") {
          if (v[1] == "不限") {
            this.params.area = "null";
          } else {
            if (v[2] == "不限") {
              const str = v[1];
              let area = "";
              this.area[0].children.forEach((item) => {
                if (item.text == str) {
                  area = item.value;
                  this.params.area = area;
                }
              });
            } else {
              const str = v[2];
              const str1 = v[1];
              let area = "";
              this.area[0].children.forEach((item) => {
                if (item.text == str1) {
                  item.children.forEach((item) => {
                    if (item.text == str) {
                      area = item.value;
                      this.params.area = area;
                    }
                  });
                }
              });
            }
          }
        } else {
          if (v[1] == "不限") {
            this.params.subway = "null";
          } else if (v[2] == "不限") {
            const str = v[1];
            let subway = "";
            this.area[1].children.forEach((item) => {
              if (item.text == str) {
                subway = item.value;
                this.params.subway = subway;
              }
            });
          } else {
            const str = v[2];
            const str1 = v[1];
            let subway = "";
            this.area[1].children.forEach((item) => {
              if (item.text == str1) {
                item.children.forEach((item) => {
                  if (item.text == str) {
                    subway = item.value;
                    this.params.subway = subway;
                  }
                });
              }
            });
          }
        }
      } else if (this.current == 1) {
        const rentType = this.modeValue[this.mode.indexOf(v)];
        this.params.rentType = rentType;
      } else if (this.current == 2) {
        const price = this.moneyValue[this.money.indexOf(v)];
        this.params.price = price;
      }
      this.current = -1;
      this.show = false;
      this.loading();
      this.imgList = [];
      this.getHouses();
    },
    cancel() {
      this.current = -1;
      this.show = false;
    },
    cancelBtn() {
      this.current = -1;
      this.show = false;
    },
    confirmBtn() {
      this.start = 1;
      this.end = 20;
      this.arr.forEach((item, index) => {
        if (item == -1) {
          if (index == 0) {
            delete this.params.roomType;
          } else if (index == 1) {
            delete this.params.oriented;
          } else if (index == 2) {
            delete this.params.floor;
          } else if (index == 3) {
            delete this.params.characteristic;
          }
        } else {
          if (index == 0) {
            this.params.roomType = this.typeList[0][item].value;
          } else if (index == 1) {
            this.params.oriented = this.typeList[1][item].value;
          } else if (index == 2) {
            this.params.floor = this.typeList[2][item].value;
          } else if (index == 3) {
            this.params.characteristic = this.typeList[3][item].value;
          }
        }
      });
      this.current = -1;
      this.show = false;
      this.loading();
      this.imgList = [];
      this.getHouses();
    },
    selectFn(a, b) {
      if (this.arr[a] == b) {
        this.arr.splice(a, 1, -1);
        return;
      }
      this.arr.splice(a, 1, b);
    },
    async getHouses() {
      this.params.start = this.start;
      this.params.end = this.end;
      try {
        const {
          data: {
            body: { list },
          },
        } = await getSearchHouseApi(this.params);
        this.$toast.success("加载成功！");
        this.imgList.push(...list);
      } catch {
        this.$toast.fail("加载失败！");
      }
    },
    async getCondition() {
      try {
        const { value } = getCity();
        const {
          data: { body },
        } = await getHouseConditionApi(value);
        this.area.push(body.area);
        this.area.push(body.subway);
        this.area = JSON.parse(
          JSON.stringify(this.area).replace(/label/g, "text")
        );
        this.area[0].children[0].children = [{ text: "" }];
        this.area[1].children[0].children = [{ text: "" }];
        const arr = [];
        arr.push(...body.rentType);
        arr.forEach((item) => {
          this.mode.push(item.label);
          this.modeValue.push(item.value);
        });
        const arr1 = [];
        arr1.push(...body.price);
        arr1.forEach((item) => {
          this.money.push(item.label);
          this.moneyValue.push(item.value);
        });
        this.typeList.push(
          body.roomType,
          body.oriented,
          body.floor,
          body.characteristic
        );
      } catch (e) {
        console.log(e.message);
      }
    },
    onLoad() {
      this.start = this.end;
      this.end += 20;
      this.getHouses();
    },
  },
  async created() {
    const id = getCity();
    const renType = this.$route.query.rentType;
    if (renType) {
      this.params.rentType = renType;
    }
    this.params.cityId = id.value;
    this.loading();
    this.getCondition();
    this.getHouses();
  },
};
</script>

<style scoped lang="less">
.main {
  background-color: #fff;
  z-index: 3;
  .nav {
    background-color: #fff;
    z-index: 3;
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
    z-index: 3;
    position: sticky;
    top: 45px;
    .van-picker__toolbar {
      position: absolute;
      width: 100%;
      bottom: -44px;
      left: 0;
      .van-picker__cancel,
      .van-picker__confirm {
        width: 50%;
        padding: 0;
      }
      .cancel,
      .confirm {
        flex: 1;
        display: block;
        border: 1px solid #ccc;
        height: 100%;
        p {
          text-align: center;
          height: 100%;
          font-size: 18px;
          line-height: 42px;
        }
      }
      .cancel {
        background-color: #fff;
        color: #21b97a;
      }
      .confirm {
        background-color: #21b97a;
        color: #fff;
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
  .mask1 {
    position: fixed;
    z-index: 4;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .mode {
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    height: 100%;
    overflow-y: auto;
    background-color: #fff;
    z-index: 5;
    padding: 10px 10px 0;
    padding-bottom: 60px;
    p {
      margin: 20px 0;
      font-size: 15px;
    }
    .select {
      margin-left: 40px;
      border-bottom: 1px solid #ccc;
      span {
        display: inline-block;
        height: 32px;
        width: 70px;
        margin: 0 18px 15px 0;
        border: 1px solid #ddd;
        border-radius: 3px;
        line-height: 32px;
        text-align: center;
        font-size: 12px;
        color: #888;
      }
      .choose {
        border: 1px solid #21b97a;
        color: #21b97a;
        background-color: #defaef;
      }
    }
  }
  .btn {
    position: fixed;
    right: 0;
    left: 94px;
    bottom: 0;
    width: 281px;
    .btn1,
    .btn2 {
      display: inline-block;
      border-top: 1px solid #ccc;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      width: 50%;
      text-align: center;
    }
    .btn1 {
      color: #21b97a;
      background-color: #fff;
    }
    .btn2 {
      background-color: #21b97a;
      color: #fff;
    }
  }
}
</style>

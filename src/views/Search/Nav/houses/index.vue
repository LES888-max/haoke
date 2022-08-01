<template>
  <div class="outer">
    <div
      class="box"
      v-for="(obj, index) in imgList"
      :key="index"
      @click="click(obj.houseCode)"
    >
      <div class="img">
        <img :src="`http://liufusong.top:8080${obj.houseImg}`" alt="" />
      </div>
      <div class="text">
        <h3>{{ obj.title || "豪华洋房" }}</h3>
        <p>{{ obj.desc }}</p>
        <div class="kind">
          <span v-for="(item, index) in obj.tags" :key="index">{{ item }}</span>
        </div>
        <div class="price">￥{{ obj.price }} <i>元/月</i></div>
      </div>
    </div>
    <div v-if="imgList.length == 0" class="empty-container">
      <img src="http://liufusong.top:8080/img/not-found.png" alt="" />
      <p>暂无房源</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Houses",
  data() {
    return {};
  },
  props: {
    imgList: {
      typeof: Array,
      default: () => {
        [];
      },
    },
  },
  created() {},
  methods: {
    click(code) {
      this.$router.push({
        name: "detail",
        params: {
          code,
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
.outer {
  padding: 0 20px 50px;
  .box {
    height: 130px;
    display: flex;
    align-content: center;
    border-bottom: 1px solid #ccc;
    img {
      margin-top: 24px;
      width: 116px;
      height: 90px;
    }
    .text {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 22px;
      h3 {
        font-size: 15px;
        color: #394043;
      }
      p {
        font-size: 12px;
        color: #afb2b3;
      }
      span {
        color: #39becd;
        background: #e1f5f8;
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        line-height: 12px;
        margin-bottom: 3px;
      }
      .price {
        color: #fa5741;
        font-size: 16px;
        font-weight: 700;

        i {
          font-weight: normal;
          font-size: 10px;
        }
      }
    }
  }
  .empty-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 150px;
      margin: 30px 0;
    }
    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }
}
</style>

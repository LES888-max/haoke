<template>
  <div class="houseDetail">
    <h3 class="houseTitle">{{ houseData.title }}</h3>
    <div class="tags flexbox">
      <div
        class="flexboxitem"
        v-for="(item, index) in houseData.tags"
        :key="index"
      >
        <span class="tagsspan">{{ item }}</span>
      </div>
    </div>
    <div class="infoPrice flexbox">
      <div class="infoPriceItem">
        <div>{{ houseData.price }}<span>元/月</span></div>
        <div>租金</div>
      </div>
      <div class="infoPriceItem">
        <div>
          {{ houseData.roomType }}
        </div>
        <div>房型</div>
      </div>
      <div class="infoPriceItem">
        <div>{{ houseData.size }}平米</div>
        <div>面积</div>
      </div>
    </div>
    <div class="flexbox infoBasic">
      <div class="flexboxitem">
        <div>
          <span>装修：</span>
          精装
        </div>
        <div>
          <span>楼层：</span>
          {{ houseData.floor }}
        </div>
      </div>
      <div class="flexboxitem">
        <div>
          <span>朝向：</span>
          {{ houseData.oriented && houseData.oriented[0] }}
        </div>
        <div>
          <span>类型：</span>
          普通住宅
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    houseData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
.houseDetail {
  background-color: #fff;
  padding: 15px;
  .houseTitle {
    font-weight: 400;
    font-size: 16px;
    color: #333;
    line-height: 1.15;
    margin: 16px 0;
  }
  .tags {
    position: relative;
    margin: 10px 0;

    .tagsspan {
      display: inline-block;
      font-size: 12px;
      border-radius: 3px;
      padding: 4px 5px;
      margin-right: 5px;
      line-height: 12px;
      color: #39becd;
      background: #e1f5f8;
    }
  }
  .infoPrice {
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    margin: 15px 0;
    padding: 15px 0;
    .infoPriceItem {
      text-align: center;
      color: #999;
      font-size: 14px;
      flex: 1;
      div:first-child {
        color: #fa5741;
        font-size: 18px;
        font-weight: bolder;
      }
      span {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  .infoBasic {
    font-size: 13px;
    align-items: flex-start;
    span {
      color: #999;
      display: inline-block;
      margin-right: 5px;
    }
  }
}
.flexbox {
  text-align: left;
  overflow: hidden;
  display: flex;
}
.flexboxitem {
  box-sizing: border-box;
  flex: 1;
  margin-left: 8px;
  min-width: 10px;
}
</style>

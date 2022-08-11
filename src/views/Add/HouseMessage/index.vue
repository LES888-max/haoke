<template>
  <div class="message">
    <van-cell title="房屋信息" class="message-header" />
    <van-cell title="小区名称" is-link :value="value" to="/rent/search" />
    <van-form>
      <van-field
        v-model="rent"
        label="租金"
        placeholder="请输入租金/月"
        :rules="[{ required: true }, { pattern, message: '请输入数字' }]"
        @blur="rentFn"
      >
        <template #button>
          <span>￥/月</span>
        </template>
      </van-field>
      <van-field
        v-model="area"
        label="建筑面积"
        placeholder="请输入建筑面积"
        :rules="[{ required: true }, { pattern, message: '请输入数字' }]"
        @blur="sizeFn"
      >
        <template #button>
          <span>m²</span>
        </template>
      </van-field>
    </van-form>
    <van-cell
      title="户型"
      is-link
      :value="$store.state.roomType.label || value1"
      @click="selectFn(1)"
    />
    <van-cell
      title="所在楼层"
      is-link
      :value="$store.state.floor.label || value2"
      @click="selectFn(2)"
    />
    <van-cell
      title="朝向"
      is-link
      :value="$store.state.oriented.label || value3"
      @click="selectFn(3)"
    />
    <van-popup v-model="show" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        value-key="label"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>

<script>
import { getHouseParamsApi } from "@/api";
export default {
  name: "Add",
  data() {
    return {
      rent: "",
      pattern: /^(([1-9]{1}\d*)|([0]{1}))(\.(\d){1,2})?$/,
      area: "",
      community: "",
      value: "输入该小区名称",
      show: false,
      columns: [],
      floor: [],
      roomType: [],
      oriented: [],
      current: "",
      value1: "请选择",
      value2: "请选择",
      value3: "请选择",
    };
  },
  methods: {
    selectFn(num) {
      this.current = num;
      this.show = true;
      if (num === 1) {
        this.columns = this.roomType;
      } else if (num === 2) {
        this.columns = this.floor;
      } else {
        this.columns = this.oriented;
      }
    },
    onConfirm(value) {
      if (this.current == 1) {
        this.$store.commit("ADD_ROOMTYPE", value);
      } else if (this.current == 2) {
        this.$store.commit("ADD_FLOOR", value);
      } else {
        this.$store.commit("ADD_ORIENTED", value);
      }
      this.show = false;
    },
    onCancel() {
      this.show = false;
    },
    async getHouseParams() {
      const {
        data: { body },
      } = await getHouseParamsApi();
      this.floor = body.floor;
      this.roomType = body.roomType;
      this.oriented = body.oriented;
    },
    rentFn(e) {
      this.$store.commit("SET_PRICE", e.target.value);
    },
    sizeFn(e) {
      this.$store.commit("SET_SIZE", e.target.value);
    },
  },
  created() {
    const communityName = this.$store.state.community.label;
    if (communityName) {
      this.value = communityName;
    } else {
      this.value = "输入该小区名称";
    }
    this.getHouseParams();
  },
};
</script>

<style scoped lang="less">
.message {
  font-size: 14px;
  .message-header {
    font-size: 15px;
    color: #21b97a;
  }
}
:deep(.van-picker) {
  .van-picker__cancel,
  .van-picker__confirm {
    width: 50%;
    border-bottom: 1px solid #ccc;
  }
  .van-picker__cancel {
    color: #21b97a;
  }
  .van-picker__confirm {
    background-color: #21b97a;
    color: #fff;
  }
}
</style>

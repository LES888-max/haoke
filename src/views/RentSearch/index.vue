<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        background="#f6f5f6"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="choose(item)">
        {{ item.communityName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getCommunityApi } from "@/api";
export default {
  data() {
    return {
      value: "",
      list: [],
    };
  },
  methods: {
    async onSearch() {
      const {
        data: { body },
      } = await getCommunityApi(
        this.value,
        this.$store.state.cityMessage.value
      );
      console.log(body);
      this.list = body;
    },
    onCancel() {
      this.$router.back();
    },
    choose(value) {
      console.log(value);
      const community = {};
      community.value = value.community;
      community.label = value.communityName;
      this.$store.commit("ADD_COMMUNITY", community);
      this.$router.push("/rent/add");
    },
  },
};
</script>

<style scoped lang="less">
:deep(.van-search__content) {
  background-color: #fff;
}
ul {
  margin: 10px 10px 10px;
  line-height: 50px;
  position: absolute;
  top: 44px;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  li {
    padding-left: 2px;
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getCityApi } from "./api";
export default {
  name: "App",
  async beforeCreate() {
    if (!localStorage.getItem("hkzf_city")) {
      const res = await getCityApi("北京");
      console.log(res.data.body);
      localStorage.setItem("hkzf_city", JSON.stringify(res.data.body));
    }
  },
};
</script>

<style scoped lang="less">
body {
  background-color: #f5f5f9;
  font-size: 14px;
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
    <Footer
      v-show="
        $route.path != '/city' &&
        $route.path != '/map' &&
        $route.path != '/register' &&
        $route.path != '/favorate' &&
        $route.path != '/rant'
      "
    ></Footer>
  </div>
</template>

<script>
import { getCityApi } from "./api";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },
  async beforeCreate() {
    if (!localStorage.getItem("hkzf_city")) {
      const res = await getCityApi("北京");
      console.log(res.data.body);
      localStorage.setItem("hkzf_city", JSON.stringify(res.data.body));
    }
  },
};
</script>

<style></style>

import Vue from "vue";
import App from "./App.vue";
import "./vant";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import "./vant";
import router from "./router";
import store from "./store";
import "amfe-flexible";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

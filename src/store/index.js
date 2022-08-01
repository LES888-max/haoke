import Vue from "vue";

import Vuex from "vuex";

import { getCity, setCity } from "@/util/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  mutations: {
    SET_CITY(value) {
      setCity(value);
    },
  },
  state: {
    cityMessage: getCity() || {},
  },
  getters: {},
});

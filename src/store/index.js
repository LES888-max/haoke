import Vue from "vue";

import Vuex from "vuex";

import { getCity, setCity, getToken, setToken } from "@/util/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  mutations: {
    SET_CITY(state, value) {
      setCity(value);
    },
    SET_TOKEN(state, value) {
      setToken(value);
    },
  },
  state: {
    cityMessage: getCity() || {},
    tokenObj: getToken() || {},
  },
  getters: {},
});

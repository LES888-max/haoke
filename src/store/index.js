import Vue from "vue";

import Vuex from "vuex";

import { getCity, setCity, getToken, setToken } from "@/util/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {},
  mutations: {
    SET_CITY(state, value) {
      state.cityMessage = value;
      setCity(value);
    },
    SET_TOKEN(state, value) {
      state.tokenObj = value;
      setToken(value);
    },
    ADD_COMMUNITY(state, value) {
      state.community = value;
    },
    ADD_ROOMTYPE(state, value) {
      state.roomType = value;
    },
    ADD_FLOOR(state, value) {
      state.floor = value;
    },
    ADD_ORIENTED(state, value) {
      state.oriented = value;
    },
    SET_SUPPOETING(state, value) {
      state.supporting = value;
    },
    SET_PRICE(state, value) {
      state.price = Number(value);
    },
    SET_SIZE(state, value) {
      state.size = Number(value);
    },
    SET_DESCRIBE(state, value) {
      state.description = value;
    },
    SET_TITLE(state, value) {
      state.title = value;
    },
    SET_FILE(state, value) {
      state.file = value;
    },
  },
  state: {
    cityMessage: getCity() || {},
    tokenObj: getToken() || {},
    community: {},
    roomType: {},
    floor: {},
    oriented: {},
    supporting: "",
    price: "",
    size: "",
    description: "",
    title: "",
    file: "",
  },
  getters: {},
});

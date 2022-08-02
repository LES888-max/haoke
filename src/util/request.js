import axios from "axios";

import store from "@/store";

const request = axios.create({
  baseURL: "http://liufusong.top:8080/",
});

request.interceptors.request.use(
  function (config) {
    const token = store.state.tokenObj.token;
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;

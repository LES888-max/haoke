import request from "@/util/request";

export const registerApi = (data) =>
  request({
    url: "/user/login",
    method: "POST",
    data,
  });

export const getFavorateHouseApi = () =>
  request({
    url: "/user/favorites",
  });

export const getRantApi = () =>
  request({
    url: "/user/houses",
  });
